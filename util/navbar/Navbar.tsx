import Link from "next/link";
import { navbarList } from "../data/data";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar-flexbox">
            <h3>
              <Link href="/" className="navbar-link-title">
                VocaVista
              </Link>
            </h3>
            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
          </div>

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
                      <Link href={navbarListLowerCase} className="navbar-link">
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
        </div>
      </nav>
    </>
  );
}
