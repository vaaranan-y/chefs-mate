import React from "react";
import Logo from "./Chefs Mate.png"



function Homepage(){

    const button = {
        backgroundColor: "#FFDE59",
        color: "black",
        padding: "20px 60px",
        paddingTop: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        borderWidth:"0",
        margin: "10px 50px"
    } 
    return (
        <div>
    <div className="homepage" style={{backgroundColor: "#43865E", height: '50%' }}>
        <img src={Logo} style={{width: 500, height: 500, marginLeft:400}}></img>
    </div>
    <div style={{marginLeft:500}}>
    <button onClick={event =>  window.location.href='./login.js'} style={button}>
  Let's start!
</button>
</div>
    </div>
    );
}
export default Homepage;


