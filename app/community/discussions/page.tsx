import styles from "./page.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

export default function Community() {
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
        <li className={styles.threadItem}>
          <h2 className={styles.threadTitle}>
            Having trouble with basic verbs
          </h2>
          <p className={styles.threadDetails}>Posted by JohnDoe, 3 comments</p>
        </li>

        <li className={styles.threadItem}>
          <h2 className={styles.threadTitle}>
            Having trouble with basic verbs
          </h2>
          <p className={styles.threadDetails}>Posted by JohnDoe, 3 comments</p>
        </li>

        <li className={styles.threadItem}>
          <h2 className={styles.threadTitle}>
            Having trouble with basic verbs
          </h2>
          <p className={styles.threadDetails}>Posted by JohnDoe, 3 comments</p>
        </li>

        <li className={styles.threadItem}>
          <h2 className={styles.threadTitle}>
            Having trouble with basic verbs
          </h2>
          <p className={styles.threadDetails}>Posted by JohnDoe, 3 comments</p>
        </li>
      </ul>

      <button className={styles.newThreadBtn}>NEW DISCUSSION</button>
    </div>
  );
}
