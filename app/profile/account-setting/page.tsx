import "./page.css";
import UserClient from "./UserClient";
import VerifyTokenAndGetUserInfo from "../../../util/helpers/VerifyTokenAndGetUserInfo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default async function User() {
  const userData = await VerifyTokenAndGetUserInfo();

  return (
    <>
      <div className="account-setting-container">
        <h1 className="account-setting-header">
          User Account
          <FontAwesomeIcon icon={faUser} style={{ marginLeft: "13px" }} />
        </h1>

        <p className="account-setting-sub-header">
          Your digital hub for profile management
        </p>

        <div className="account-setting-form">
          <div className="account-setting-form-title">
            <h4>Profile</h4>
            <h2>Modify Your Account</h2>
          </div>

          <UserClient userData={userData} />
        </div>
      </div>
    </>
  );
}
