#!/bin/bash

set -e
set -u
set -x

export ENVIRONMENT="${1:-dev}"
npm test
