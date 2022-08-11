import fetch from 'node-fetch';
import { xml2json } from 'xml-js';

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

export const getResponseFromURL = async (url, expectedType = 'xml') => {
  if (!['xml', 'json'].includes(expectedType)) {
    throw new Error('Invalid expected type passed');
  }

  const response = await fetch(url, { method: 'GET' });

  if (!response.ok) {
    throw new Error(`Cannot get data from mentioned URL: ${url}`);
  }

  const contentType = response.headers.get('content-type');

  if (!contentType.includes(expectedType)) {
    throw new Error(
      `Expected Content-Type: ${expectedType} instead got ${contentType}`
    );
  }

  let data;

  if (expectedType === 'json') {
    data = await response.json();
  } else if (expectedType === 'xml') {
    data = await response.text();
  }

  if (!data) {
    throw new Error(`No data present for the URL: ${url}`);
  }

  return data;
};

export const convertXMLtoJSON = (
  xml = '',
  { compact, nativeType } = { compact: true, nativeType: true }
) => {
  return JSON.parse(xml2json(xml, { compact, nativeType }));
};
