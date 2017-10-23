## Hello world - Serverless edition

[![Build Status](https://travis-ci.org/cintiadr/sample-lambda-app.svg?branch=master)](https://travis-ci.org/cintiadr/sample-lambda-app)

This repository contains an AWS lambda + API gateway hello world application.

It's using awesome [Serverless framework](https://serverless.com/) to deploy (almost) all infrastructure needed.


### Requirements

AWS requirements:
  - Certificate
  - Route53 zone

Local requirements:
  - AWS cli and credentials to deploy
  - Node 6

### Deploying changes
```
$ ./scripts/deploy.sh
```
