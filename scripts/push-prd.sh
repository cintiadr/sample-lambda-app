#!/bin/bash

set -e
set -u
set -x

git checkout production
git reset --hard origin/master
git push
git co -
