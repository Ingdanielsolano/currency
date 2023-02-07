import authenticateToken from "../shared/validate-token.js";
import { conversion, getDollarValue } from "../controllers/currency/controller.js";
import router from "express";

const CurrencyRoutes = (app) => {
  const newRoutes = router.Router();

  newRoutes.get("/currency/conversion", authenticateToken, conversion);

  newRoutes.get("/currency/comparison", authenticateToken, getDollarValue);

  app.use("/v1", newRoutes);
};

export default CurrencyRoutes;
