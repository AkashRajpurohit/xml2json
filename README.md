# xml2json

🔀 Proxy server to convert XML API responses to JSON response

# How to use it?

## Converting XML to JSON

- **Endpoint:** [https://xml2json.netlify.app/to-json](https://xml2json.netlify.app/to-json)
- **Expected query parameter:** `url` (URL which returns XML response)
- **Sample:** [https://xml2json.netlify.app/to-json?url=https://akashrajpurohit.com/rss.xml](https://xml2json.netlify.app/to-json?url=https://akashrajpurohit.com/rss.xml)

# FAQs

<details>
  <summary>What is the structure of the API response?</summary>
  <p>When converting from XML to JSON, in a success scenario the response would have a <kbd>json</kbd> key with the value as whatever the JSON response is generated when converting the XML response from the specified URL.

    Example:

```json
{
  "json": {
    "hello": "world"
  }
}
```

</p>
</details>

<details>
  <summary>What conversion library is used?</summary>
  <p>The project is currently using <a href="https://www.npmjs.com/package/xml-js" target="_blank" rel="noopener noreferrer">xml-js</a> package.</p>
</details>

<details>
  <summary>When to use it?</summary>
  <p>Whenever you encounter any third-party API (which you don't have control over) that returns an XML response, you can use this to convert it to a JSON response.</p>
</details>

<details>
  <summary>The service is down, what should I do?</summary>
  <p>It is currently hosted on my personal Netlify account under the free plan along with my other stuff, there can be a case when this can go down. The simplest solution is that you can fork this repo and host an instance of your own on whichever infrastructure you prefer to use.</p>
</details>

# Bugs or Feature requests

If you encounter any problems feel free to open an issue. If you feel the project is missing a feature, please raise a ticket on GitHub and I'll look into it. Pull requests are also welcome.

# Where to find me?

- [Website](https://akashrajpurohit.com/)
- [Linkedin](https://www.linkedin.com/in/AkashRajpurohit)
- [Instagram](https://www.instagram.com/akashwho.codes)
- [Twitter](https://www.twitter.com/AkashWhoCodes)
