import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import UserRoutes from "./src/routes/user.routes.js";
import CurrencyRoutes from "./src/routes/currency.routes.js";

const initApp = () => {
  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  UserRoutes(app);

  CurrencyRoutes(app);

  // set port, listen for requests
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
};

setTimeout(() => {
  initApp();
}, 500);
