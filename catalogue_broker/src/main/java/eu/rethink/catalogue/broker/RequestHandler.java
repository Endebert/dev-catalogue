/*******************************************************************************
 * Copyright (c) 2015 -- 2017 by Fraunhofer Fokus
 * <p/>
 * This contribution was based on the contribution from the leshan repository
 * on github (master branch as of 20151023).
 * <p/>
 * The copyright and list of contributors of the original, baseline contribution
 * is kept below
 * <p/>
 * Copyright (c) 2013-2015 Sierra Wireless and others.
 * <p/>
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 * <p/>
 * The Eclipse Public License is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 * http://www.eclipse.org/org/documents/edl-v10.html.
 * <p/>
 * Contributors:
 * Sierra Wireless - initial API and implementation
 *******************************************************************************/

/*******************************************************************************
 * Copyright (c) 2013-2015 Sierra Wireless and others.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *    http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *    http://www.eclipse.org/org/documents/edl-v10.html.
 *
 * Contributors:
 *     Sierra Wireless - initial API and implementation
 *******************************************************************************/
package eu.rethink.catalogue.broker;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import eu.rethink.catalogue.broker.json.ClientSerializer;
import eu.rethink.catalogue.broker.json.LwM2mNodeDeserializer;
import eu.rethink.catalogue.broker.json.LwM2mNodeSerializer;
import eu.rethink.catalogue.broker.json.ResponseSerializer;
import org.apache.commons.lang.StringUtils;
import org.eclipse.leshan.LinkObject;
import org.eclipse.leshan.core.node.*;
import org.eclipse.leshan.core.request.ReadRequest;
import org.eclipse.leshan.core.response.LwM2mResponse;
import org.eclipse.leshan.core.response.ValueResponse;
import org.eclipse.leshan.server.californium.impl.LeshanServer;
import org.eclipse.leshan.server.client.Client;
import org.eclipse.leshan.server.client.ClientRegistryListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

/**
 * reTHINK specific Request Handler for requests on /.well-known/*
 */
public class RequestHandler {
    private String WELLKNOWN_PREFIX = "/.well-known/";
    private int HYPERTY_OBJ_ID = 1337;
    private LeshanServer server;
    private final Gson gson;
    private static final Logger LOG = LoggerFactory.getLogger(RequestHandler.class);

    public RequestHandler(LeshanServer server) {
        this.server = server;
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.registerTypeHierarchyAdapter(Client.class, new ClientSerializer());
        gsonBuilder.registerTypeHierarchyAdapter(LwM2mResponse.class, new ResponseSerializer());
        gsonBuilder.registerTypeHierarchyAdapter(LwM2mNode.class, new LwM2mNodeSerializer());
        gsonBuilder.registerTypeHierarchyAdapter(LwM2mNode.class, new LwM2mNodeDeserializer());
        gsonBuilder.setDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX");
        this.gson = gsonBuilder.create();

        server.getClientRegistry().addListener(clientRegistryListener);

    }


