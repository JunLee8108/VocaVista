import { ObjectId } from "mongodb";
import clientPromise from "../../util/data/database";

export default async function handler(req, res) {
  try {
    // POST
    if (req.method === "POST") {
      const db = (await clientPromise).db("voca");
      const data = JSON.parse(req.body);

      if (data.content === "") {
        return res.status(400).json("empty");
      }

      const discussionInfo = {
        title: data.title,
        firstname: data.firstname,
        lastname: data.lastname,
        content: data.content,
        createdAt: data.createdAt,
      };

      const result = await db
        .collection("discussions")
        .insertOne(discussionInfo);

      res.status(200).json("Success!");
    }
    // GET
    else if (req.method === "GET") {
      const db = (await clientPromise).db("voca");
      const discussionData = await db
        .collection("discussions")
        .find()
        .toArray();

      res.status(200).json(discussionData);
    }
    // DELETE
    else if (req.method === "DELETE") {
      const discussionID = new ObjectId(JSON.parse(req.body));
      try {
        const db = (await clientPromise).db("voca");
        const deleteCommnet = await db
          .collection("comments")
          .deleteMany({ parent: discussionID });
        const deleteDiscussion = await db
          .collection("discussions")
          .deleteOne({ _id: discussionID });

        res.status(200).json("Success!");
      } catch (error) {
        return res.status(400).json("Error!");
      }
    }
  } catch (error) {
    res.status(500).json("error");
  }
}
