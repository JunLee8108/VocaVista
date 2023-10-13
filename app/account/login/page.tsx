import "./page.css";
import LoginForm from "./LoginForm";
import { cookies } from "next/headers";

export default async function Account() {
  const cookiesList = cookies();
  const hasCookie = cookiesList.has("token");

  return (
    <>
      {hasCookie ? (
        <div className="account-container display-flex justify-content-center align-items-center">
          <h1>You already signed in.</h1>
        </div>
      ) : (
        <div className="account-container display-flex justify-content-center align-items-center">
          <div className="account-introduction">
            <h1 className="account-header">Login</h1>
            <p className="account-subHeader">
              It's great to have you back at VocaVista!
            </p>
          </div>

          <div className="account-form">
            <LoginForm />
          </div>
        </div>
      )}
    </>
  );
}
