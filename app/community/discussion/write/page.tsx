"use client";

import LoadingPage from "../../../../util/helpers/LoadingPage";

import { useState, useEffect } from "react";
import styles from "./PostWrite.module.css";
import { useRouter } from "next/navigation";

type userInfoType = {
  email: string;
  firstname: string;
  lastname: string;
};

export default function PostWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState<userInfoType>({
    email: "",
    firstname: "",
    lastname: "",
  });

  const router = useRouter();

  async function handlePublish() {
    if (title && content) {
      setLoading(true);
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

      let discussions = {
        title: title,
        email: username.email,
        firstname: username.firstname,
        lastname: username.lastname,
        content: content,
        createdAt: date,
        updatedAt: "",
      };

      let res = await fetch("/api/discussion", {
        method: "POST",
        body: JSON.stringify(discussions),
      });

      res = await res.json();

      if (res.toString() === "Success!") {
        setLoading(false);
        router.refresh();
        router.push("/community/discussion");
      } else {
        alert("error!");
      }
    }
  }

  useEffect(() => {
    const getCookie = async () => {
      let resCookie = await fetch("/api/validateToken", {
        method: "GET",
        credentials: "include",
      });

      const userData = await resCookie.json();

      if (userData.error === "Not authorized") {
        return alert("Error!");
      } else {
        let getUserInfo = await fetch("/api/user", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(userData.userId),
        });

        getUserInfo = await getUserInfo.json();

        if ((getUserInfo as any).message === "Success!") {
          setUsername({
            email: (getUserInfo as any).email,
            firstname: (getUserInfo as any).firstname,
            lastname: (getUserInfo as any).lastname,
          });
        } else {
          alert((getUserInfo as any).message);
        }
      }
    };
    getCookie();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.titleInput}
        />

        <textarea
          placeholder="Write your content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.contentTextarea}
        ></textarea>

        <button
          onClick={handlePublish}
          disabled={!title || !content}
          className={styles.publishBtn}
        >
          PUBLISH
        </button>
      </div>

      {isLoading ? <LoadingPage /> : null}
    </>
  );
}
