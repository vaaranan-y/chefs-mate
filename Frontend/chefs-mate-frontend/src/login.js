import React from "react";
import food from "./food.jpg";
import "./login.css";
import Logo from "./SimpleLogo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("here2");
    if (userName === "Vaaranan") {
      console.log("HELLO");
      navigate("../main.js");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          height: "100%",
          width: "50%",
          position: "fixed",
          zIndex: "1",
          top: "0",
          left: 0,
        }}
      >
        <img src={food} style={{ height: "100vh" }}></img>
      </div>

      <div
        style={{
          height: "100%",
          width: "50%",
          position: "fixed",
          zIndex: "1",
          top: "0",
          right: 0,
          marginTop: "5%",
        }}
      >
        <img
          src={Logo}
          style={{
            height: "25%",
            borderRadius: "60%",
            backgroundColor: "#43865E",
          }}
        ></img>
        <form>
          <div style={{}}>
            <br />
            <p style={{ margin: "10px" }}>Username:</p>
            <input
              type="text"
              onChange={(e) => {
                e.preventDefault();
                setUserName(e.target.value);
              }}
            />
            <br />
            <p style={{ margin: "10px" }}>Password:</p>
            <input
              type="password"
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
            />
          </div>

          <br />
          <br />
        </form>
        <button onClick={handleLogin}>LOGIN</button>
      </div>

      {/* <div
        style={{
          display: "inline",
          backgroundColor: "red",
          height: "100vh",
        }}
      >
        hello
      </div> */}
      {/* <div>
        
      </div> */}
    </div>
  );
}
export default LoginPage;
