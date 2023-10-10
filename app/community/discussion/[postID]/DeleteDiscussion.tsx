"use client";

import "./page.css";
import LoadingPage from "../../../../util/helpers/LoadingPage";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteDiscussion({ result }: { result: string }) {
  const [isModal, setModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

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
      let res = await fetch("/api/discussion", {
        method: "DELETE",
        body: JSON.stringify(result),
      });

      res = await res.json();

      if (res.toString() === "Success!") {
        setLoading(false);
        router.refresh();
        router.push("/community/discussion");
      } else {
        alert("Failed to delete the discussion.");
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="post-detail-delete" onClick={handleModal}>
        DELETE
      </button>

      {isModal ? (
        <div
          className="post-detail-delete-bg delete-comment-modal-bg"
          onClick={(e) => {
            clickBgCloseModal(e);
          }}
        >
          <div className="post-detail-delete-modal-container delete-comment-modal-container">
            <h3>Are you sure want to delete this discussion?</h3>
            <div className="post-detail-delete-button-container delete-comment-button-container">
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
      ) : null}

      {isLoading ? <LoadingPage /> : null}
    </>
  );
}
