"use client";

import "./page.css";

import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailSame, setEmailSame] = useState(false);
  const [isPasswordSame, setPasswordSame] = useState(false);
  const [isSuccessModal, setSuccessModal] = useState(false);
  const [isFailedModal, setFailedModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleConfirm = (a: boolean, b: boolean) => {
    setLoading(false);
    setEmailSame(a);
    setPasswordSame(b);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // setLoading(true);

    // Checking if the email and the confirm email are the same
    if (email !== confirmEmail && password === confirmPassword) {
      return handleConfirm(true, false);
    } else if (email === confirmEmail && password !== confirmPassword) {
      return handleConfirm(false, true);
    } else if (email !== confirmEmail && password !== confirmPassword) {
      return handleConfirm(true, true);
    } else {
      setEmailSame(false);
      setPasswordSame(false);
    }

    let today = new Date();

    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let dateString = year + "-" + month + "-" + day;

    let hours = ("0" + today.getHours()).slice(-2);
    let minutes = ("0" + today.getMinutes()).slice(-2);
    let seconds = ("0" + today.getSeconds()).slice(-2);
    let timeString = hours + ":" + minutes + ":" + seconds;

    let date = dateString + " " + timeString;

    let users = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      isVerified: false,
      createdAt: date,
    };

    let res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(users),
    });

    res = await res.json();

    // Debugging
    console.log(res);

    if (res.toString() === "User already exists!") {
      alert("User already exists!");
    } else if (res.toString() === "Success!") {
      alert("Success!");
    }
  }

  return (
    <>
      <div className="register-container display-flex">
        <div className="register-introduction">
          <h1 className="register-header">Register</h1>
          <p className="register-subHeader">
            Welcome to VocaVista, your ultimate destination for mastering the
            Korean language
          </p>
        </div>
        <div className="register-form">
          <div className="register-form-title">
            <h4>Profile</h4>
            <h2>Create Your Account</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="register-input-container">
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                placeholder="First Name*"
                id="first-name"
                required
              ></input>
              <label htmlFor="first-name">FIRST NAME</label>
            </div>

            <div className="register-input-container">
              <input
                type="text"
                placeholder="Last Name*"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                id="last-name"
                required
              ></input>
              <label htmlFor="last-name">LAST NAME</label>
            </div>

            <div className="register-input-container">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email*"
                id="loginEmail"
                required
              ></input>
              <label htmlFor="loginEmail">EMAIL</label>
            </div>

            <div className="register-input-container">
              <input
                type="email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                placeholder="Confirm Email*"
                id="loginEmail-confirm"
                required
              ></input>
              <label htmlFor="loginEmail-confirm">CONFIRM EMAIL</label>
            </div>

            <div className="register-input-container">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password*"
                id="loginPW"
                required
              ></input>
              <label htmlFor="loginPW">PASSWORD</label>
            </div>

            <div className="register-input-container">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password*"
                id="loginPW-confirm"
                required
              ></input>
              <label htmlFor="loginPW-confirm">CONFIRM PASSWORD</label>
            </div>

            {isEmailSame ? (
              <div className="register-passoword-email-notmatch">
                <p>Emails are not the same!</p>
              </div>
            ) : null}

            {isPasswordSame ? (
              <div className="register-passoword-email-notmatch">
                <p>Passwords are not the same!</p>
              </div>
            ) : null}

            <div className="register-button-container display-flex">
              <div className="register-button-flexbox display-flex">
                <button type="submit">CREATE</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
