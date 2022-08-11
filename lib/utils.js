import fetch from 'node-fetch';
import { xml2json, json2xml } from 'xml-js';

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

export const getResponseFromURL = async (
  url,
  expectedContentType = 'application/xml'
) => {
  const response = await fetch(url, { method: 'GET' });

  if (!response.ok) {
    throw new Error(`Cannot get data from mentioned URL: ${url}`);
  }

  const contentType = response.headers.get('content-type');

  if (!contentType.includes(expectedContentType)) {
    throw new Error(
      `Expected Content-Type: ${expectedContentType} instead got ${contentType}`
    );
  }

  let data;

  if (expectedContentType === 'application/json') {
    data = await response.json();
  } else if (expectedContentType === 'application/xml') {
    data = await response.text();
  }

  if (!data) {
    throw new Error(`No data present for the URL: ${url}`);
  }

  return data;
};

export const convertXMLtoJSON = (xml = '', { compact } = { compact: true }) => {
  return xml2json(xml, { compact });
};

export const convertJSONtoXML = (
  json = {},
  { compact } = { compact: true }
) => {
  const jsonData = JSON.stringify(json);
  return json2xml(jsonData, { compact });
};
