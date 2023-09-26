import Link from "next/link";

import "./page.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faComment } from "@fortawesome/free-solid-svg-icons";

export default async function Account() {
  return (
    <>
      <div className="account-container">
        <div className="account-form">
          <form>
            <div className="account-form-flexbox">
              <h1>
                VocaVista <FontAwesomeIcon icon={faComment} />
              </h1>
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
