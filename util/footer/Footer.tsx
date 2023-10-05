import Link from "next/link";

import "./Footer.css";
import { navbarList } from "../data/data";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-flexbox mg-left-right-auto">
            {navbarList.map((content, index) => {
              return (
                <li key={index} className="footer-menu">
                  {content.menu}
                  <ul className="footer-submenu-container">
                    {content.subMenu.map((subMenuContent, subMenuIndex) => {
                      const menuLowerCase = content.menu
                        .replaceAll(" ", "-")
                        .toLocaleLowerCase();
                      const submenuLowerCase = subMenuContent
                        .replaceAll(" ", "-")
                        .toLocaleLowerCase();
                      return (
                        <li className="footer-submenu" key={subMenuIndex}>
                          <Link
                            href={`/${menuLowerCase}/${submenuLowerCase}`}
                            className="footer-link"
                          >
                            {subMenuContent}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
            <li className="footer-menu">
              ACCOUNT
              <ul className="footer-submenu-container">
                <li className="footer-submenu">
                  <Link href="/account/login" className="footer-link">
                    Sign In
                  </Link>
                </li>
              </ul>
            </li>
          </div>

          <div className="footer-flexbox mg-left-right-auto">
            <h3>VocaVista</h3>
            <p>2023 VocaVista | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
