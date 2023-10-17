import "./page.css";
import LoginForm from "./LoginForm";
import { cookies } from "next/headers";

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

export default async function Account() {
  const cookiesList = cookies();
  const hasCookie = cookiesList.has("token");
  const user = await getUserInfo();

  return (
    <>
      {hasCookie || !(user as any).error ? (
        <div className="account-container display-flex justify-content-center align-items-center">
          <h1>Unusual Access!</h1>
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
