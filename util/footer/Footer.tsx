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
            <li>Home</li>
            <li>Learning</li>
            <li>Community</li>
            <li>Help & FAQ</li>
            <li>Account</li>
          </div>
        </div>
      </footer>
    </>
  );
}
