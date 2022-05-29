import React from "react";
import "./mobile-overlay.scss";
import { Link } from "react-router-dom";

const MobileOverlay = () => {
  return (
    <div className="mobile-overlay">
      <div className="container">
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
          <Link to="/movies" className="link">
          <span>NEWS</span>
          </Link>
          <Link to="/watchlater" className="link">
            <span>CLAIM</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileOverlay;
