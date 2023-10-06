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
  const [itemsToShow, setItemsToShow] = useState(3);
  const [filteredData, setFilteredData] = useState<discussionProps[]>([]);

  const handleScroll = () => {
    if (searchInput !== "") {
      return;
    }

    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.body.offsetHeight - 5;

    if (bottom && itemsToShow <= result.length) {
      setItemsToShow(itemsToShow + 3);
    }
  };

  useEffect(() => {
    let list = document.querySelector<HTMLElement>(`.${styles.threadList}`);

    if (searchInput === "") {
      setIsInputEmpty(true);
      if (list) {
        list.style.visibility = "visible";
      }
      setFilteredData([]);
    } else {
      const filteredDataConst = result.filter(
        (data: any) =>
          data.content
            .replace(" ", "")
            .toLocaleLowerCase()
            .includes(searchInput) ||
          data.title.replace(" ", "").toLocaleLowerCase().includes(searchInput)
      );
      setFilteredData(filteredDataConst);
      setIsInputEmpty(false);
      setItemsToShow(3);
      if (list) {
        list.style.visibility = "hidden";
      }
    }
  }, [searchInput]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchInput]);

  useEffect(() => {
    if (itemsToShow > 3 && itemsToShow <= result.length) {
      sessionStorage.setItem("itemsToShow", JSON.stringify(itemsToShow));
    }
  }, [itemsToShow]);

  useEffect(() => {
    const savedItemsToShow = sessionStorage.getItem("itemsToShow");
    if (savedItemsToShow) {
      setItemsToShow(JSON.parse(savedItemsToShow));
    }
  }, []);

  return (
    <>
      <div className={styles.searchContainer}>
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
                <h2 className={styles.searchModalHeader}>Search Result: </h2>
                <ul className={styles.threadListSearch}>
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
                          <h2 className={styles.threadTitle}>
                            {content.title}
                          </h2>
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
        ) : !isInputEmpty && filteredData.length === 0 ? (
          <>
            <div className={styles.searchModalBg}>
              <div className={styles.searchModalContainer}>
                <p className={styles.searchModalNoResult}>NO RESULTS.</p>
              </div>
            </div>
          </>
        ) : null}
      </div>

      <ul className={styles.threadList}>
        {result.slice(0, itemsToShow).map((content: any, index: number) => {
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
    </>
  );
}
