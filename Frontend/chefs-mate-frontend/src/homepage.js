import React from "react";
import Logo from "./Chefs Mate.png";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          backgroundColor: "#43865E",
          height: "50%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={Logo}></img>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            console.log("HELLO");
            navigate("./login.js");
          }}
          variant="outline-warning"
        >
          LET'S START
        </Button>
      </div>
    </div>
  );
}
export default Homepage;
