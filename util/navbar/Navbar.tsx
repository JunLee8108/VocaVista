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
              const navbarListLowerCase = navbarList[index].toLocaleLowerCase();
              return (
                <div key={index}>
                  {navbarList[index] === "HOME" ? (
                    <li>
                      <Link href="/" className="navbar-link">
                        {navbarList[index]}
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link href={navbarListLowerCase} className="navbar-link">
                        {navbarList[index]}
                      </Link>
                    </li>
                  )}
                </div>
              );
            })}

            <li>
              <Link href="/account" className="navbar-link">
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
