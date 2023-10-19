"use client";

import { useState, useEffect } from "react";

type User = {
  firstname: string;
  lastname: string;
  email: string;
  confirmEmail: string;
};

export default function UserClient({
  userData,
}: {
  userData: Response | undefined;
}) {
  const [userInfo, setUserInfo] = useState<User>({
    firstname: "",
    lastname: "",
    email: "",
    confirmEmail: "",
  });
  const [isEmailSame, setEmailSame] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userInfo.email !== userInfo.confirmEmail) {
      return setEmailSame(true);
    }
  };

  useEffect(() => {
    setUserInfo((prevState) => {
      return {
        ...prevState,
        firstname: (userData as any).firstname,
        lastname: (userData as any).lastname,
        email: (userData as any).email,
      };
    });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="account-setting-input-container">
          <input
            value={userInfo.firstname}
            onChange={(e) => {
              setUserInfo((prevState) => {
                return { ...prevState, firstname: e.target.value };
              });
            }}
            type="text"
            placeholder="First Name*"
            id="first-name"
            required
          ></input>
          <label htmlFor="first-name">FIRST NAME</label>
        </div>

        <div className="account-setting-input-container">
          <input
            type="text"
            placeholder="Last Name*"
            value={userInfo.lastname}
            onChange={(e) => {
              setUserInfo((prevState) => {
                return { ...prevState, lastname: e.target.value };
              });
            }}
            id="last-name"
            required
          ></input>
          <label htmlFor="last-name">LAST NAME</label>
        </div>

        <div className="account-setting-input-container">
          <input
            type="email"
            value={userInfo.email}
            onChange={(e) => {
              setUserInfo((prevState) => {
                return { ...prevState, email: e.target.value };
              });
            }}
            placeholder="Email*"
            id="loginEmail"
            required
          ></input>
          <label htmlFor="loginEmail">EMAIL</label>
        </div>

        <div className="account-setting-input-container">
          <input
            type="email"
            value={userInfo.confirmEmail}
            onChange={(e) => {
              setUserInfo((prevState) => {
                return { ...prevState, confirmEmail: e.target.value };
              });
            }}
            placeholder="Confirm Email*"
            id="loginEmail-confirm"
            required
          ></input>
          <label htmlFor="loginEmail-confirm">CONFIRM EMAIL</label>
        </div>

        {isEmailSame ? (
          <div className="account-setting-passoword-email-notmatch">
            <p>Emails are not the same!</p>
          </div>
        ) : null}

        {/* {isPasswordSame ? (
          <div className="register-passoword-email-notmatch">
            <p>Passwords are not the same!</p>
          </div>
        ) : null} */}

        <div className="account-setting-button-container display-flex">
          <div className="account-setting-button-flexbox display-flex">
            <button type="submit">MODIFY</button>
          </div>
        </div>
      </form>
    </>
  );
}
