"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";

import { sortBtn } from "../../../util/data/data";
import { course } from "../../../util/data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

type sortData = {
  id: number;
  img: any;
  difficulty: string;
  title: string;
  content: string;
};

export default function CourseSort() {
  const [sortedData, setSortedData] = useState<sortData[]>([]);
  const [fade, setFade] = useState("");

  const handleSortBtn = (e: MouseEvent<HTMLElement>) => {
    const sortBtnSelectAll = document.querySelectorAll<HTMLElement>(
      `.${styles.courseSort} p`
    );
    for (let i = 0; i < sortBtnSelectAll.length; i++) {
      sortBtnSelectAll[i].style.color = "gray";
    }
    e.currentTarget.style.color = "orange";

    let copy = [...sortedData];
    copy.length = 0;
    setSortedData(copy);

    let innerHtml = e.currentTarget.innerHTML;

    let timer = setTimeout(() => {
      if (innerHtml === "All") {
        setSortedData(course);
      } else {
        const sorted = course.filter(
          (p) =>
            p.difficulty.toLocaleLowerCase() === innerHtml.toLocaleLowerCase()
        );
        setSortedData(sorted);
      }
    }, 500);
  };

  useEffect(() => {
    setSortedData(course);
  }, []);

  return (
    <>
      <div className={`${styles.courseSort}`}>
        <FontAwesomeIcon
          icon={faSort}
          style={{ display: "inline-block", marginRight: "10px" }}
        />
        {sortBtn.map((content, index) => {
          return (
            <p onClick={(e) => handleSortBtn(e)} key={index}>
              {content}
            </p>
          );
        })}
      </div>

      <div className={`${styles.courseCardContainer}`}>
        {sortedData.map((content, index) => {
          return (
            <Link
              href={`/learning/course/${sortedData[index].id}`}
              key={index}
              className={styles.courseLink}
            >
              <div className={styles.courseCard}>
                <div className={styles.courseImageContainer}>
                  <Image
                    src={sortedData[index].img}
                    alt="Course 1"
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={true}
                  />
                </div>
                <h4>{sortedData[index].title}</h4>
                <p>{sortedData[index].content}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
