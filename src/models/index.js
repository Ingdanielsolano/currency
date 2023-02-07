const { Client } = require("pg");
const { ENVIRONMENTS } = require("../config/envs");

  exports.client = () => {
  const client = new Client({
    database:  ENVIRONMENTS.DB_NAME,
    host: ENVIRONMENTS.DB_URL,
    port: ENVIRONMENTS.DB_PORT,
    user: ENVIRONMENTS.DB_USER,
    password: ENVIRONMENTS.DB_PASSWORD,
  });

  return client;
};
