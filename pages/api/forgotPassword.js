import clientPromise from "../../util/data/database";
import crypto from "crypto";

export default async function handler(req, res) {
  const nodemailer = require("nodemailer");
  const jwt = require("jsonwebtoken");

  try {
    if (req.method === "POST") {
      const db = (await clientPromise).db("voca");
      const data = JSON.parse(req.body);
      const jwtSecret = process.env.JWT_SECRET;

      let existingUser = await db
        .collection("users")
        .findOne({ email: data.email });

      if (!existingUser) {
        return res.status(400).json({
          status: "error",
          message: "User doesn't exist",
        });
      }

      if (existingUser) {
        if (!existingUser.isVerified) {
          return res.status(400).json({
            status: "error",
            message: "You have to verify your account first",
          });
        }
      }

      const verificationToken = jwt.sign(
        { userId: existingUser._id },
        jwtSecret,
        {
          expiresIn: "120s",
        }
      );

      let transporter = nodemailer.createTransport({
        service: "gmail", // You can use other email services
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      //   http://localhost:3000/
      //   https://voca-vista.vercel.app/
      let verificationLink = `https://voca-vista.vercel.app/account/forgot-password/${verificationToken}`;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: data.email,
        subject: "Reset Your Password Link",
        text: `This link will be expired in 2 minutes. Please visit this link to reset your password: ${verificationLink}`,
      });

      res.status(200).json({
        status: "success",
        message: "We just sent an email to you, so please check your email.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "error",
    });
  }
}
