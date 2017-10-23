'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'The actual hello world, as expected.',
  };

  callback(null, response);
};

module.exports.healthcheck = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      my-sample-application: {
        something:  process.env.GIT_ENV,
      },
    }),
  };

  callback(null, response);
};
