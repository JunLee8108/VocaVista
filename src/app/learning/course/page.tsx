import styles from "./page.module.css";
import Image from "next/image";
import CourseSort from "./CourseSort";
import { course } from "../../../../util/data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSort } from "@fortawesome/free-solid-svg-icons";

export default function Course() {
  return (
    <>
      <div className={styles.courseContainer}>
        <h1 className={styles.courseHeader}>
          Courses
          <FontAwesomeIcon icon={faBook} style={{ marginLeft: "13px" }} />
        </h1>

        <p className={styles.courseSubHeader}>
          Discover tailored Korean language courses at VocaVista!
        </p>

        <CourseSort />
      </div>
    </>
  );
}
