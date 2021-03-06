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

package eu.rethink.catalogue.broker.config;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.util.*;

/**
 * Configuration Object for the Catalogue Broker
 */
public class BrokerConfig {
    private static final Logger LOG = LoggerFactory.getLogger(BrokerConfig.class);
    private static final Gson gson = new GsonBuilder().setPrettyPrinting().create();
    private static final String DEFAULT_FILENAME = "brokerconf.json";

    public String
            host = "0.0.0.0",
            coapHost = host,
            keystorePath,
            keystorePassword = "OBF:1vub1vnw1shm1y851vgl1vg91y7t1shw1vn61vuz",
            truststorePath,
            truststorePassword = "OBF:1vub1vnw1shm1y851vgl1vg91y7t1shw1vn61vuz",
            keystoreManagerPassword = "OBF:1vub1vnw1shm1y851vgl1vg91y7t1shw1vn61vuz";

    public int
            httpPort = 8080,
            httpsPort = 8443,
            coapPort = 5683,
            coapsPort = 5684,
            logLevel = 3;

    public Map<String, List<String>> defaultDescriptors = new HashMap<>();

    /**
     * Create a BrokerConfig instance from a file
     *
     * @param file - JSON file, e.g. "brokerconf.json"
     * @return BrokerConfig instance based on the given file, or the default BrokerConfig if  the file does not exist.
     */
    public static BrokerConfig fromFile(String file) {
        File f = new File(file);
        BrokerConfig config = null;

        if (!f.exists()) {
            LOG.info("File '{}' doesn't exist.", file);
        } else if (f.isDirectory()) {
            LOG.warn("File '{}' is a directory!", file);
        } else {
            try {
                config = gson.fromJson(new FileReader(f), BrokerConfig.class);
                if (config == null) {
                    LOG.warn("Unable to create BrokerConfig from '{}': File is empty or malformed.", file);
                }
            } catch (JsonSyntaxException e) {
                LOG.warn("Unable to create BrokerConfig from '" + file + "': File is malformed.", e);
            } catch (FileNotFoundException e) {
                LOG.warn("File exists, but still FileNotFoundException occurred:", e);
                //e.printStackTrace();
            }
        }

        if (config == null) {
            //LOG.info("Loading default Configuration...");
            config = new BrokerConfig();
        }

        return config;
    }

    /**
     * Create a BrokerConfig instance from the default file ("brokerconf.json"), if it exists
     *
     * @return BrokerConfig instance based on the default file ("brokerconf.json"), if it exists,
     * therwise it returns the default BrokerConfig with its default configuration
     */
    public static BrokerConfig fromFile() {
        return fromFile(DEFAULT_FILENAME);
    }

    public void toFile() {
        File f = new File("brokerconf.json");
        try {
            if (!f.exists()) {
                f.createNewFile();
            }
            LOG.info("writing to file: {}", this.toString());
            FileWriter fileWriter = new FileWriter(f);
            fileWriter.write(this.toString());
            fileWriter.flush();
            fileWriter.close();
        } catch (IOException e) {
            LOG.warn("Unable to write config to file: {}", e.getMessage());
            e.printStackTrace();
        }
    }

    /**
     * Parse launch arguments into this configuration
     *
     * @param args - launch arguments (options) the Broker was launched with
     */
    public void parseArgs(String[] args) {
        for (int i = 0; i < args.length; i++) {
            try {
                switch (args[i].toLowerCase()) {
                    case "-host":
                        //broker.setHost(args[i+1]);
                        if (coapHost.equals(host))
                            coapHost = args[i + 1];
                        host = args[i + 1];

                        break;
                    case "-httpport":
                    case "-http":
                    case "-h":
                        httpPort = Integer.parseInt(args[i + 1]);
                        break;
                    case "-httpsport":
                    case "-https":
                    case "-hs":
                    case "-sslport":
                    case "-ssl":
                    case "-s":
                        httpsPort = Integer.parseInt(args[i + 1]);
                        break;
                    case "-coapaddress":
                    case "-coap":
                    case "-c":
                        LOG.warn("-coapaddress is deprecated and will be ignored! Use -coaphost and -coapport instead.");
                        break;
                    case "-coapsaddress":
                    case "-coaps":
                    case "-cs":
                        LOG.warn("-coapsaddress is deprecated and will be ignored! Use -coaphost and -coapsport instead.");
                        break;
                    case "-coaphost":
                    case "-ch":
                        coapHost = args[i + 1];
                        break;
                    case "-coapport":
                    case "-cp":
                        coapPort = Integer.parseInt(args[i + 1]);
                        break;
                    case "-coapshost":
                    case "-csh":
                        LOG.warn("-coapshost is deprecated and will be ignored! Use -coaphost instead.");
                        break;
                    case "-coapsport":
                    case "-csp":
                        coapsPort = Integer.parseInt(args[i + 1]);
                        break;
                    case "-keystorepath":
                    case "-kp":
                        keystorePath = args[i + 1];
                        break;
                    case "-truststorepath":
                    case "-tp":
                        truststorePath = args[i + 1];
                        break;
                    case "-keystorepassword":
                    case "-kpw":
                        keystorePassword = args[i + 1];
                        break;
                    case "-keystoremanagerpassword":
                    case "-keymanagerpassword":
                    case "-kmpw":
                        keystoreManagerPassword = args[i + 1];
                        break;
                    case "-truststorepassword":
                    case "-tpw":
                        truststorePassword = args[i + 1];
                        break;
                    case "-defaultdescriptor":
                    case "-default":
                        String def = args[i + 1];
                        try {
                            String[] defParts = def.split(":|/|=");
                            List<String> existingList = defaultDescriptors.get(defParts[0]);
                            if (existingList == null) {
                                existingList = new LinkedList<>();
                                defaultDescriptors.put(defParts[0], existingList);
                            }
                            existingList.add(defParts[1]);
                        } catch (Exception e) {
                            //e.printStackTrace();
                            LOG.warn("Unable to parse option: -default[descriptor] " + def);
                        }
                        break;
                    case "-sourcepackageurlhost":
                        LOG.warn("sourcePackageURLHost is deprecated and not needed anymore! Host is now extracted from HTTP request");
                        break;
                    case "-v":
                        // increase log level
                        logLevel = 2;
                        break;
                    case "-vv":
                        // increase log level
                        logLevel = 1;
                        break;
                    case "-vvv":
                        // increase log level
                        logLevel = 0;
                        break;
                    case "-loglevel":
                        logLevel = Integer.parseInt(args[i + 1]);
                        break;
                    default:
                        if (args[i].startsWith("-")) { // unknown option -someOption
                            LOG.warn("Unknown option: {}", args[i]);
                        } else {
                            // ignore
                        }
                        break;
                }
            } catch (Exception e) {
                LOG.warn("Unable to parse option " + args[i] + " from " + Arrays.toString(args) + ":", e);
            }
        }
    }

    @Override
    public String toString() {
        return gson.toJson(this);
    }
}
