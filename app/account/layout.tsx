import { cookies } from "next/headers";

async function getUserInfo() {
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

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserInfo();
  const cookiesList = cookies();
  const hasCookie = cookiesList.has("token");

  const isError = () => {
    if (user) {
      if ((user as any).error) {
        return false;
      } else {
        return true;
      }
    }
  };

  return (
    <>
      {isError() || hasCookie ? (
        <h1>Invalid Access!</h1>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
