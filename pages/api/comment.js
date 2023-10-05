import clientPromise from "../../util/data/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const db = (await clientPromise).db("voca");
      const data = JSON.parse(req.body);

      if (data.content === "") {
        return res.status(400).json("empty");
      }

      const commentInfo = {
        content: data.content,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        parent: new ObjectId(data.parent),
        createdAt: data.createdAt,
      };

      const insertCommentInfo = await db
        .collection("comments")
        .insertOne(commentInfo);

      res.status(200).json("Success!");
    } else if (req.method === "GET") {
      const db = (await clientPromise).db("voca");
      const commentData = await db.collection("comments").find().toArray();

      res.status(200).json(commentData);
    }
  } catch (error) {
    res.status(500).json("error");
  }
}