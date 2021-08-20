#!/bin/bash
REPOSITORY=/home/ubuntu/store-6/server
cd $REPOSITORY

cp ~/store-6-deploys-files/.env ./.env
pm2 reload store-6
