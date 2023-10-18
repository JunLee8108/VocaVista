import clientPromise from "../../util/data/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const db = (await clientPromise).db("voca");
      const data = JSON.parse(req.body);

      let existingUser = await db
        .collection("users")
        .findOne({ _id: new ObjectId(data) });

      if (!existingUser) {
        return res.status(401).json({ message: "User doesn't exist" });
      }

      res.status(200).json({
        message: "Success!",
        email: existingUser.email,
        firstname: existingUser.firstname,
        lastname: existingUser.lastname,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
}
