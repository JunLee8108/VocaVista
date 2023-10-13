import jwt from "jsonwebtoken";
import cookie from "cookie";
import { getCookies, setCookie, deleteCookie, getCookie } from "cookies-next";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      // const token = req.cookies.token;
      const token = getCookie("token", { req, res });

      if (!token) {
        return res.status(200).json({ error: "Not authorized" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // res.setHeader(
      //   "Set-Cookie",
      //   cookie.serialize("user", decoded.userId, {
      //     httpOnly: true,
      //     secure: process.env.NODE_ENV !== "development",
      //     sameSite: "strict",
      //     maxAge: 3600,
      //     path: "/",
      //   })
      // );

      return res.status(200).json(decoded);
    } else if (req.method === "POST") {
      deleteCookie("token", {
        req,
        res,
        path: "/",
        domain: "voca-vista.vercel.app",
      });
      return res.status(200).json("Success!");
    }
  } catch (error) {
    return res.status(401).json({ error: "Not authorized" });
  }
}
