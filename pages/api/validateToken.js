import jwt from "jsonwebtoken";
import cookie from "cookie";
import clientPromise from "../../util/data/database";
import { ObjectId } from "mongodb";
import { getCookies, setCookie, deleteCookie, getCookie } from "cookies-next";

export default async function handler(req, res) {
  const jwtSecret = process.env.JWT_SECRET;

  try {
    // GET
    if (req.method === "GET") {
      const token = getCookie("token", { req, res });

      if (!token) {
        return res.status(200).json({ error: "Not authorized" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      return res.status(200).json(decoded);
    }
    // POST
    else if (req.method === "POST") {
      const data = JSON.parse(req.body);

      if (!data.value) {
        return res.status(200).json({ error: "Not authorized" });
      }

      try {
        const decoded = jwt.verify(data.value, process.env.JWT_SECRET);
        const db = (await clientPromise).db("voca");

        let existingUser = await db
          .collection("users")
          .findOne({ _id: new ObjectId(decoded.userId) });

        if (!existingUser) {
          return res.status(401).json({ message: "User doesn't exist" });
        }

        return res.status(200).json({
          message: "Success!",
          email: existingUser.email,
          firstname: existingUser.firstname,
          lastname: existingUser.lastname,
        });
      } catch (error) {
        return res.status(401).json({ error: "Not authorized" });
      }
    }
    // DELETE
    else if (req.method === "DELETE") {
      const deleteToken = getCookie("token", { req, res });

      if (!deleteToken) {
        return res.status(200).json("Token doesn't exist");
      }

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", deleteToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          maxAge: 0,
          path: "/",
        })
      );

      return res.status(200).json("Success!");
    }
  } catch (error) {
    return res.status(401).json({ error: "Not authorized" });
  }
}
