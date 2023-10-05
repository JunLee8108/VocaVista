"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

interface discussionProps {
  id: string;
  firstname: string;
  lastname: string;
  content: string;
  createdAt: string;
}

interface commentProps {
  id: string;
  content: string;
  firstname: string;
  lastname: string;
  email: string;
  parent: string;
  createdAt: string;
}

export default function SearchDiscussion({
  result,
  commentData,
}: {
  result: discussionProps[];
  commentData: commentProps[];
}) {
  const [searchInput, setSearchInput] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const filteredData = result.filter(
    (data: any) =>
      data.content
        .replace(" ", "")
        .toLocaleLowerCase()
        .includes(searchInput.replace(" ", "").toLocaleLowerCase()) ||
      data.title
        .replace(" ", "")
        .toLocaleLowerCase()
        .includes(searchInput.replace(" ", "").toLocaleLowerCase())
  );

  useEffect(() => {
    if (searchInput !== "") {
      setIsInputEmpty(false);
    } else {
      setIsInputEmpty(true);
    }
  }, [searchInput]);

  return (
    <>
      <input
        type="text"
        placeholder="🔍 Search Discussions..."
        className={styles.searchBar}
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />

      {!isInputEmpty && filteredData.length > 0 ? (
        <>
          <div className={styles.searchModalBg}>
            <div className={styles.searchModalContainer}>
              <ul className={styles.threadList}>
                {filteredData.map((content: any, index: number) => {
                  const idToString = content._id.toString();

                  const filteredCommentData = commentData.filter(
                    (data: any) =>
                      data.parent.toString() === content._id.toString()
                  );

                  return (
                    <Link
                      href={`/community/discussion/${idToString}`}
                      className={styles.communityLink}
                      key={index}
                    >
                      <li className={styles.threadItem}>
                        <p className={styles.communityPostDate}>
                          {content.createdAt}
                        </p>
                        <h2 className={styles.threadTitle}>{content.title}</h2>
                        <p className={styles.threadDetails}>
                          {`Posted by ${content.firstname} ${content.lastname}, ${filteredCommentData.length} comments`}
                        </p>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      ) : filteredData.length === 0 ? (
        <>
          <div className={styles.searchModalBg}>
            <div className={styles.searchModalContainer}>
              <p className={styles.searchModalNoResult}>No results</p>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
