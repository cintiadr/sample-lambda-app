# Hello world - Serverless edition

[![Build Status](https://travis-ci.org/cintiadr/sample-lambda-app.svg?branch=master)](https://travis-ci.org/cintiadr/sample-lambda-app)

This repository contains an AWS lambda + API gateway hello world application.

It's using awesome [Serverless framework](https://serverless.com/) to deploy (almost) all infrastructure needed.

That's probably the most scalable hello world I've ever created.

![You cannot have outages if you don't have servers](https://memegenerator.net/img/instances/500x/80611404/you-cannot-have-outages-if-you-dont-have-servers.jpg)
_Memetic Poetic Licence_

#### Development environment
  - <https://dev.cintia.me>: hello world endpoint
  - <https://dev.cintia.me/healthcheck>: health check (!)
  - <https://dev.cintia.me/metadata>: Basic application information, like git commit and version (imported from _package.json_)

#### Production environment
  - <https://prod.cintia.me>
  - <https://prod.cintia.me/healthcheck>
  - <https://prod.cintia.me/metadata>

### Requirements

AWS requirements:
  - ACM Certificate
  - Route53 zone

Local requirements:
  - AWS cli and credentials to deploy
  - Node 6

### Deploying changes
```
# Deploying to dev
$ ./scripts/deploy.sh

# Deploying to prod
$ ./scripts/deploy.sh prod
```

### Considerations
  - Lambda is running outside VPC
  - There's no monitoring nor alarms for failures
  - There's no de-duplication mechanism for lambda
  - Logs and basic metrics are automatically deployed to cloudwatch.
