import authenticateToken from "../shared/validate-token.js";
import {
  conversion,
  getDollarValue,
  getCurrencies,
} from "../controllers/currency/controller.js";
import router from "express";

const CurrencyRoutes = (app) => {
  const newRoutes = router.Router();

  newRoutes.get("/currencies/conversion", authenticateToken, conversion);

  newRoutes.get("/currencies/comparison", authenticateToken, getDollarValue);

  newRoutes.get("/currencies", authenticateToken, getCurrencies);

  app.use("/v1", newRoutes);
};

export default CurrencyRoutes;
