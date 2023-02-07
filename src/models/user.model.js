const { client } = require("./");

exports.UserModel = {
  findByEmail: async (email) => {
    const newClient = await client();
    await newClient.connect();
    const res = await newClient.query(
      `SELECT * from users."user" where "user".email=$1`,
      [email]
    );
    await newClient.end();
    return res.rows[0];
  },
};
