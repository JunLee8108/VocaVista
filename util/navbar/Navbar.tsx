"use client";

import Link from "next/link";
import { useState, useEffect, useRef, MouseEvent } from "react";
import { navbarList } from "../data/data";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { faComment, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuClick, setMenuClick] = useState(false);
  const [handleMenuClick, setHandleMenuClick] = useState(false);
  const isFirstMount = useRef(true);

  const handleClickMenuBg = (e: MouseEvent<HTMLElement>) => {
    const target = document.querySelector(".navbar-flexbox-mobile-menu-bg");
    if (e.target === target) {
      setHandleMenuClick(false);
    }
  };

  const handleScroll = () => {
    setHandleMenuClick(false);
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
    if (!isFirstMount.current && window.innerWidth <= 768) {
      window.addEventListener("scroll", handleScroll);
    }

    if (isFirstMount.current) {
      isFirstMount.current = false;
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="navbar">
          {/* Navbar flexbox 1 */}
          <div className="navbar-flexbox">
            <h3>
              <Link href="/" className="navbar-link-title">
                VocaVista
              </Link>
            </h3>
            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
          </div>

          {/* Navbar flexbox 2 */}
          <div className="navbar-flexbox">
            {navbarList.map((list, index) => {
              const navbarListLowerCase =
                navbarList[index].menu.toLocaleLowerCase();
              return (
                <div key={index}>
                  {navbarList[index].menu === "HOME" ? (
                    <li>
                      <Link href="/" className="navbar-link">
                        {navbarList[index].menu}
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link
                        href={`/${navbarListLowerCase}/${navbarList[
                          index
                        ].subMenu[0].toLocaleLowerCase()}`}
                        className="navbar-link"
                      >
                        {navbarList[index].menu}
                      </Link>
                      <ul className="submenu">
                        {navbarList[index].subMenu.map(
                          (content, subMenuIndex) => {
                            const subMenuListLowerCase =
                              navbarList[index].subMenu[
                                subMenuIndex
                              ].toLocaleLowerCase();
                            return (
                              <li key={subMenuIndex}>
                                <Link
                                  href={`/${navbarListLowerCase}/${subMenuListLowerCase}`}
                                  className="navbar-link"
                                >
                                  {navbarList[index].subMenu[subMenuIndex]}
                                </Link>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </li>
                  )}
                </div>
              );
            })}

            <li>
              <Link href="/account/login" className="navbar-link">
                <FontAwesomeIcon
                  icon={faUser}
                  size="lg"
                  className="navbar-account-icon"
                />
              </Link>
            </li>
          </div>

          {/* Navbar flexbox mobile */}
          <div className="navbar-flexbox-mobile">
            <button
              className="navbar-flexbox-mobile-menu-bar"
              onClick={() => {
                setHandleMenuClick((current) => !current);
              }}
            >
              {handleMenuClick ? (
                <FontAwesomeIcon icon={faSquareXmark} size="xl" />
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
                  const navbarListLowerCase =
                    navbarList[index].menu.toLocaleLowerCase();
                  return (
                    <div key={index}>
                      {navbarList[index].menu === "HOME" ? (
                        <li>
                          <Link
                            href="/"
                            className="navbar-link"
                            onClick={() => setHandleMenuClick(false)}
                          >
                            {navbarList[index].menu}
                          </Link>
                        </li>
                      ) : (
                        <li>
                          <Link
                            href={`/${navbarListLowerCase}/${navbarList[
                              index
                            ].subMenu[0].toLocaleLowerCase()}`}
                            className="navbar-link"
                            onClick={() => setHandleMenuClick(false)}
                          >
                            {navbarList[index].menu}
                          </Link>
                        </li>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
}
