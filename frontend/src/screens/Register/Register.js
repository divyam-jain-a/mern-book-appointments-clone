import React, { useState } from "react";
import "./Register.css";
import img from "./Add a heading.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const navigate = useNavigate();

  const submitHandlerr = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/users",
        { name, username, email, password },
        config
      );

      setLoading(false);
      console.log(data);
      navigate("/login");
    } catch (error) {
      alert("User Registration Unsuccessful: Check username or email again.");
      setLoading(false);
    }

    setName("");
    setUsername("");
    setEmail("");
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
        <div className="inner-box11">
          <p className="slogan">
            Your mental health is our responsibility and that is a promise.
          </p>
          <p className="powered">
            Powered by <b>Clinicea</b>
          </p>
          <img src={img} alt="" />
        </div>
        <div className="inner-box22">
          <p className="box-heading">Register</p>
          <br />
          <form onSubmit={submitHandlerr}>
            <input
              className="input-box-reg"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
            <input
              className="input-box-reg"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              className="input-box-reg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            <input
              className="input-box-reg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <br />
            <br />
            <br />
            <button className="register-now-btn">Register</button>
          </form>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <p className="contact-msg-r">
            For any other assistance contact: support@clinicea.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
