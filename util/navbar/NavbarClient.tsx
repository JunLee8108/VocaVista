"use client";

import Link from "next/link";
import { useState, useEffect, MouseEvent } from "react";
import { navbarList } from "../data/data";
import "./Navbar.css";
import LoadingPage from "../helpers/LoadingPage";
import CheckIfUserLogin from "../helpers/\bCheckIfUserLogin";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faSquareXmark,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function NavbarClient() {
  const [isMenuClick, setMenuClick] = useState(false);
  const [isSubmenuClick, setSubmenuClick] = useState(false);
  const [handleMenuClick, setHandleMenuClick] = useState(false);
  const [handleSubmenuClick, setHandleSubmenuClick] = useState(false);
  const [mobileMenuName, setMobileMenuName] = useState("");
  const [mobileMenuNumber, setMobileMenuNumber] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const handleClickMenuBg = (e: MouseEvent<HTMLElement>) => {
    const target = document.querySelector(".navbar-flexbox-mobile-menu-bg");
    if (e.target === target) {
      setHandleMenuClick(false);
    }
  };

  const handleScroll = () => {
    setHandleMenuClick(false);
  };

  const hanldeMobileMenu = (index: number, navbarListLowerCase: string) => {
    setHandleMenuClick(false);
    setHandleSubmenuClick(true);
    setMobileMenuNumber(index);
    setMobileMenuName(navbarListLowerCase);
  };

  const mobilePageTransition = () => {
    let timer = setTimeout(() => {
      setHandleMenuClick(false);
      setHandleSubmenuClick(false);
    }, 200);
  };

  const removeSessionStorage = () => {
    sessionStorage.removeItem("itemsToShow");
  };

  const deleteCookie = async () => {
    let resCookie = await fetch("/api/validateToken", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify("delete"),
    });

    const userData = await resCookie.json();

    if (userData === "Success!") {
      //   setUserLogin(false);
      setLoading(true);
      const timer = setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      alert("Token doesn't exist");
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (handleMenuClick) {
      setMenuClick(true);
    } else {
      timer = setTimeout(() => {
        setMenuClick(false);
      }, 400);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [handleMenuClick]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (handleSubmenuClick) {
      setSubmenuClick(true);
    } else {
      timer = setTimeout(() => {
        setSubmenuClick(false);
      }, 400);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [handleSubmenuClick]);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const login = CheckIfUserLogin();

  //   console.log(login);

  return (
    <>
      <nav className="display-flex justify-content-center">
        <div className="navbar display-flex">
          {/* Navbar flexbox 1 */}
          <div className="navbar-flexbox display-flex justify-content-center align-items-center">
            <h3>
              <Link
                href="/"
                className="navbar-link-title"
                onClick={() => {
                  if (window.innerWidth <= 768) {
                    mobilePageTransition();
                  }
                  removeSessionStorage();
                }}
              >
                VocaVista
              </Link>
            </h3>
            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
          </div>

          {/* Navbar flexbox 2 */}
          <div className="navbar-flexbox display-flex justify-content-center align-items-center">
            {navbarList.map((list, index) => {
              const navbarListLowerCase = list.menu
                .replaceAll(" ", "-")
                .toLocaleLowerCase();

              return (
                <div key={index}>
                  {navbarList[index].menu === "HOME" ? (
                    <li>
                      <Link
                        href="/"
                        className="navbar-link"
                        onClick={removeSessionStorage}
                      >
                        {navbarList[index].menu}
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link
                        href={`/${navbarListLowerCase}/${list.subMenu[0]
                          .replaceAll(" ", "-")
                          .toLocaleLowerCase()}`}
                        className="navbar-link"
                        onClick={() => {
                          removeSessionStorage();
                        }}
                      >
                        {navbarList[index].menu}
                      </Link>

                      <ul className="submenu">
                        {list.subMenu.map((content, subMenuIndex) => {
                          const subMenuListLowerCase = content
                            .replaceAll(" ", "-")
                            .toLocaleLowerCase();
                          return (
                            <li key={subMenuIndex}>
                              <Link
                                href={`/${navbarListLowerCase}/${subMenuListLowerCase}`}
                                className="navbar-link"
                                onClick={removeSessionStorage}
                              >
                                {content}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  )}
                </div>
              );
            })}

            {login.isUserLogin && login.username.firstname ? (
              <li>
                <Link href="/account/user" className="navbar-link">
                  {login.username.firstname}
                </Link>
              </li>
            ) : null}

            {login.isUserLogin ? (
              <li>
                <Link
                  href=""
                  className="navbar-link"
                  onClick={() => {
                    deleteCookie();
                  }}
                  style={{
                    border: "2px solid white",
                    borderRadius: "5px",
                    marginLeft: "-20px",
                    padding: "10px 10px 10px 10px",
                  }}
                >
                  Sign Out
                </Link>
              </li>
            ) : null}

            {login.isUserLogin ? null : (
              <li>
                <Link
                  href="/account/login"
                  className="navbar-link"
                  onClick={removeSessionStorage}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                    className="navbar-account-icon"
                  />
                </Link>
              </li>
            )}
          </div>

          {/* Navbar flexbox mobile */}
          <div className="navbar-flexbox-mobile">
            <button
              className="navbar-flexbox-mobile-menu-bar"
              onClick={() => {
                setHandleMenuClick((current) => !current);
                setHandleSubmenuClick(false);
              }}
            >
              {handleMenuClick || handleSubmenuClick ? (
                handleSubmenuClick ? (
                  <FontAwesomeIcon icon={faCircleArrowLeft} size="xl" />
                ) : (
                  <FontAwesomeIcon icon={faSquareXmark} size="xl" />
                )
              ) : (
                <FontAwesomeIcon icon={faBars} size="xl" />
              )}
            </button>
          </div>

          {isMenuClick ? (
            <div
              className={
                handleMenuClick
                  ? "navbar-flexbox-mobile-menu-bg animated-show-bg"
                  : "navbar-flexbox-mobile-menu-bg animated-hide-bg"
              }
              onClick={(e) => handleClickMenuBg(e)}
            >
              <div
                className={
                  handleMenuClick
                    ? "navbar-flexbox-mobile-menu animated-show"
                    : "navbar-flexbox-mobile-menu animated-hide"
                }
              >
                {navbarList.map((list, index) => {
                  const navbarListLowerCase = list.menu
                    .replaceAll(" ", "-")
                    .toLocaleLowerCase();

                  return (
                    <div key={index}>
                      {list.menu === "HOME" ? (
                        <li>
                          <Link
                            href="/"
                            className="navbar-link-mobile"
                            onClick={() => {
                              mobilePageTransition();
                              removeSessionStorage();
                            }}
                          >
                            {navbarList[index].menu}
                          </Link>
                        </li>
                      ) : (
                        <li
                          onClick={() =>
                            hanldeMobileMenu(index, navbarListLowerCase)
                          }
                        >
                          {list.menu}
                        </li>
                      )}
                    </div>
                  );
                })}
                <li>
                  {login.isUserLogin ? (
                    <Link
                      href="/account/user"
                      className="navbar-link-mobile"
                      onClick={() => {
                        mobilePageTransition();
                        removeSessionStorage();
                      }}
                    >
                      ACCOUNT
                    </Link>
                  ) : (
                    <Link
                      href="/account/login"
                      className="navbar-link-mobile"
                      onClick={() => {
                        mobilePageTransition();
                        removeSessionStorage();
                      }}
                    >
                      ACCOUNT
                    </Link>
                  )}
                </li>

                {login.isUserLogin ? (
                  <li>
                    <Link
                      href=""
                      className="navbar-link-mobile"
                      onClick={() => {
                        deleteCookie();
                      }}
                      style={{
                        border: "2px solid white",
                        borderRadius: "5px",
                        padding: "10px",
                        marginLeft: "-2px",
                      }}
                    >
                      Sign Out
                    </Link>
                  </li>
                ) : null}
              </div>
            </div>
          ) : null}

          {isSubmenuClick ? (
            <div
              className={
                handleSubmenuClick
                  ? "navbar-flexbox-mobile-menu-bg animated-show-bg"
                  : "navbar-flexbox-mobile-menu-bg animated-hide-bg"
              }
              onClick={(e) => handleClickMenuBg(e)}
            >
              <div
                className={
                  handleSubmenuClick
                    ? "navbar-flexbox-mobile-menu animated-show"
                    : "navbar-flexbox-mobile-menu animated-hide"
                }
              >
                {navbarList[mobileMenuNumber].subMenu.map((list, index) => {
                  const navbarListLowerCase = list
                    .replaceAll(" ", "-")
                    .toLocaleLowerCase();
                  return (
                    <li key={index}>
                      <Link
                        href={`/${mobileMenuName}/${navbarListLowerCase}`}
                        className="navbar-link-mobile"
                        onClick={() => {
                          mobilePageTransition();
                          removeSessionStorage();
                        }}
                      >
                        {list.toLocaleUpperCase()}
                      </Link>
                    </li>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </nav>

      {isLoading ? <LoadingPage /> : null}
    </>
  );
}
