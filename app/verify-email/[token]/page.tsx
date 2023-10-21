"use client";

import "./page.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import PropagateLoader from "react-spinners/PropagateLoader";

export default function VerifyEamil({ params }: { params: any }) {
  const router = useRouter();
  const token = params.token;

  useEffect(() => {
    const verifyEmail = async () => {
      if (token) {
        let res = await fetch(`/api/validateEmail/${token}`, {
          method: "GET",
          credentials: "include",
        });

        const response = await res.json();

        switch (response.message) {
          case "Invalid token":
            alert("Verification failed!");
            router.replace("/");
            break;

          case "This email address has already been verified.":
            alert(response.message);
            router.replace("/");
            break;

          case "The verification token has expired. Please request a new one.":
            alert(response.message);
            router.replace("/");
            break;

          case "Thank you for verifying your email address.":
            alert(response.message);
            router.replace("/");
            break;
        }
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <>
      <div className="verfication-email-container">
        <PropagateLoader
          color="#8c65d3"
          loading={true}
          size={30}
          speedMultiplier={0.8}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
}
