"use client";

import "./page.css";
import LoadingPage from "../../../util/helpers/LoadingPage";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HashLoader from "react-spinners/HashLoader";

export default function ForgotPasswordClient() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isEmailSame, setEmailSame] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      return setEmailSame(true);
    }

    setLoading(true);

    let user = { email: email };

    let res = await fetch("/api/forgotPassword", {
      method: "POST",
      body: JSON.stringify(user),
    });

    const response = await res.json();

    alert(response.message);
    setLoading(false);

    if (response.status === "success") {
      router.push("/account/login");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="forgot-password-input-container">
          <input
            type="email"
            placeholder="Email*"
            id="loginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <label htmlFor="loginEmail">EMAIL</label>
        </div>
        <div className="forgot-password-input-container">
          <input
            type="email"
            placeholder="Confirm Email*"
            id="loginEmail-confirm"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          ></input>
          <label htmlFor="loginEmail-confirm">CONFIRM EMAIL</label>
        </div>

        <div className="forgot-password-button-container display-flex">
          <div className="forgot-password-button-flexbox display-flex">
            {isLoading ? (
              <HashLoader color="#8c65d3" />
            ) : (
              <button type="submit">SEND</button>
            )}
          </div>
        </div>
      </form>

      {isEmailSame ? (
        <div className="forgot-passoword-notmatch">
          <p>Emails are not the same!</p>
        </div>
      ) : null}

      {/* {isLoading ? <LoadingPage /> : null} */}
    </>
  );
}
