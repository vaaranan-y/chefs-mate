import React from "react";
// import "./cook.css"
import image from "./5.png"

function cookpage(){
    return (
        <div className="Container" style={{backgroundImage:`url(${image})`, height:"100vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        </div>

    );
}
export default cookpage;

