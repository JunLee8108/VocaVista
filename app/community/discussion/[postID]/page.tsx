import "./page.css";
import CommentForm from "./CommentForm";
import clientPromise from "../../../../util/data/database";
import DeleteComment from "./DeleteComment";
import EditAndDelete from "./EditAndDelete";

import React from "react";
import { cookies } from "next/headers";

import { ObjectId } from "mongodb";

async function getUserInfo() {
  // https://voca-vista.vercel.app/
  // http://localhost:3000/
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (token && token.value) {
    let res = await fetch("https://voca-vista.vercel.app/api/validateToken", {
      method: "GET",
      headers: {
        Authorization: token.value,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    res = await res.json();

    let getUserInfo = await fetch("https://voca-vista.vercel.app/api/user", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify((res as any).userId),
    });

    getUserInfo = await getUserInfo.json();

    return getUserInfo;
    // (getUserInfo as any).email;
  }
}

export default async function PostDetail({ params }: { params: any }) {
  const db = (await clientPromise).db("voca");
  const parentsID = params.postID;
  const userData = await getUserInfo();

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
