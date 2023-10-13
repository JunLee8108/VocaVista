"use client";

import "./page.css";
import DeleteDiscussion from "./DeleteDiscussion";

import Link from "next/link";
import { useEffect, useState } from "react";

type userInfoType = {
  email: string;
  firstname: string;
  lastname: string;
};

export default function EditAndDelete({
  result,
  email,
}: {
  result: string;
  email: string;
}) {
  const [username, setUsername] = useState<userInfoType>({
    email: "",
    firstname: "",
    lastname: "",
  });

  useEffect(() => {
    const getCookie = async () => {
      let resCookie = await fetch("/api/validateToken", {
        method: "GET",
        credentials: "include",
      });

      const userData = await resCookie.json();

      let getUserInfo = await fetch("/api/user", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(userData.userId),
      });

      getUserInfo = await getUserInfo.json();

      if ((getUserInfo as any).message === "Success!") {
        setUsername({
          email: (getUserInfo as any).email,
          firstname: (getUserInfo as any).firstname,
          lastname: (getUserInfo as any).lastname,
        });
      } else {
        alert((getUserInfo as any).message);
      }
    };
    getCookie();
  }, []);

  return (
    <>
      {email === username.email ? (
        <>
          <Link href={`/community/discussion/edit/${result}`}>
            <button className="post-detail-edit">EDIT</button>
          </Link>

          <DeleteDiscussion result={result} />
        </>
      ) : null}
    </>
  );
}
