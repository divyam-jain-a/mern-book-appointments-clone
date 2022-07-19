import React, { useState } from "react";
import "./style/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./screens/Register/Register";
import SelectDocType from "./components/SelectDocType";
import LandingPage from "./screens/LandingPage/LandingPage.js";
import Login from "./screens/Login/Login.js";

function App() {
  const [myuser, setMyuser] = useState("");

  const userInfo = (obj) => {
    setMyuser(obj.name);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/login" element={<Login userdata={userInfo} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<SelectDocType userName={myuser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
