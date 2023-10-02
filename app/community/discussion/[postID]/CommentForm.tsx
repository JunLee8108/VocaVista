"use client";

import "./page.css";
import { useState } from "react";
import { ObjectId } from "mongodb";
import { useRouter } from "next/navigation";

export default function CommentForm({ parentsID }: { parentsID: string }) {
  const [comment, setComment] = useState("");
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    let comments = {
      content: comment,
      firstname: "",
      lastname: "",
      email: "",
      parent: parentsID,
    };

    let res = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify(comments),
    });

    res = await res.json();

    if (res.toString() === "empty") {
      alert("Your comment is empty!");
    } else if (res.toString() === "Success!") {
      alert("Succees!");
      setComment("");
      router.refresh();
    }
  }

  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        id="comment-input"
      ></textarea>
      <button type="submit">Post Comment</button>
    </form>
  );
}
