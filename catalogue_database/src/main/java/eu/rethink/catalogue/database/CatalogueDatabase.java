/**
 * Copyright [2015-2017] Fraunhofer Gesellschaft e.V., Institute for
 * Open Communication Systems (FOKUS)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

package eu.rethink.catalogue.database;

import com.google.gson.*;
import eu.rethink.catalogue.database.exception.CatalogueObjectParsingException;
import org.eclipse.leshan.LwM2mId;
import org.eclipse.leshan.client.californium.LeshanClient;
import org.eclipse.leshan.client.californium.LeshanClientBuilder;
import org.eclipse.leshan.client.object.Server;
import org.eclipse.leshan.client.resource.BaseInstanceEnabler;
import org.eclipse.leshan.client.resource.LwM2mObjectEnabler;
import org.eclipse.leshan.client.resource.ObjectsInitializer;
import org.eclipse.leshan.core.model.LwM2mModel;
import org.eclipse.leshan.core.model.ObjectLoader;
import org.eclipse.leshan.core.model.ObjectModel;
import org.eclipse.leshan.core.model.ResourceModel;
import org.eclipse.leshan.core.node.LwM2mResource;
import org.eclipse.leshan.core.request.BindingMode;
import org.eclipse.leshan.core.response.ExecuteResponse;
import org.eclipse.leshan.core.response.ReadResponse;
import org.eclipse.leshan.core.response.WriteResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.bridge.SLF4JBridgeHandler;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.*;

import static org.eclipse.leshan.client.object.Security.noSec;

/**
 * A reference implementation for a reTHINK Catalogue Database
 */
public class CatalogueDatabase {
    private static final Logger LOG = LoggerFactory.getLogger(CatalogueDatabase.class);

    // directory filter used in CatalogueObjectInstance class
    private static final FileFilter dirFilter = new FileFilter() {
        @Override
        public boolean accept(File file) {
            return file.isDirectory();
        }
    };

    // model IDs that define the custom models inside model.json
    private static final int HYPERTY_MODEL_ID = 1337;
    private static final int PROTOSTUB_MODEL_ID = 1338;
    private static final int RUNTIME_MODEL_ID = 1339;
    private static final int SCHEMA_MODEL_ID = 1340;
    private static final int IDPPROXY_MODEL_ID = 1341;

    private static final int SOURCEPACKAGE_MODEL_ID = 1350;

    // list of supported models
    private static final Set<Integer> MODEL_IDS = new HashSet<>(Arrays.asList(HYPERTY_MODEL_ID, PROTOSTUB_MODEL_ID, RUNTIME_MODEL_ID, SCHEMA_MODEL_ID, IDPPROXY_MODEL_ID, SOURCEPACKAGE_MODEL_ID));

    // path names for the models
    private static final String HYPERTY_TYPE_NAME = "hyperty";
    private static final String PROTOSTUB_TYPE_NAME = "protocolstub";
    private static final String RUNTIME_TYPE_NAME = "runtime";
    private static final String SCHEMA_TYPE_NAME = "dataschema";
    private static final String IDPPROXY_TYPE_NAME = "idp-proxy";

    private static final String SOURCEPACKAGE_TYPE_NAME = "sourcepackage";

    // mapping of model IDs to their path names
    private static Map<String, Integer> MODEL_NAME_TO_ID_MAP = new LinkedHashMap<>();
    private Map<Integer, Map<Integer, ResourceModel>> MODEL_ID_TO_RESOURCES_MAP_MAP = new LinkedHashMap<>();

    static {
        MODEL_NAME_TO_ID_MAP.put(HYPERTY_TYPE_NAME, HYPERTY_MODEL_ID);
        MODEL_NAME_TO_ID_MAP.put(PROTOSTUB_TYPE_NAME, PROTOSTUB_MODEL_ID);
        MODEL_NAME_TO_ID_MAP.put(RUNTIME_TYPE_NAME, RUNTIME_MODEL_ID);
        MODEL_NAME_TO_ID_MAP.put(SCHEMA_TYPE_NAME, SCHEMA_MODEL_ID);
        MODEL_NAME_TO_ID_MAP.put(IDPPROXY_TYPE_NAME, IDPPROXY_MODEL_ID);
        MODEL_NAME_TO_ID_MAP.put(SOURCEPACKAGE_TYPE_NAME, SOURCEPACKAGE_MODEL_ID);
    }

