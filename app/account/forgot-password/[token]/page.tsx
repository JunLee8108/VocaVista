"use client";

import "./page.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import PropagateLoader from "react-spinners/PropagateLoader";
import HashLoader from "react-spinners/HashLoader";

export default function ForgotPasswordVerify({ params }: { params: any }) {
  const [isVerifySuccess, setVerifySuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isPasswordSame, setPasswordSame] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const token = params.token;

  useEffect(() => {
    const verifyEmail = async () => {
      if (token) {
        let res = await fetch(`/api/forgotPasswordVerify/${token}`, {
          method: "GET",
          credentials: "include",
        });

        const response = await res.json();

        if (response.status === "success") {
          setVerifySuccess(true);
        } else {
          alert(response.message);
          router.replace("/");
        }
      }
    };

    verifyEmail();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setPasswordSame(true);
    }

    setLoading(true);

    let userPassword = { password: password };

    let res = await fetch(`/api/forgotPasswordVerify/${token}`, {
      method: "POST",
      body: JSON.stringify(userPassword),
      credentials: "include",
    });

    const response = await res.json();

    if (response.status === "success") {
      alert(response.message);
      alert("Please login with a new password!");
      router.replace("/account/login");
    } else {
      alert(response.message);
      window.location.reload();
    }
  };

  return (
    <>
      {isVerifySuccess ? (
        <div className="forgot-password-verify-container">
          <div className="forgot-password-form display-flex align-items-center">
            <div className="forgot-password-form-title">
              <h2>Reset Your Password</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="forgot-password-input-container">
                <input
                  type="password"
                  placeholder="Password*"
                  id="loginEmail"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
                <label htmlFor="loginEmail">PASSWORD</label>
              </div>
              <div className="forgot-password-input-container">
                <input
                  type="password"
                  placeholder="Confirm Password*"
                  id="loginEmail-confirm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                ></input>
                <label htmlFor="loginEmail-confirm">CONFIRM PASSWORD</label>
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

            {isPasswordSame ? (
              <div className="forgot-passoword-notmatch">
                <p>Passwords are not the same!</p>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="forgot-password-verify-container">
          <PropagateLoader
            color="#8c65d3"
            loading={true}
            size={30}
            speedMultiplier={0.8}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
}
