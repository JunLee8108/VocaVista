import styles from "./page.module.css";
import SearchDiscussion from "./SearchDiscussion";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

async function getCommentData() {
  // https://voca-vista.vercel.app/
  // http://localhost:3000
  const res = await fetch("http://localhost:3000/api/comment", {
    method: "GET",
    cache: "no-store",
  });

  return res.json();
}

async function getDiscussionData() {
  // https://voca-vista.vercel.app/
  // http://localhost:3000
  const res = await fetch("http://localhost:3000/api/discussion", {
    method: "GET",
    cache: "no-store",
  });

  return res.json();
}

export default async function Community() {
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

      <SearchDiscussion result={result} commentData={commentData} />

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
