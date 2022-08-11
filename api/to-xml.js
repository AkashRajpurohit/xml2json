import {
  generateResponse,
  getResponseFromURL,
  isValidHttpUrl,
  convertJSONtoXML,
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
    const jsonData = await getResponseFromURL(url, 'json');
    const xml = convertJSONtoXML(jsonData);

    return generateResponse({
      body: xml,
      contentType: 'text/xml',
    });
  } catch (error) {
    return generateResponse({
      body: { error: error.message },
      statusCode: 400,
    });
  }
};

exports.handler = handler;
