'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'The actual hello world, as expected.',
  };

  console.log(event);
  callback(null, response);
};

module.exports.healthcheck = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'Super healthy Kale!',
  };
  console.log(event);
  callback(null, response);
};

module.exports.metadata = (event, context, callback) => {
  var pjson = require('./package.json');

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      [pjson.name]: {
        version: pjson.version,
        description: pjson.description,
        lastcommitsha:  process.env.GIT_ENV,
        nodeversion: process.version,
      },
    }),
  };
  console.log(event);
  callback(null, response);
};
