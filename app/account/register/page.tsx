import "./page.css";
import RegisterClient from "./RegisterClient";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Register() {
  const cookiesList = cookies();
  const hasCookie = cookiesList.has("token");

  return (
    <>
      {hasCookie ? (
        redirect("/")
      ) : (
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

            <RegisterClient />
          </div>
        </div>
      )}
    </>
  );
}
