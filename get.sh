#!/bin/bash

GET_URL="http://xkcd.com/${1}/info.0.json"
OUT_FILE="info.0.json"

curl ${GET_URL} > ${OUT_FILE}
