import {
  generateResponse,
  getResponseFromURL,
  convertXMLtoJSON,
  isValidHttpUrl,
} from '../lib/utils';

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

  try {
    const xmlData = await getResponseFromURL(url, 'xml');
    const json = convertXMLtoJSON(xmlData);

    return generateResponse({
      body: { json },
      contentType: 'application/json',
    });
  } catch (error) {
    return generateResponse({
      body: { error: error.message },
      statusCode: 400,
    });
  }
};

exports.handler = handler;
