import "./page.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

async function getUserInfo() {
  // https://voca-vista.vercel.app/
  // http://localhost:3000/
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let res = await fetch("https://voca-vista.vercel.app/api/validateToken", {
    method: "POST",
    body: JSON.stringify(token),
    // cache: "no-store",
  });

  res = await res.json();

  return res;
}

export default async function User() {
  const cookiesList = cookies();
  const hasCookie = cookiesList.has("token");
  const user = await getUserInfo();

  const redirectPage = () => {
    redirect("/account/login");
  };

  return (
    <>
      {hasCookie && !(user as any).error ? (
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
