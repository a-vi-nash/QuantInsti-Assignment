'use strict';
const os = require("os");

const buildConnectionString = () => {
  return `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}`;
};



module.exports = {
  environmentName: process.env.NODE_ENV,
  cors: {
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: false
  },
  appPort: 8088,
  protocol: "http://",
  subDomain: "",
  domain: "localhost",
  mongo: {
    uri: buildConnectionString()
  },
  logs: {
    logFolder: `/logs/${os.hostname()}`
  },
  Promise: require("bluebird")
};
