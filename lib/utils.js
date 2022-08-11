export const generateResponse = ({
  body = {},
  statusCode = 200,
  contentType = 'application/json',
}) => {
  const headers = {
		'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
  };

  return {
    statusCode,
    headers,
    body: JSON.stringify(body),
  };
};

export const isValidHttpUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  } catch {
    return false;
  }

  return ['http:', 'https:'].includes(url.protocol);
};
