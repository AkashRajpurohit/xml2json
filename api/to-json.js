import { generateResponse } from 'lib/utils';

const handler = async (event) => {
  if (event.httpMethod.toLowerCase() !== 'get') {
    return generateResponse({
      body: { error: `Invalid method: ${event.httpMethod}` },
      statusCode: 400,
    });
  }

  const { url } = event.queryStringParameters;

  if (!isValidHttpUrl(url)) {
    return generateResponse({
      body: { error: `Invalid URL: ${url}` },
      statusCode: 400,
    });
  }

  return generateResponse({ hello: 'world' });
};

exports.handler = handler;
