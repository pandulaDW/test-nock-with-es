const express = require("express");
const { Client } = require("@elastic/elasticsearch");
const { default: axios } = require("axios");
const nock = require("nock");

const app = express();
const client = new Client({ node: "http://localhost:9200" });

const port = 3000;

app.get("/", async (req, res) => {
  const response = await axios.get("http://api.icndb.com/jokes/random");

  await client.index({
    index: "jokes",
    type: "chuck-norris",
    body: { joke: response.data.value.joke },
  });

  res.json(response.data);
});

app.listen(port);

module.exports = app;
