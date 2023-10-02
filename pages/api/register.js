import clientPromise from "../../util/data/database";

export default async function handler(req, res) {
  const bcrypt = require("bcryptjs");
  const bcryptSalt = bcrypt.genSaltSync(10);

  try {
    if (req.method === "POST") {
      const db = (await clientPromise).db("voca");
      const data = JSON.parse(req.body);

      let existingUser = await db
        .collection("users")
        .findOne({ email: data.email });

      if (existingUser) {
        return res.status(200).json("User already exists!");
      }

      const hashedPassword = bcrypt.hashSync(data.password);

      const userInfo = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: hashedPassword,
        isVerified: false,
        createdAt: data.createdAt,
      };

      const result = await db.collection("users").insertOne(userInfo);

      res.status(200).json("Success!");
    }
  } catch (error) {
    res.status(500).json("error");
  }
}
