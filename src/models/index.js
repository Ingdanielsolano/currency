import pg from "pg";
import { ENVIRONMENTS } from "../config/envs.js";

const client = () => {
  const client = new pg.Client({
    database: ENVIRONMENTS.DB_NAME,
    host: ENVIRONMENTS.DB_URL,
    port: ENVIRONMENTS.DB_PORT,
    user: ENVIRONMENTS.DB_USER,
    password: ENVIRONMENTS.DB_PASSWORD,
  });

  return client;
};

export default client;
