"use client";

import "./PostEdit.css";
import { useState, useEffect } from "react";
import { FormEvent } from "react";
import { ObjectId } from "mongodb";
import { useRouter } from "next/navigation";
import HashLoader from "react-spinners/HashLoader";

interface discussionProps {
  _id: string;
  title: string;
  firstname: string;
  lastname: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default function EditPost({
  propsResult,
}: {
  propsResult: discussionProps;
}) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);

    e.preventDefault();

    let today = new Date();

    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let dateString = year + "-" + month + "-" + day;

    let hours = ("0" + today.getHours()).slice(-2);
    let minutes = ("0" + today.getMinutes()).slice(-2);
    let seconds = ("0" + today.getSeconds()).slice(-2);
    let timeString = hours + ":" + minutes + ":" + seconds;

    let date = dateString + " " + timeString;

    propsResult.title = title;
    propsResult.content = content;
    propsResult.updatedAt = date;

    let res = await fetch("/api/discussion", {
      method: "PUT",
      body: JSON.stringify(propsResult),
    });

    res = await res.json();

    if (res.toString() === "Success!") {
      router.refresh();
      router.replace(`/community/discussion/${propsResult._id}`);
    } else {
      setLoading(false);
      alert("Failed to edit the post");
    }

    console.log(res.toString());
  };

  useEffect(() => {
    setTitle(propsResult.title);
    setContent(propsResult.content);
  }, []);

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Title"
          defaultValue={propsResult!.title}
          className="post-edit-input"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          placeholder="Write your content..."
          defaultValue={propsResult!.content}
          className="post-edit-textarea"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>

        {isLoading ? (
          <HashLoader color="#8c65d3" />
        ) : (
          <button
            disabled={!title || !content}
            className="post-edit-button"
            type="submit"
          >
            EDIT
          </button>
        )}
      </form>
    </>
  );
}
