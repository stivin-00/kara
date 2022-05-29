import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="footer-left">
            <h2>© 2022 Karafuru. All rights reserved.</h2>
          </div>
          <div className="footer-right">
            <img
              src="https://karafuru.io/_next/static/images/logo_all-white-83ffce644ac302e6c92bbe2e84d3d2ce.png"
              alt=""
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
