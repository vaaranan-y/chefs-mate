import React from "react";
import image from "./4.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Menupage(state) {
  const navigate = useNavigate();

  return (
    <div
      className="Container"
      style={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div style={{ padding: 100, marginLeft: 100 }}>
        <button
          style={{ marginTop: 160 }}
          onClick={(event) => navigate("/cook.js", {})}
          // onClick={(event) => (window.location.href = './cook.js')}
        >
          Cook yourself
        </button>
        <button onClick={(event) => (window.location.href = "./deliver.js")}>
          Home delivery
        </button>
      </div>
    </div>
  );
}
export default Menupage;
