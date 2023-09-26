import Link from "next/link";

import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-flexbox">
            <h3>VocaVista</h3>
            <p>2023 VocaVista | All Rights Reserved</p>
          </div>
          <div className="footer-flexbox">
            <li>HOME</li>
            <li>LEARNING</li>
            <li>COMMUNITY</li>
            <li>HELP & FAQ</li>
            <li>ACCOUNT</li>
          </div>
        </div>
      </footer>
    </>
  );
}
