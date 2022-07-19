import React from "react";
import "./LandingPage.css";
import img from "./welcome.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="lp-bg">
      <div className="lp-img">
        <img src={img} alt="" />
      </div>
      <div className="lg-btn-grp-box">
        <Link to="/login">
          <button className="lg-btn-grp">Login Here</button>
        </Link>
        <Link to="/register">
          <button className="lg-btn-grp">Register Now</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
