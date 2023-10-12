import "./LoadingBeforeLogin.css";
import Link from "next/link";

export default function LoadingBeforeLogin() {
  return (
    <>
      <div className="loading-before-container">
        <h1>Please Sign In First to Use VocaVista.</h1>

        <Link href="/account/login">
          <button>SIGN IN</button>
        </Link>
      </div>
    </>
  );
}
