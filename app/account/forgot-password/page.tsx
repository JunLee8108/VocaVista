import "./page.css";
import ForgotPasswordClient from "./ForgotPasswordClient";

export default function ForgotPassword() {
  return (
    <>
      <div className="forgot-password-container display-flex mg-left-right-auto">
        <div className="forgot-password-introduction">
          <h1 className="forgot-password-header">Forgot Password</h1>

          <p className="forgot-password-subHeader">
            We will send you an email to update your password.
          </p>
        </div>
        <div className="forgot-password-form display-flex align-items-center">
          <div className="forgot-password-form-title">
            <h2>Reset Your Password</h2>
          </div>

          <ForgotPasswordClient />
        </div>
      </div>
    </>
  );
}
