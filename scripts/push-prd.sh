#!/bin/bash

set -e
set -u
set -x

git fetch
git checkout production
git reset --hard origin/master
git push
git co -
