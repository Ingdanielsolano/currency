const jwt = require("jsonwebtoken");
const { ENVIRONMENTS } = require("../config/envs");
const { UserModel } = require("../models/user.model");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).send({ message: "INVALID_TOKEN" });

  jwt.verify(token, ENVIRONMENTS.TOKEN_SECRET, async (err, user) => {
    if (err) return res.sendStatus(403);

    const foundUser = await UserModel.findByEmail(user.email);
    if (!foundUser) return res.status(401).send({ message: "INVALID_TOKEN" });

    req.user = foundUser;

    next();
  });
}

module.exports = {
  authenticateToken,
};
