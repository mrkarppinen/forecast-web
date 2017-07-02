#!/bin/bash

npm run-script build
docker build -t jussi/forecast-app .