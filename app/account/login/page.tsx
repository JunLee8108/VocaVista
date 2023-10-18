import "./page.css";
import LoginForm from "./LoginForm";
import { cookies } from "next/headers";

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
          <LoginForm />
        </div>
      </div>
    </>
  );
}
