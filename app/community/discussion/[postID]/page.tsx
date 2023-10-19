import "./page.css";
import CommentForm from "./CommentForm";
import clientPromise from "../../../../util/data/database";
import DeleteComment from "./DeleteComment";
import EditAndDelete from "./EditAndDelete";
import VerifyTokenAndGetUserInfo from "../../../../util/helpers/VerifyTokenAndGetUserInfo";

import React from "react";

import { ObjectId } from "mongodb";

export default async function PostDetail({ params }: { params: any }) {
  const db = (await clientPromise).db("voca");
  const parentsID = params.postID;
  const userData = await VerifyTokenAndGetUserInfo();

  const result = await db
    .collection("discussions")
    .findOne({ _id: new ObjectId(params.postID) });

  const commentData = await db
    .collection("comments")
    .find({ parent: new ObjectId(parentsID) })
    .toArray();

  return (
    <>
      <>
        {result && (
          <div className="post-detail-bg">
            <div className="post-detail-container">
              <div className="post-detail-delete-edit-container">
                <EditAndDelete
                  result={result._id.toString()}
                  email={result.email}
                  userEmail={(userData as any).email}
                />
              </div>

              <p className="post-detail-date">
                {result.updatedAt === "" ? (
                  <>{result.createdAt}</>
                ) : (
                  <>{result.updatedAt} Edited</>
                )}
              </p>
              <h1 className="post-detail-header">{result.title}</h1>
              <p className="post-detail-content">{result.content}</p>

              <div className="commentsSection">
                <p className="comments-header">Comments:</p>
                {commentData.map((contentForcomment: any, index: any) => {
                  return (
                    <React.Fragment key={index}>
                      <p className="comments-user">
                        {contentForcomment.firstname}
                      </p>

                      <p className="comments-date">
                        {contentForcomment.createdAt}
                      </p>

                      {(userData as any).email === contentForcomment.email ? (
                        <DeleteComment
                          contentForcomment={contentForcomment._id.toString()}
                        />
                      ) : null}

                      <p className="comments">{contentForcomment.content}</p>
                    </React.Fragment>
                  );
                })}
              </div>

              <CommentForm parentsID={parentsID} userData={userData} />
            </div>
          </div>
        )}
      </>
    </>
  );
}