    private static Gson gson = new GsonBuilder().setPrettyPrinting().create();
    private JsonParser parser = new JsonParser();

    private static final String NAME_FIELD_NAME = "objectName";
    private static final String CGUID_FIELD_NAME = "cguid";


    private final String DEFAULT_SERVER_HOSTNAME = "localhost";
    private final int DEFAULT_SERVER_COAP_PORT = 5683;
    private LeshanClient client;

    private String serverHostName = DEFAULT_SERVER_HOSTNAME;
    private String serverDomain = null;
    private String accessURL = null;
    private String catObjsPath = "./catalogue_objects";
    private int serverPort = DEFAULT_SERVER_COAP_PORT;
    private boolean useHttp = false;
    private int lifetime = 60;

    private String endpoint = "DB_" + new Random().nextInt(Integer.MAX_VALUE);

    private Thread hook = null;

    private Map<Integer, ObjectModel> objectModelMap = new HashMap<>(MODEL_IDS.size());

    public void setUseHttp(boolean useHttp) {
        this.useHttp = useHttp;
    }

    public void setServerHostName(String serverHostName) {
        this.serverHostName = serverHostName;
    }

    public void setServerDomain(String serverDomain) {
        this.serverDomain = serverDomain;
    }

    public void setCatObjsPath(String catObjsPath) {
        this.catObjsPath = catObjsPath;
    }

    public void setServerPort(int serverPort) {
        this.serverPort = serverPort;
    }

    public void setLifetime(int lifetime) {
        this.lifetime = lifetime;
    }

    public static void main(final String[] args) {
        SLF4JBridgeHandler.removeHandlersForRootLogger();
        SLF4JBridgeHandler.install();

        CatalogueDatabase d = new CatalogueDatabase();

        for (int i = 0; i < args.length; i++) {
            String arg = args[i];
            switch (arg) {
                case "-h":
                case "-host":
                    d.setServerHostName(args[++i]);
                    break;
                case "-usehttp":
                    if (args.length <= i + 1 || args[i + 1].startsWith("-")) { // check if boolean value is not given, assume true
                        d.setUseHttp(true);
                    } else {
                        d.setUseHttp(Boolean.parseBoolean(args[++i]));
                    }
                    break;
                case "-p":
                case "-port":
                    d.setServerPort(Integer.parseInt(args[++i]));
                    break;
                case "-o":
                case "-op":
                case "-objPath":
                case "-objpath":
                    d.setCatObjsPath(args[++i]);
                    break;
                case "-d":
                case "-domain":
                    d.setServerDomain(args[++i]);
                    break;
                case "-lifetime":
                case "-t":
                    d.setLifetime(Integer.parseInt(args[++i]));
                    break;
            }
        }

        try {
            d.start();
        } catch (Exception e) {
            LOG.error("Unable to start Catalogue Database", e);
        }
    }

