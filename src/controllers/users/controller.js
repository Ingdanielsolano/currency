const { generateAccessToken } = require("../../shared/generate-token");
const { decode } = require("jsonwebtoken");
const { UserModel } = require("../../models/user.model");

exports.validate = async (req, res) => {
  const { email } = req.body;

  const foundUser = await UserModel.findByEmail(email);

  if (!foundUser) return res.status(401).send({ error: "INVALID_EMAIL" });

  const newToken = generateAccessToken(foundUser);
  res.send({ accessToken: newToken });
};

exports.getInfo = (req, res) => {
  res.send({ user: req.user });
};
