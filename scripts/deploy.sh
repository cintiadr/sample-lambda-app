#!/bin/bash

set -e
set -u
set -x

ENVIRONMENT="${1:-dev}"

serverless deploy -v --stage $ENVIRONMENT