    /**
     * Start the Catalogue Database.
     */
    public void start() throws CatalogueObjectParsingException {
        LOG.info("Starting Catalogue Database...");

        if (serverDomain == null) {
            serverDomain = serverHostName;
        }

        if (useHttp) {
            accessURL = "http://" + serverDomain + "/.well-known/";
        } else {
            accessURL = "https://" + serverDomain + "/.well-known/";
        }

        LOG.info("Catalogue Broker host name: " + serverHostName);
        LOG.info("Catalogue Broker CoAP port: " + serverPort);
        LOG.info("Catalogue Objects location: " + catObjsPath);

        // parse all catalogue objects
        File catObjs = new File(catObjsPath);
        if (!catObjs.exists() || !catObjs.isDirectory()) {
            LOG.error("No Catalogue Objects folder at " + catObjsPath);
            return;
        }

        // get default models
        List<ObjectModel> objectModels = ObjectLoader.loadDefault();

        // add custom models from model.json
        List<ObjectModel> customObjectModels = getCustomObjectModels();
        objectModels.addAll(customObjectModels);

        // setup objectModelMap
        for (ObjectModel objectModel : customObjectModels) {
            objectModelMap.put(objectModel.id, objectModel);
        }

        // setup MODEL_ID_TO_RESOURCES_MAP
        for (ObjectModel customObjectModel : customObjectModels) {
            MODEL_ID_TO_RESOURCES_MAP_MAP.put(customObjectModel.id, customObjectModel.resources);
        }

        // parse catalogue objects
        Map<Integer, Set<CatalogueObjectInstance>> parsedObjects = parseObjects(catObjs);

        // Initialize object list
        ObjectsInitializer initializer = new ObjectsInitializer(new LwM2mModel(objectModels));

        // add broker address to intializer
        String serverURI = String.format("coap://%s:%s", serverHostName, serverPort);

        initializer.setInstancesForObject(LwM2mId.SECURITY, noSec(serverURI, 123));
        initializer.setInstancesForObject(LwM2mId.SERVER, new Server(123, lifetime, BindingMode.U, false));

        // set dummy Device
        Device device = new Device();
        device.setDatabase(this);
        initializer.setInstancesForObject(LwM2mId.DEVICE, device);

        List<LwM2mObjectEnabler> enablers = initializer.create(LwM2mId.SECURITY, LwM2mId.SERVER, LwM2mId.DEVICE);

        for (Map.Entry<Integer, Set<CatalogueObjectInstance>> entry : parsedObjects.entrySet()) {
            //LOG.debug("setting instances: {}", gson.toJson(entry.getValue()));
            initializer.setInstancesForObject(entry.getKey(), entry.getValue().toArray(new CatalogueObjectInstance[entry.getValue().size()]));
            enablers.add(initializer.create(entry.getKey()));
        }

        LOG.info("I am '{}'", endpoint);

        LeshanClientBuilder builder = new LeshanClientBuilder(endpoint);
        builder.setObjects(enablers);

        client = builder.build();

        // Start the client
        client.start();

        final CatalogueDatabase ref = this;

        // Deregister on shutdown and stop client.
        // add hook only if not set already (important if database was restarted using execute command)
        if (hook == null) {
            hook = new Thread() {
                @Override
                public void run() {
                    ref.stop();
                }
            };
            Runtime.getRuntime().addShutdownHook(hook);
        }
    }

    public void stop() {
        LOG.info("Device: Deregistering Client");
        if (client != null)
            client.destroy(true);
    }

    private List<ObjectModel> getCustomObjectModels() {
        InputStream modelStream = getClass().getResourceAsStream("/model.json");
        return ObjectLoader.loadJsonStream(modelStream);
    }

    private JsonObject parseJson(File f) throws FileNotFoundException, JsonParseException {
        return parser.parse(new FileReader(f)).getAsJsonObject();
    }

