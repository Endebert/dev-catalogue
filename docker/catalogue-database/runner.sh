#!/bin/sh -x

# Attn.: all paths as they are found on the docker image !!!
MODELS_FOLDER="/opt/reTHINK/catalogue/model"
export MODELS_FOLDER

java -jar /opt/reTHINK/catalogue/catalogue_database/target/rethink-catalogue-database-0.1-jar-with-dependencies.jar $*


