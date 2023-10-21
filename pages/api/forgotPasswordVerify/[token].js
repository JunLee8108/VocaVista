import clientPromise from "../../../util/data/database";
import crypto from "crypto";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const jwt = require("jsonwebtoken");
  const bcrypt = require("bcryptjs");

  try {
    if (req.method === "GET") {
      const db = (await clientPromise).db("voca");
      const { token } = req.query;
      const jwtSecret = process.env.JWT_SECRET;

      const { userId } = jwt.verify(token, jwtSecret);

      let existingUser = await db
        .collection("users")
        .findOne({ _id: new ObjectId(userId) });

      if (!existingUser) {
        return res.status(400).json({
          status: "error",
          message: "User doesn't exist",
        });
      }

      res.status(200).json({
        status: "success",
        message: "We just sent an email to you, so please check your email.",
      });
    }
  } catch (error) {
    console.log(error);

    if (error instanceof jwt.TokenExpiredError) {
      return res.status(400).send({
        status: "error",
        message: "Verification link was expired",
      });
    }

    return res.status(500).json({
      status: "error",
      message: "Error for forgot password process",
    });
  }

  try {
    if (req.method === "POST") {
      const db = (await clientPromise).db("voca");
      const data = JSON.parse(req.body);
      const { token } = req.query;
      const jwtSecret = process.env.JWT_SECRET;
      const { userId } = jwt.verify(token, jwtSecret);
      const hashedPassword = bcrypt.hashSync(data.password);

      let existingUser = await db
        .collection("users")
        .findOne({ _id: new ObjectId(userId) });

      if (!existingUser) {
        return res.status(400).json({
          status: "error",
          message: "User doesn't exist",
        });
      }

      const updatePassword = await db.collection("users").updateOne(
        { _id: new ObjectId(userId) },
        {
          $set: {
            password: hashedPassword,
          },
        }
      );

      res.status(200).json({
        status: "success",
        message: "Successfully Changed the password!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Error for chaning the password!",
    });
  }
}
