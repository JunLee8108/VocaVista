import "./page.css";

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

          <form>
            <div className="forgot-password-input-container">
              <input
                type="email"
                placeholder="Email*"
                id="loginEmail"
                required
              ></input>
              <label htmlFor="loginEmail">EMAIL</label>
            </div>
            <div className="forgot-password-input-container">
              <input
                type="email"
                placeholder="Confirm Email*"
                id="loginEmail-confirm"
                required
              ></input>
              <label htmlFor="loginEmail-confirm">CONFIRM EMAIL</label>
            </div>

            <div className="forgot-password-button-container display-flex">
              <div className="forgot-password-button-flexbox display-flex">
                <button type="submit">SEND</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
