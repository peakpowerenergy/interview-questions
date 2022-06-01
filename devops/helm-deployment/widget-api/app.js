// ENVIRONMENT VARIABLES
const HEALTH_PORT = process.env.HEALTH_PORT || 3000;
const API_PORT = process.env.API_PORT || 3030;

const express = require('express');

// Status stuff on port 3000
const statusApp = express();
statusApp.use("/", require("./lib/healthz"));

statusApp.listen(3000, () => {
  console.log(`Status endpoints are available on port ${HEALTH_PORT}`)
});

// API traffic on port 3030
const api = express();
api.use("/widget", require("./lib/widget"));
api.listen(3030, () => {
  console.log(`API is available on port ${API_PORT}`)
});
