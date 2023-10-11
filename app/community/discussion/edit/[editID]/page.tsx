import "./PostEdit.css";
import clientPromise from "../../../../../util/data/database";
import EditPost from "./EditPost";

import { ObjectId } from "mongodb";

type postEditID = {
  editID?: string;
};

export default async function PostEdit({ params }: { params: postEditID }) {
  const db = (await clientPromise).db("voca");
  const result = await db
    .collection("discussions")
    .findOne({ _id: new ObjectId(params.editID) });

  const propsResult = {
    _id: result?._id.toString() as string,
    title: result?.title as string,
    firstname: result?.firstname as string,
    lastname: result?.lastname as string,
    content: result?.content as string,
    createdAt: result?.createdAt as string,
    updatedAt: "",
  };

  return (
    <>
      <div className="post-edit-container">
        <EditPost propsResult={propsResult} />
      </div>
    </>
  );
}
