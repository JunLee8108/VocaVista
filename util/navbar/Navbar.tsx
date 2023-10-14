import NavbarClient from "./NavbarClient";
import { cookies } from "next/headers";

async function getUserInfo() {
  // https://voca-vista.vercel.app/
  // http://localhost:3000/
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let res = await fetch("https://voca-vista.vercel.app/api/validateToken", {
    method: "POST",
    body: JSON.stringify(token),
    cache: "no-store",
  });

  res = await res.json();

  return res;
}

export default async function Navbar() {
  const user = await getUserInfo();

  return (
    <>
      <NavbarClient user={user} />
    </>
  );
}
