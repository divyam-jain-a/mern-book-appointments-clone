import React, { useState } from "react";
import img from "./Add a heading.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ userdata }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/users/login",
        { username, password },
        config
      );
      setLoading(false);
      navigate("/homepage");
      userdata(data);
    } catch (error) {
      alert("Login failed: Invalid username or password");
      setLoading(false);
      console.log(error);
    }

    setUsername("");
    setPassword("");
  };

  return (
    <>
      {loading && (
        <div className="loader">
          <div className="loader-box">
            <div className="loader-ring"></div>
          </div>
        </div>
      )}
      <div className="outer-box">
        <div className="inner-box1">
          <p className="slogan">
            Your mental health is our responsibility and that is a promise.
          </p>
          <p className="powered">
            Powered by <b>Clinicea</b>
          </p>
          <img src={img} alt="" />
        </div>
        <div className="inner-box22">
          <p className="box-heading">Login</p>
          <br />
          <form onSubmit={submitHandler} action="">
            <input
              className="input-box"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
            />
            <br />
            <input
              className="input-box"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <br />
            <br />
            <p className="checkbox-input">
              <input type="checkbox" /> Remember Me
            </p>
            <br />
            <br />
            <button className="sign-in-btn">Login</button>
          </form>
          <Link to="/register">
            <button className="register-btn">Register</button>
          </Link>
          <p className="contact-msg">
            For any other assistance contact: support@clinicea.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