    private Map<Integer, Set<CatalogueObjectInstance>> parseObjects(File dir) throws CatalogueObjectParsingException {
        if (!dir.exists() || !dir.isDirectory())
            throw new CatalogueObjectParsingException("catalogue objects folder '" + dir + "' does not exist or is not a directory");

        File[] typeFolders = dir.listFiles(dirFilter);
        Map<Integer, Set<CatalogueObjectInstance>> modelObjectsMap = new LinkedHashMap<>(MODEL_IDS.size());

        // setup modelObjectsMap
        for (Integer modelId : MODEL_IDS) {
            modelObjectsMap.put(modelId, new LinkedHashSet<CatalogueObjectInstance>());
        }

        for (File typeFolder : typeFolders) {
            Integer modelId = MODEL_NAME_TO_ID_MAP.get(typeFolder.getName());

            if (modelId == null) {
                throw new CatalogueObjectParsingException("No model ID found for folder '" + typeFolder + "'");
            }

            File[] instanceFolders = typeFolder.listFiles(dirFilter);

            for (File instanceFolder : instanceFolders) {
                try {
                    File desc = new File(instanceFolder, "description.json");
                    if (!desc.exists()) {
                        throw new CatalogueObjectParsingException("description.json not found in " + typeFolder);
                    }

                    JsonObject jDesc = parseJson(desc);

                    File pkg = new File(instanceFolder, "sourcePackage.json");
                    if (pkg.exists()) {
                        JsonObject jPkg = parseJson(pkg);

                        // put cguid from descriptor into sourcePackage
                        String cguid = jDesc.get("cguid").getAsString();
                        jPkg.addProperty("cguid", cguid);

                        // put sourcePackageURL that references this sourcePackage into descriptor
                        jDesc.addProperty("sourcePackageURL", accessURL + "sourcepackage/" + cguid);

                        // check if there is a sourceCode file
                        File code = null;
                        for (File file : instanceFolder.listFiles()) {
                            if (file.getName().startsWith("sourceCode")) {
                                code = file;
                                break;
                            }
                        }

                        CatalogueObjectInstance sourcePackage = new CatalogueObjectInstance(SOURCEPACKAGE_MODEL_ID, jPkg, code);

                        if (sourcePackage.isValid()) {
                            modelObjectsMap.get(SOURCEPACKAGE_MODEL_ID).add(sourcePackage);
                        } else {
                            LOG.warn("Validation failed for sourcePackage " + jPkg.toString() + " and will be ignored");
                        }
                    }

                    CatalogueObjectInstance descriptor = null;
                    descriptor = new CatalogueObjectInstance(modelId, jDesc);

                    if (descriptor.isValid) {
                        modelObjectsMap.get(modelId).add(descriptor);
                    } else {
                        LOG.warn("Validation failed for descriptor " + jDesc.toString() + " and will be ignored");
                    }

                } catch (FileNotFoundException e) {
                    // should never occur
                    e.printStackTrace();
                }
            }
        }
        return modelObjectsMap;
    }

    /**
     * InstanceEnabler for reTHINK Catalogue Object instances.
     */
    public class CatalogueObjectInstance extends BaseInstanceEnabler {
        private Logger LOG;
        private JsonObject descriptor = null;
        private File sourceCode = null;
        private int model;
        private boolean isValid = true;
        private String name = "unknown";

        public JsonObject getDescriptor() {
            return descriptor;
        }

        public File getSourceCode() {
            return sourceCode;
        }

        public int getModel() {
            return model;
        }

        public boolean isValid() {
            return isValid;
        }

        public CatalogueObjectInstance(int model, JsonObject descriptor, File sourceCode) {
            this.model = model;
            this.descriptor = descriptor;
            this.sourceCode = sourceCode;

            setup();
        }

        public CatalogueObjectInstance(int model, JsonObject descriptor) {
            this.model = model;
            this.descriptor = descriptor;

            setup();
        }

        public CatalogueObjectInstance() {
            setup();
        }

        private String findName() {
            JsonElement name = descriptor.get("objectName");
            if (name == null)
                name = descriptor.get("cguid");

            if (name != null)
                this.name = name.getAsString();

            return this.name;
        }

        private void setup() {
            findName();
            LOG = LoggerFactory.getLogger(this.getClass().getPackage().getName() + "." + this.name);
            isValid = validate();

        }

        private boolean validate() {
            //LOG.debug("validating {} against model {}", gson.toJson(json), modelId);

            if (model == 0) {
                LOG.warn("Unable to validate instance: modelId not set!");
                return false;
            }

            if (descriptor == null) {
                LOG.debug("Unable to validate instance: descriptor json not set!");
                return false;
            }

            for (Map.Entry<Integer, ResourceModel> entry : objectModelMap.get(model).resources.entrySet()) {
                String name = entry.getValue().name;
                if (entry.getValue().mandatory && (!descriptor.has(name) && (name.equals("sourceCode") && sourceCode == null))) {
                    LOG.warn("Validation of {} (has sourceCode file: {}) against model {} failed. '{}' is mandatory, but not included", descriptor, sourceCode != null, model);
                    return false;
                }
            }
            return true;
        }

