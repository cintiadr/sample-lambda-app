#!/bin/bash

# Deploys lambda and infrastructure to any environment
# and runs smoke tests after

set -e
set -u
set -x

export ENVIRONMENT="${1:-dev}"

npm run deploy
npm run smoke-tests
