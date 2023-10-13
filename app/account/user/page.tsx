import "./page.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function User() {
  const cookiesList = cookies();
  const hasCookie = cookiesList.has("token");

  const redirectPage = () => {
    redirect("/account/login");
  };

  return (
    <>
      {hasCookie ? (
        <div className="user-container">
          <h1 className="user-header">
            User Account
            <FontAwesomeIcon icon={faUser} style={{ marginLeft: "13px" }} />
          </h1>

          <p className="user-sub-header">
            Your digital hub for profile management
          </p>
        </div>
      ) : (
        redirectPage()
      )}
    </>
  );
}
