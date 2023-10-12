"use client";

import "./page.css";
import LoadingPage from "../../../util/helpers/LoadingPage";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { setCookie } from "cookies-next";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    let user = {
      email: email,
      password: password,
    };

    let res = await fetch("/api/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(user),
    });

    res = await res.json();
    const responseString = res.toString();

    if (
      responseString === "User doesn't exists!" ||
      responseString === "Password is incorrect!"
    ) {
      alert(responseString);
    } else if (responseString === "Success!") {
      try {
        const validationResponse = await fetch("/api/validateToken", {
          method: "GET",
          credentials: "include",
        });

        if (validationResponse.ok) {
          const userData = await validationResponse.json();
          router.refresh();
          router.replace("/");

          // console.log(userData); // Log the user data or set it to state
        } else {
          console.error("Failed to validate token");
        }
      } catch (error) {
        console.error("Error during token validation:", error);
      }
    }

    setLoading(false);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form className="display-flex" onSubmit={handleSubmit}>
        <div className="account-form-flexbox display-flex justify-content-center align-items-center">
          <h1>
            VocaVista <FontAwesomeIcon icon={faComment} />
          </h1>
        </div>

        <div className="account-form-flexbox display-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faUser} className="account-user-icon" />

          <div className="account-input-container display-flex justify-content-center">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              placeholder="Email*"
              id="login-email"
            ></input>
            <label htmlFor="login-email">EMAIL</label>
          </div>

          <div className="account-input-container display-flex justify-content-center">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              placeholder="Password*"
              id="login-password"
            ></input>
            <label htmlFor="login-password">PASSWORD</label>
          </div>

          <button type="submit">LOGIN</button>

          <p>
            <Link href="/account/forgot-password" className="account-link">
              <FontAwesomeIcon icon={faKey} style={{ marginRight: "3px" }} />
              Forgot Password?
            </Link>
          </p>

          <div className="account-boder"></div>

          <p>
            <Link href="/account/register" className="account-link">
              Register
            </Link>{" "}
            Now to Explore VocaVista
          </p>
        </div>
      </form>

      {isLoading ? <LoadingPage /> : null}
    </>
  );
}
