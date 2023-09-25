import Image from "next/image";
import styles from "./page.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

import "./page.css";

export default function Account() {
  return (
    <>
      <div className="account-container">
        <div className="account-form">
          <form>
            <div className="account-form-flexbox">
              <h1>VocaVista</h1>
            </div>

            <div className="account-form-flexbox">
              <h1>Login</h1>

              <div className="account-input-container">
                <input
                  type="email"
                  required
                  placeholder="Email*"
                  id="login-email"
                ></input>
                <label htmlFor="login-email">EMAIL</label>
              </div>

              <div className="account-input-container">
                <input
                  type="email"
                  required
                  placeholder="Password*"
                  id="login-password"
                ></input>
                <label htmlFor="login-password">PASSWORD</label>
              </div>

              <button type="submit">LOGIN</button>

              <p>
                Forgot Password?{" "}
                <FontAwesomeIcon icon={faKey} style={{ marginLeft: "3px" }} />
              </p>

              <div className="account-boder"></div>

              <p>Register Now to Explore VocaVista</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
