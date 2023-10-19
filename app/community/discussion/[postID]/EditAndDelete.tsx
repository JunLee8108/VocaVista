"use client";

import "./page.css";
import DeleteDiscussion from "./DeleteDiscussion";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function EditAndDelete({
  result,
  email,
  userEmail,
}: {
  result: string;
  email: string;
  userEmail: string;
}) {
  return (
    <>
      {email === userEmail ? (
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
