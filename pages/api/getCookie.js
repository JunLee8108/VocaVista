import cookie from "cookie";
import { cookies } from "next/headers";
import { getCookies, setCookie, deleteCookie, getCookie } from "cookies-next";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      // const cookie = req.headers.cookie;
      const cookie = getCookie("user", { req, res });

      if (cookie) {
        return res.status(200).json(cookie);
      } else {
        return res.status(200).json("Not logined");
      }
    }

    if (req.method === "POST") {
      const data = JSON.parse(req.body);
      //   voca-vista.vercel.app
      //   localhost
      deleteCookie("user", {
        req,
        res,
        path: "/",
        domain: "voca-vista.vercel.app",
      });
      deleteCookie("token", { req, res, path: "/", domain: "localhost" });

      const userCookie = getCookie("user", { req, res });
      const tokenCookie = getCookie("user", { req, res });

      if (userCookie || tokenCookie) {
        return res.status(200).json("Logout failed!");
      }

      return res.status(200).json("Success!");
    }
  } catch (error) {
    // console.log(error);
    return res.status(401).json({ error: "Not authorized" });
  }
}
