import { generateAccessToken } from "../../shared/generate-token.js";
import { UserModel } from "../../models/user.model.js";

const User = {
  validate: async (req, res) => {
    const { email } = req.body;

    const foundUser = await UserModel.findByEmail(email);

    if (!foundUser) return res.status(401).send({ error: "INVALID_EMAIL" });

    const newToken = generateAccessToken(foundUser);
    res.send({ accessToken: newToken });
  },
  getInfo: (req, res) => {
    res.send({ user: req.user });
  },
};
export default User;
