import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
import "./index.css";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage.js";
import Loginpage from "./login";
import Mainpage from "./main"
import Menupage from "./menu";
import Cookpage from "./cook";
import Deliverpage from "./deliver";
>>>>>>> 34dbf0c (updated UI)

function App() {
  let userName = "Vaaranan"; // Hardcoded
  return (
<<<<<<< HEAD
    <div
      className="App"
      style={{
        backgroundColor: "#FFDE59",
        height: "100vh",
      }}
    >
      <div style={{ padding: "7.5%" }}>
        <header
          style={{
            fontSize: "200%",
            padding: "2.5%",
            fontFamily: "Barlow Condensed",
            fontWeight: "800",
          }}
        >
          Hi {userName}!
        </header>
        <div>
          <div
            style={{
              fontFamily: "Barlow Condensed",
              fontWeight: "400",
              marginBottom: "0.5%",
              fontSize: 20,
            }}
          >
            Please enter your dietary restrictions before moving forward:
          </div>

          <input style={{ marginBottom: "1.5%" }}></input>
        </div>
        <div>
          <div
            style={{
              fontFamily: "Barlow Condensed",
              fontWeight: "400",
              marginBottom: "0.5%",
              fontSize: 20,
            }}
          >
            What are you craving?:
          </div>
          <div
            style={{
              marginBottom: "1.5%",
            }}
          >
            <input></input>
          </div>
        </div>

        <div>
          <div
            style={{
              fontFamily: "Barlow Condensed",
              fontWeight: "400",
              marginBottom: "0.5%",
              fontSize: 20,
            }}
          >
            What is your budget?:
          </div>
          <input style={{ marginBottom: "1.5%" }}></input>
        </div>
        <div>
          <div
            style={{
              fontFamily: "Barlow Condensed",
              fontWeight: "400",
              marginBottom: "0.5%",
              fontSize: 20,
            }}
          >
            Here is a list of possible alternatives. Do any appeal to you?
          </div>
          <input style={{ marginBottom: "1.5%" }}></input>
        </div>
      </div>
    </div>
=======
    <BrowserRouter>
    <Routes>
       <Route exact path="/" element={<Homepage />}></Route>
        <Route path="/login.js" element={<Loginpage/>}></Route>
        <Route path="/main.js" element={<Mainpage/>}></Route>  
        <Route path="/menu.js" element={<Menupage/>}></Route>  
        <Route path="/cook.js" element={<Cookpage/>}></Route>  
        <Route path="/deliver.js" element={<Deliverpage/>}></Route>  
        
    </Routes>
  </BrowserRouter>
>>>>>>> 34dbf0c (updated UI)
  );
}

export default App;
