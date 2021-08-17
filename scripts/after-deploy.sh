#!/bin/bash
REPOSITORY=/home/ubuntu/store-6/server
cd $REPOSITORY

pm2 start npm --name store-6 -- run dev --watch
pm2 save