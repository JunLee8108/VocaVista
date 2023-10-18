import styles from "./page.module.css";
import SearchDiscussion from "./SearchDiscussion";
import LoadingBeforeLogin from "../../../util/helpers/LoadingBeforeLogin";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

async function getCommentData() {
  // https://voca-vista.vercel.app/
  // http://localhost:3000/
  const res = await fetch("https://voca-vista.vercel.app/api/comment", {
    method: "GET",
    cache: "no-store",
  });

  return res.json();
}

async function getDiscussionData() {
  // https://voca-vista.vercel.app/
  // http://localhost:3000/
  const res = await fetch("https://voca-vista.vercel.app/api/discussion", {
    method: "GET",
    cache: "no-store",
  });

  return res.json();
}

export default async function Community() {
  const commentData = await getCommentData();
  const result = await getDiscussionData();

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>
          Community Discussions{" "}
          <FontAwesomeIcon icon={faComments} style={{ marginLeft: "5px" }} />
        </h1>

        <p className={styles.communitySubHeader}>
          Discover tailored Korean language courses at VocaVista!
        </p>

        <SearchDiscussion result={result} commentData={commentData} />
      </div>
    </>
  );
}
