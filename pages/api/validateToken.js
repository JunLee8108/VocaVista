import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Not authorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json(decoded);
  } catch (error) {
    return res.status(401).json({ error: "Not authorized" });
  }
}
