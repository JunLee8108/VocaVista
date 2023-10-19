"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type userInfoType = {
  email: string;
  firstname: string;
  lastname: string;
};

export default function CheckIfUserLogin() {
  const [isUserLogin, setLogin] = useState(false);
  const [username, setUsername] = useState<userInfoType>({
    email: "",
    firstname: "",
    lastname: "",
  });

  const pathname = usePathname();

  const deleteCookie = async () => {
    let resCookie = await fetch("/api/validateToken", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify("delete"),
    });

    const userData = await resCookie.json();

    if (userData === "Success!") {
      //   setUserLogin(false);
      alert("Token is not valid!");
      const timer = setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      alert("Token doesn't exist");
    }
  };

  useEffect(() => {
    const getCookie = async () => {
      let resCookie = await fetch("/api/validateToken", {
        method: "GET",
        credentials: "include",
      });

      const userData = await resCookie.json();

      if (userData.error === "Token doesn't exist") {
        return;
      }

      if (userData.error === "Not authorized") {
        return deleteCookie();
      }

      let getUserInfo = await fetch("/api/user", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(userData.userId),
      });

      getUserInfo = await getUserInfo.json();

      if ((getUserInfo as any).message === "Success!") {
        setLogin(true);

        setUsername({
          email: (getUserInfo as any).email,
          firstname: (getUserInfo as any).firstname,
          lastname: (getUserInfo as any).lastname,
        });
      }
    };
    getCookie();
  }, [pathname]);

  return { isUserLogin, username };
}
