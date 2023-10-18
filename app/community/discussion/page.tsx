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

    return res;
  }
}

export default async function Community() {
  const commentData = await getCommentData();
  const result = await getDiscussionData();
  const user = await getUserInfo();

  const cookieStore = cookies();
  const token = cookieStore.get("token");

  const isError = () => {
    if (user) {
      if ((user as any).error) {
        return false;
      } else {
        return true;
      }
    }
  };

  return (
    <>
      {!isError() || !token ? (
        <LoadingBeforeLogin />
      ) : (
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
      )}
    </>
  );
}
