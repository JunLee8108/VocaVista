import Link from "next/link";

import "./page.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faComment, faUser } from "@fortawesome/free-solid-svg-icons";

export default async function Account() {
  return (
    <>
      <div className="account-container display-flex justify-content-center align-items-center">
        <div className="account-introduction">
          <h1 className="account-header">Login</h1>
          <p className="account-subHeader">
            It's great to have you back at VocaVista!
          </p>
        </div>

        <div className="account-form">
          <form className="display-flex">
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
                  required
                  placeholder="Email*"
                  id="login-email"
                ></input>
                <label htmlFor="login-email">EMAIL</label>
              </div>

              <div className="account-input-container display-flex justify-content-center">
                <input
                  type="password"
                  required
                  placeholder="Password*"
                  id="login-password"
                ></input>
                <label htmlFor="login-password">PASSWORD</label>
              </div>

              <button type="submit">LOGIN</button>

              <p>
                <Link href="/account/forgot-password" className="account-link">
                  <FontAwesomeIcon
                    icon={faKey}
                    style={{ marginRight: "3px" }}
                  />
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
        </div>
      </div>
    </>
  );
}
