#!/usr/bin/env bash

db_name=sauron
collection=results
volume=/data/db
filename=bkp.archive
mongo_docker_instance=sauron_mongodb_1

command="mongodump --db ${db_name} --collection ${collection} --gzip --archive=${volume}/${filename}"

docker exec -it sauron_mongodb_1 ${command}
