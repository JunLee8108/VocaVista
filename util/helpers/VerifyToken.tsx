import { cookies } from "next/headers";

export default async function VerifyToken() {
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

    return res;
  }
}
