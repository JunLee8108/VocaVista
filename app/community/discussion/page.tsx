import styles from "./page.module.css";
import clientPromise from "../../../util/data/database";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

export default async function Community() {
  const db = (await clientPromise).db("voca");
  const result = await db.collection("discussions").find().toArray();

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
        {result.map((content, index) => {
          return (
            <li className={styles.threadItem} key={index}>
              <Link
                href={`/community/discussion/${content._id}`}
                className={styles.communityLink}
              >
                <h2 className={styles.threadTitle}>{content.title}</h2>
                <p className={styles.threadDetails}>
                  {`Posted by ${content.firstname} ${content.lastname}, 3 comments`}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>

      <button className={styles.newThreadBtn}>NEW DISCUSSION</button>
    </div>
  );
}
