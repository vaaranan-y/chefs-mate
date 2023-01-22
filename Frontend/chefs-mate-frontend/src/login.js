import React from "react";
import food from "./food.jpg";
import "./login.css";


function loginpage(){
    return (
      <div className="container" style={{textAlign: 'center' }}>
        <div className="image">
             <img src={food} style={{width:500, height:580, marginRight:700}}></img>
        </div>
      <div>
             <form style={{padding:20}}>
      <label>Enter your full name:
        <input type="text" />
      </label>
      <tr></tr>
      <label>Enter your email:
        <input type="text" />
      </label>
      <tr></tr>
      <label>Enter your password:
        <input type="text" />
      </label>
      <tr></tr>
      <button>
        log in
      </button>
    </form>
    </div>
        </div>

    );
}
export default loginpage;

