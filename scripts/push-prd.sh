#!/bin/bash

set -e
set -u
set -x

# Push origin/master to production branch, to trigger a production deployment via CI
# Intended to be run locally

git fetch
git checkout production
git reset --hard origin/master
git push
git co -
