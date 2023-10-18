import "./page.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default async function User() {
  return (
    <>
      <div className="user-container">
        <h1 className="user-header">
          User Account
          <FontAwesomeIcon icon={faUser} style={{ marginLeft: "13px" }} />
        </h1>

        <p className="user-sub-header">
          Your digital hub for profile management
        </p>
      </div>
    </>
  );
}
