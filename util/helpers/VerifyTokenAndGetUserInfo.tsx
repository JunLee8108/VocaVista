import { cookies } from "next/headers";

export default async function VerifyTokenAndGetUserInfo() {
  // https://voca-vista.vercel.app/
  // http://localhost:3000/
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (token && token.value) {
    let res = await fetch("https://voca-vista.vercel.app/api/validateToken", {
      method: "GET",
      headers: {
        Authorization: token.value,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    res = await res.json();

    let getUserInfo = await fetch("https://voca-vista.vercel.app/api/user", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify((res as any).userId),
    });

    getUserInfo = await getUserInfo.json();

    return getUserInfo;
    // (getUserInfo as any).email;
  }
}
