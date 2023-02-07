import authenticateToken from "../shared/validate-token.js";
import UsersRoutes from "../controllers/users/controller.js";
import express from "express";

const userRoutes = (app) => {
  const router = express.Router();

  router.post("/auth", UsersRoutes.validate);

  router.get("/", authenticateToken, UsersRoutes.getInfo);

  app.use("/v1", router);
};

export default userRoutes;
