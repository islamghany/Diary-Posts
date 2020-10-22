#!/usr/bin/env bash
#run app at localhost:3001
docker run -it --rm \
-v ${PWD}:/app \
-v /app/node_modules \
-p 3001:3000 \
-e CHOKIDAR_USEPOLLING=true \
s403o/dairy-posts:dev