        @Override
        public ReadResponse read(int resourceid) {
            String resourceName = MODEL_ID_TO_RESOURCES_MAP_MAP.get(model).get(resourceid).name;
            ReadResponse response;
            if (descriptor.has(resourceName)) {
                JsonElement element = descriptor.get(resourceName);
                response = ReadResponse.success(resourceid, element.isJsonPrimitive() ? element.getAsString() : element.toString());
            } else if (resourceName.equals("sourceCode")) {
                try {
                    response = ReadResponse.success(resourceid, new String(Files.readAllBytes(Paths.get(sourceCode.toURI())), "UTF-8"));
                } catch (IOException e) {
                    LOG.error("Unable to read sourceCode file of " + descriptor.toString(), e);
                    response = ReadResponse.internalServerError("Unable to read sourceCode file: " + e.getMessage());
                }
            } else {
                response = ReadResponse.notFound();
            }
            LOG.debug("Read on {} ({})", resourceid, resourceName);
            return response;
        }
    }


    /**
     * Provides the default device description of a Database instance.
     */
    public static class Device extends BaseInstanceEnabler {

        public Device() {

        }

        private CatalogueDatabase database = null;

        public void setDatabase(CatalogueDatabase database) {
            this.database = database;
        }

        @Override
        public ReadResponse read(int resourceid) {
            LOG.debug("Read on Device Resource " + resourceid);
            switch (resourceid) {
                case 0:
                    return ReadResponse.success(resourceid, getManufacturer());
                case 1:
                    return ReadResponse.success(resourceid, getModelNumber());
                case 2:
                    return ReadResponse.success(resourceid, getSerialNumber());
                case 3:
                    return ReadResponse.success(resourceid, getFirmwareVersion());
                case 9:
                    return ReadResponse.success(resourceid, getBatteryLevel());
                case 10:
                    return ReadResponse.success(resourceid, getMemoryFree());
                case 11:
                    return ReadResponse.success(resourceid, getErrorCode());
                case 13:
                    return ReadResponse.success(resourceid, getCurrentTime());
                case 14:
                    return ReadResponse.success(resourceid, getUtcOffset());
                case 15:
                    return ReadResponse.success(resourceid, getTimezone());
                case 16:
                    return ReadResponse.success(resourceid, getSupportedBinding());
                default:

                    return super.read(resourceid);
            }
        }

        @Override
        public ExecuteResponse execute(int resourceid, String params) {
            LOG.debug("Execute on Device resource ({}, {})", resourceid, params);
            new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    if (database != null) {
                        database.stop();
                        try {
                            Thread.sleep(1000);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                        try {
                            database.start();
                        } catch (CatalogueObjectParsingException e) {
                            LOG.error("Unable to restart database", e);
                        }
                    } else {
                        LOG.warn("database reference not set!");
                    }
                }
            }).start();
            if (database != null) {
                return ExecuteResponse.success();
            } else {
                return ExecuteResponse.internalServerError("Missing Database reference. Please set via setDatabase()");
            }
        }

        @Override
        public WriteResponse write(int resourceid, LwM2mResource value) {
            LOG.debug("Write on Device resource ({}, {})", resourceid, value);
            return super.write(resourceid, value);
        }

        private static String getManufacturer() {
            return "Rethink Example Catalogue";
        }

        private static String getModelNumber() {
            return "Model 1337";
        }

        private static String getSerialNumber() {
            return "RT-500-000-0001";
        }

        private static String getFirmwareVersion() {
            return "0.1.0";
        }

        private static int getErrorCode() {
            return 0;
        }

        private static int getBatteryLevel() {
            final Random rand = new Random();
            return rand.nextInt(100);
        }

        private static int getMemoryFree() {
            final Random rand = new Random();
            return rand.nextInt(50) + 114;
        }

        private static Date getCurrentTime() {
            return new Date();
        }

        private static String utcOffset = new SimpleDateFormat("X").format(Calendar.getInstance().getTime());

        private static String getUtcOffset() {
            return utcOffset;
        }

        private static void setUtcOffset(String t) {
            utcOffset = t;
        }

        private static String timeZone = TimeZone.getDefault().getID();

        private static String getTimezone() {
            return timeZone;
        }

        private void setTimezone(String t) {
            timeZone = t;
        }

        private static String getSupportedBinding() {
            return "U";
        }

    }
}