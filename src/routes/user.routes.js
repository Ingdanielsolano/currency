const { authenticateToken } = require("../shared/validate-token");

module.exports = (app) => {
  const users = require("../controllers/users/controller");

  const router = require("express").Router();

  router.post("/auth", users.validate);

  router.get("/", authenticateToken, users.getInfo);

  app.use("/v1", router);
};
