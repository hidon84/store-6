#!/bin/bash
REPOSITORY=/home/ubuntu/store-6/server
cd $REPOSITORY

rm -rf .env.dev
pm2 delete all