    public String handleGET(String path) {
        LOG.info("Handling GET for: " + path);
        // remove /.well-known/ from path
        path = StringUtils.removeStart(path, WELLKNOWN_PREFIX);
        LOG.info("adapted path: " + path);
        // split path up
        String[] pathParts = StringUtils.split(path, '/');

        // no endpoint given -> return all clients
        if (pathParts.length == 0) {
//            Collection<Client> clients = server.getClientRegistry().allClients();
//            String json = this.gson.toJson(clients.toArray(new Client[]{}));
            return "Please provide resource type and name. Example: /hyperty/MyHyperty";
        } else if (pathParts.length == 1) {
            // hyperty | protocolstub only
            String resourceType = pathParts[0];

            // TODO: return only hyperty clients or protocolstub clients

            if (resourceType.equals("hyperty")) {
                String json = this.gson.toJson(clientToHypertyMap.keySet().toArray());
                return json;
            } else {
                return "Invalid resource type. Please use: hyperty | protocolstub";
            }

        } else {
            String resourceType = pathParts[0];
            String hypertyName = pathParts[1];
            String resourceName = null;

            if (pathParts.length > 2) {
                resourceName = pathParts[2];
            }

            LOG.info("resourcetype: " + resourceType);
            LOG.info("hypertyname: " + hypertyName);

            LOG.info("resourceName: " + resourceName);

            // target should be: /<endpoint>/<objectID>/<instance>
            String target = hypertyToInstanceMap.get(hypertyName);
            LOG.info(String.format("target for hyperty '%s': %s", hypertyName, target));

            if (target != null) {
                String[] targetPaths = StringUtils.split(target, "/");
                LOG.info("checking endpoint: " + targetPaths[0]);
                Client client = server.getClientRegistry().get(targetPaths[0]);
                if (client != null) {
                    ReadRequest request = new ReadRequest(StringUtils.removeStart(target, "/" + targetPaths[0]));
                    LwM2mResponse response = server.send(client, request);
                    return this.gson.toJson(response);
                } else {
                    String error = String.format("Found target for '%s', but endpoint is invalid. Redundany error? Requested endpoint: %s", hypertyName, targetPaths[0]);
                    LOG.warn(error);
                    return error;
                }
            } else {
                return String.format("Could not find hyperty '%s'", hypertyName);
            }
        }

    }

    private HashMap<String, String> hypertyToInstanceMap = new HashMap<>();
    private HashMap<Client, String> clientToHypertyMap = new HashMap<>();

    private ClientRegistryListener clientRegistryListener = new ClientRegistryListener() {
        @Override
        public void registered(final Client client) {
            LOG.info("checking object links of new client: " + client);
            for (LinkObject link : client.getObjectLinks()) {
                String linkUrl = link.getUrl();
                LOG.debug("checking link: " + link.getUrl());
                if (linkUrl.startsWith("/" + HYPERTY_OBJ_ID + "/"))
                    LOG.info("found matching link: " + linkUrl);

            }

            ReadRequest request = new ReadRequest(HYPERTY_OBJ_ID);
            ValueResponse response = server.send(client, request);
            String sResp = gson.toJson(response);
            LOG.info("requested Hyperty part of new client:\n" + sResp);
            response.getContent().accept(new LwM2mNodeVisitor() {
                @Override
                public void visit(LwM2mObject object) {
                    LOG.info("VISIT1: " + object.getId());

                    LOG.info("VISIT1: " + object);

                    Map<Integer, LwM2mObjectInstance> instances = object.getInstances();
                    int instanceID, resourceID;
                    for (LwM2mObjectInstance instance : instances.values()) {
                        instanceID = instance.getId();
                        LOG.info("checking resources of instance " + instanceID);
                        Map<Integer, LwM2mResource> resources = instance.getResources();
                        for (LwM2mResource resource : resources.values()) {
                            resourceID = resource.getId();
                            LOG.info(String.format("#%d : %s", resourceID, resource.getValue().value));
                            // TODO: get value of correct field ('name' for now)
                            // TODO: mapping: {<value> : /endpoint/1337/<instanceID>}
                            if (resourceID == 1) { // current resource is name field
                                String hypertyName = resource.getValue().value.toString();
                                hypertyToInstanceMap.put(hypertyName, "/" + client.getEndpoint() + "/" + HYPERTY_OBJ_ID + "/" + instanceID);
                                LOG.info("Added to client map -> " + hypertyName + ": " + hypertyToInstanceMap.get(hypertyName));
                                // also map hyperty name to client, for easy removal in case of client disconnect
                                clientToHypertyMap.put(client, hypertyName);
                            }

                        }
                    }
                }

                @Override
                public void visit(LwM2mObjectInstance instance) {
                    LOG.info("VISIT2: " + instance.getId());
                }

                @Override
                public void visit(LwM2mResource resource) {
                    LOG.info("VISIT3: " + resource.getId());
                }
            });
        }

        @Override
        public void updated(Client clientUpdated) {
            // TODO: handle update

        }

        @Override
        public void unregistered(Client client) {
            // TODO: handle unregister
        }
    };


}
