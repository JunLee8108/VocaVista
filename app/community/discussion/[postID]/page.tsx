import "./page.css";
import CommentForm from "./CommentForm";
import clientPromise from "../../../../util/data/database";
import DeleteComment from "./DeleteComment";
import DeleteDiscussion from "./DeleteDiscussion";

import { ObjectId } from "mongodb";
import React from "react";

export default async function PostDetail({ params }: { params: any }) {
  const db = (await clientPromise).db("voca");
  const parentsID = params.postID;

  const result = await db
    .collection("discussions")
    .findOne({ _id: new ObjectId(params.postID) });

  const commentData = await db
    .collection("comments")
    .find({ parent: new ObjectId(parentsID) })
    .toArray();

  return (
    <>
      {result && (
        <div className="post-detail-bg">
          <div className="post-detail-container">
            <DeleteDiscussion result={result._id.toString()} />
            <p className="post-detail-date">{result.createdAt}</p>
            <h1 className="post-detail-header">{result.title}</h1>
            <p className="post-detail-content">{result.content}</p>

            <div className="commentsSection">
              <p className="comments-header">Comments:</p>
              {commentData.map((contentForcomment: any, index: any) => {
                return (
                  <React.Fragment key={index}>
                    <p className="comments-date">
                      {contentForcomment.createdAt}
                    </p>

                    <p className="comments">{contentForcomment.content}</p>

                    <DeleteComment
                      contentForcomment={contentForcomment._id.toString()}
                    />
                  </React.Fragment>
                );
              })}
            </div>

            <CommentForm parentsID={parentsID} />
          </div>
        </div>
      )}
    </>
  );
}
