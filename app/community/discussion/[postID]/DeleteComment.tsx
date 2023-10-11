"use client";

import "./page.css";
import LoadingPage from "../../../../util/helpers/LoadingPage";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

export default function DeleteComment({
  contentForcomment,
}: {
  contentForcomment: string;
}) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [isModal, setModal] = useState(false);

  const handleModal = () => {
    setModal((isModal) => !isModal);
  };

  const clickBgCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = document.querySelector(".delete-comment-modal-bg");
    if (e.target === target) {
      setModal(false);
    }
  };

  const handleButton = async (inst: string) => {
    setLoading(true);
    setModal(false);
    if (inst === "Yes") {
      let res = await fetch("/api/comment", {
        method: "DELETE",
        body: JSON.stringify(contentForcomment),
      });

      res = await res.json();

      if (res.toString() === "Success!") {
        setLoading(false);
        router.refresh();
      } else {
        alert("Failed to delete the comment.");
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="comments-delete" onClick={handleModal}>
        <FontAwesomeIcon icon={faSquareXmark} />
      </button>

      {isModal ? (
        <>
          <div
            className="delete-comment-modal-bg"
            onClick={(e) => {
              clickBgCloseModal(e);
            }}
          >
            <div className="delete-comment-modal-container">
              <h3>Are you sure want to delete this comment?</h3>
              <div className="delete-comment-button-container">
                <button
                  onClick={() => {
                    handleButton("Yes");
                  }}
                >
                  YES
                </button>
                <button
                  onClick={() => {
                    handleButton("No");
                  }}
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {isLoading ? <LoadingPage /> : null}
    </>
  );
}
