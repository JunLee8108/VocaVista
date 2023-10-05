import styles from "./page.module.css";
import clientPromise from "../../../util/data/database";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

async function getCommentData() {
  // https://voca-vista.vercel.app/
  const res = await fetch("https://voca-vista.vercel.app//api/comment", {
    method: "GET",
    cache: "no-store",
  });

  return res.json();
}

async function getDiscussionData() {
  // https://voca-vista.vercel.app/
  const res = await fetch("https://voca-vista.vercel.app/api/discussion", {
    method: "GET",
    cache: "no-store",
  });

  return res.json();
}

export default async function Community() {
  const db = (await clientPromise).db("voca");
  // const result = await db.collection("discussions").find().toArray();
  // const commentData = await db.collection("comments").find().toArray();

  const commentData = await getCommentData();
  const result = await getDiscussionData();

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Community Discussions{" "}
        <FontAwesomeIcon icon={faComments} style={{ marginLeft: "5px" }} />
      </h1>

      <p className={styles.communitySubHeader}>
        Discover tailored Korean language courses at VocaVista!
      </p>
      <input
        type="text"
        placeholder="🔍 Search Discussions..."
        className={styles.searchBar}
      />

      <ul className={styles.threadList}>
        {result.map((content: any, index: number) => {
          const idToString = content._id.toString();
          const filteredCommentData = commentData.filter(
            (data: any) => data.parent.toString() === content._id.toString()
          );

          return (
            <Link
              href={`/community/discussion/${idToString}`}
              className={styles.communityLink}
              key={index}
            >
              <li className={styles.threadItem}>
                <p className={styles.communityPostDate}>{content.createdAt}</p>
                <h2 className={styles.threadTitle}>{content.title}</h2>
                <p className={styles.threadDetails}>
                  {`Posted by ${content.firstname} ${content.lastname}, ${filteredCommentData.length} comments`}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>

      <Link
        href="/community/discussion/write"
        className={styles.communityNewPost}
      >
        <button className={styles.newThreadBtn}>NEW DISCUSSION</button>
      </Link>
    </div>
  );
}
