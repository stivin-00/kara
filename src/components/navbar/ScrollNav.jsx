import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTwitter } from "react-icons/fa";
import { useContext, useState } from "react";
import "./scrollNav.scss";

const ScrollNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "scroll-navbar scrolled" : "scroll-navbar"}>
      <div
        className={isTrue ? "mobile-overlay overlay-true" : "mobile-overlay"}
      >
        <div className="mobile-container">
          <div className="mobile-row">
            <img
              className="img-big"
              src="https://karafuru.io/_next/static/images/logo_main-light-3e5197f6e4455247e5e7d331ea703b36.png"
              alt="eflix"
            />
            <div>
              <FaBars
                style={{ fontSize: "30" }}
                onClick={() => setIsTrue(false)}
              />
            </div>
          </div>
          <div className="links">
            <Link to="/" className="links">
              <span>3d</span>
            </Link>
            <Link to="/series" className="link">
              <span className="navbarmainLinks">HOME</span>
            </Link>
            <Link to="/movies" className="link">
              <span className="navbarmainLinks">SHOP</span>
            </Link>
            <Link to="/news" className="link">
              <span>NEWS</span>
            </Link>
            <Link to="/watchlater" className="link">
              <span>CLAIM</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="left">
          <img
            className="img-big"
            src="https://karafuru.io/_next/static/images/logo_main-light-3e5197f6e4455247e5e7d331ea703b36.png"
            alt="eflix"
          />
        </div>
        <div className="right">
          <div className="first-right">
            <Link to="/" className="link">
              <span>3d</span>
            </Link>
            <Link to="/series" className="link">
              <span className="navbarmainLinks">HOME</span>
            </Link>
            <Link to="/movies" className="link">
              <span className="navbarmainLinks">SHOP</span>
            </Link>
            <Link to="/news" className="link">
              <span>NEWS</span>
            </Link>
            <Link to="/watchlater" className="link">
              <span>CLAIM</span>
            </Link>
          </div>
          <div className="third-right">
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaTwitter />
            </a>
          </div>
          <div className="second-right">
            <FaBars
              style={{ fontSize: "30" }}
              onClick={() => setIsTrue(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollNav;
