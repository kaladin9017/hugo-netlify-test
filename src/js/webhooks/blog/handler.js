'use strict';

/**
 *
*/

const contentful = require('contentful');
const cms = contentful.createClient({
  space: process.env.CONTENTFUL_WEB_SPACE_ID,
  accessToken: process.env.CONTENTFUL_WEB_ACCESS_TOKEN,
});

const Promise = require('bluebird');

module.exports.handleEvent = (event, context, callback) => {
  console.log('event received:', JSON.stringify(event));

  if (! event || ! event.body || ! event.body.sys || ! event.body.fields) {
      return cb(null, {message: 'Unknown event data'});
    }

  const contentType = event.body.sys.contentType.sys.id;
  let content = event.body.fields;
  content.id = event.body.sys.id;

  return callback(null, {
    message: `Uploading ${contentType} id: ${event.body.sys.id}`,
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
  };
