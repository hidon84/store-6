#!/bin/bash
REPOSITORY=/home/ubuntu/store-6/server
cd $REPOSITORY

cp ~/.env ./.env
pm2 reload store-6