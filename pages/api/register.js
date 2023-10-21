import clientPromise from "../../util/data/database";
import crypto from "crypto";

export default async function handler(req, res) {
  const bcrypt = require("bcryptjs");
  const nodemailer = require("nodemailer");
  const bcryptSalt = bcrypt.genSaltSync(10);

  try {
    if (req.method === "POST") {
      const db = (await clientPromise).db("voca");
      const data = JSON.parse(req.body);

      let existingUser = await db
        .collection("users")
        .findOne({ email: data.email });

      if (existingUser) {
        if (!existingUser.isVerified) {
          const deleteUser = await db
            .collection("users")
            .deleteOne({ _id: existingUser._id });
        } else {
          return res.status(200).json("User already exists!");
        }
      }

      const hashedPassword = bcrypt.hashSync(data.password);

      const verificationToken = crypto.randomBytes(32).toString("hex");
      const verificationExpiration = Date.now() + 300000; // 5 minutes

      const userInfo = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: hashedPassword,
        isVerified: false,
        verificationToken: verificationToken,
        verificationExpiration: verificationExpiration,
        createdAt: data.createdAt,
      };

      const result = await db.collection("users").insertOne(userInfo);

      let transporter = nodemailer.createTransport({
        service: "gmail", // You can use other email services
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      //   http://localhost:3000/
      //   https://voca-vista.vercel.app/
      let verificationLink = `https://voca-vista.vercel.app/verify-email/${verificationToken}`;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: data.email,
        subject: "Email Verification",
        text: `This link will be expired in 5 minutes. Please verify your email by clicking the following link: ${verificationLink}`,
      });

      res.status(200).json("Success!");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("error");
  }
}
