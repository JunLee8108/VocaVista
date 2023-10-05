"use client";

import "./page.css";
import LoadingPage from "../../../../util/helpers/LoadingPage";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CommentForm({ parentsID }: { parentsID: string }) {
  const [comment, setComment] = useState("");
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    let today = new Date();

    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let dateString = year + "-" + month + "-" + day;

    let comments = {
      content: comment,
      firstname: "",
      lastname: "",
      email: "",
      parent: parentsID,
      createdAt: dateString,
    };

    let res = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify(comments),
    });

    res = await res.json();

    if (res.toString() === "empty") {
      setLoading(false);
      alert("Your comment is empty!");
    } else if (res.toString() === "Success!") {
      setLoading(false);
      //   alert("Succees!");
      setComment("");
      router.refresh();
    }
  }

  return (
    <>
      <form className="commentForm" onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          id="comment-input"
        ></textarea>
        <button type="submit">Post Comment</button>
      </form>

      {isLoading && <LoadingPage />}
    </>
  );
}
