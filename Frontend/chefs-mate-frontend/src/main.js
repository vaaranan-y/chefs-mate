import React from "react";
import image from "./3.png"


function mainpage(){
    return (
      <div className="Container" style={{backgroundImage:`url(${image})`, height:"100vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <div style={{padding:100, marginLeft:200}}>
             <form style={{padding:40}}>
      <label>Enter your food                
        <input type="text"/>
      </label>
      <tr></tr>
      <label>Enter restrictions
        <input type="text" />
      </label>
      <tr></tr>
      <tr></tr>
      <button>
        Find your healthy replacement!
      </button>
    </form>
    </div>
    </div>

    );
}
export default mainpage;

