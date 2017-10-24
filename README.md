# Hello world - Serverless edition

[![Build Status](https://travis-ci.org/cintiadr/sample-lambda-app.svg?branch=master)](https://travis-ci.org/cintiadr/sample-lambda-app)

This repository contains an AWS lambda + API gateway hello world application.

It's using awesome [Serverless framework](https://serverless.com/) to deploy (almost) all infrastructure needed.

That's the most scalable hello world I've ever created.

![You cannot have outages if you don't have servers](https://memegenerator.net/img/instances/500x/80611404/you-cannot-have-outages-if-you-dont-have-servers.jpg)

_Memetic Poetic Licence_

#### Development environment
  - <https://dev.cintia.me>: hello world endpoint
  - <https://dev.cintia.me/healthcheck>: health check (!)
  - <https://dev.cintia.me/metadata>: Basic application information, like git commit and version (imported from _package.json_)

#### Production environment
  - <https://prd.cintia.me>
  - <https://prd.cintia.me/healthcheck>
  - <https://prd.cintia.me/metadata>

### Requirements

AWS requirements:
  - ACM Certificate
  - Route53 DNS zone

Local requirements:
  - AWS cli and credentials to deploy
  - Node 6 (can be via nvm)
  - `./scripts/install.sh` to install all dependencies

### Deploying changes
```
# Build cloudformation for dev
$ ENVIRONMENT=dev npm run package

# Deploying to dev
$ ENVIRONMENT=dev npm run deploy

# Running smoke tests against dev
$ ENVIRONMENT=dev npm run smoke-tests
```

Travis is configured to deploy branch `production` to the production environment.
This branch should be pushed locally.

(Yes, technically this breaks the whole concept of a proper pipeline,
but that's the way travis works.)
```
$ ./scripts/push-prd.sh
```

### Considerations
  - Lambda is running outside VPC; security considerations apply if your lambda
  handles sensitive data.
  - Memory size and timeout are not being configured
  - Environment variables are not encrypted
  - There's no dashboards nor alarms for failures. Also, no dead letter queue
  configured for failures, nor AWS Xray.
  - There's no de-duplication mechanism for lambda because they don't change state;
  check [this blogpost](https://blog.sungardas.com/CTOLabs/2017/06/run-lambda-run/)
  for details.
  - Logs and basic metrics are automatically deployed to cloudwatch
  - There are no unit nor integration tests, but you should check [Serverless Testing guide](https://serverless.com/framework/docs/providers/aws/guide/testing/).
  if your lambda has actual functionalities.
  Serverless offers a lot of help for local tests and debug.
  - Smoke tests are done using Jasmine framework
  - This code is in node due to the better integration with serverless framework,
  but I'm not a node expert. Take my code with a pinch of salt.
