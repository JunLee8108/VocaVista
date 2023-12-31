"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

interface discussionProps {
  _id: string;
  title: string;
  email: string;
  firstname: string;
  lastname: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface commentProps {
  _id: string;
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
  const [isLoading, setLoading] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [filteredData, setFilteredData] = useState<discussionProps[]>([]);

  const handleScroll = () => {
    if (searchInput !== "") {
      return;
    }

    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.body.offsetHeight - 5;

    if (bottom && itemsToShow < result.length) {
      // setLoading(true);
      const timer = setTimeout(() => {
        // setLoading(false);
        setItemsToShow(itemsToShow + 3);
      }, 500);
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
            .replaceAll(" ", "")
            .toLocaleLowerCase()
            .includes(searchInput.replaceAll(" ", "").toLocaleLowerCase()) ||
          data.title
            .replaceAll(" ", "")
            .toLocaleLowerCase()
            .includes(searchInput.replaceAll(" ", "").toLocaleLowerCase())
      );
      setFilteredData(filteredDataConst);
      setIsInputEmpty(false);
      // setItemsToShow(3);
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
  }, []);

  useEffect(() => {
    if (itemsToShow > 3) {
      sessionStorage.setItem("itemsToShow", JSON.stringify(itemsToShow));
    }
  }, [itemsToShow]);

  useEffect(() => {
    const savedItemsToShow = sessionStorage.getItem("itemsToShow");
    if (savedItemsToShow) {
      setItemsToShow(JSON.parse(savedItemsToShow));
    }
  }, []);

  // console.log("itemsToShow:", itemsToShow);
  // console.log("result.length:", result.length);
  // console.log("isLoading:", isLoading);

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

      <Link
        href="/community/discussion/write"
        className={styles.communityNewPost}
      >
        <button className={styles.newThreadBtn}>NEW DISCUSSION</button>
      </Link>

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
                <p className={styles.communityPostDate}>
                  {content.updatedAt === "" ? (
                    <>{content.createdAt}</>
                  ) : (
                    <>{content.updatedAt} Edited</>
                  )}
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

      {isLoading ? <p>Loading</p> : null}
    </>
  );
}
