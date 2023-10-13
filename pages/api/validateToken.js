import jwt from "jsonwebtoken";
import cookie from "cookie";
import { getCookies, setCookie, deleteCookie, getCookie } from "cookies-next";

export default async function handler(req, res) {
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
