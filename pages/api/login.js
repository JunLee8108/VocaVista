import clientPromise from "../../util/data/database";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default async function handler(req, res) {
  const bcrypt = require("bcryptjs");
  const jwtSecret = process.env.JWT_SECRET;

  try {
    if (req.method === "POST") {
      const db = (await clientPromise).db("voca");
      const data = JSON.parse(req.body);

      let existingUser = await db
        .collection("users")
        .findOne({ email: data.email });

      if (!existingUser) {
        return res.status(200).json("User doesn't exists!");
      }

      const isPasswordCorrect = bcrypt.compareSync(
        data.password,
        existingUser.password
      );

      if (!isPasswordCorrect) {
        return res.status(200).json("Password is incorrect!");
      }

      const token = jwt.sign({ userId: existingUser._id }, jwtSecret, {
        expiresIn: "1h",
      });

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          maxAge: 3600,
          path: "/",
        })
      );

      res.status(200).json("Success!");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("error");
  }
}
