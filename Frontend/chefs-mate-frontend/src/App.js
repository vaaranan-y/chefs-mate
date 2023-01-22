import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage.js";
import Loginpage from "./login";
import Menupage from "./menu";
import Cookpage from "./cook";
import Deliverpage from "./deliver";
import MainPage from "./main";

function App() {
  let userName = "Vaaranan"; // Hardcoded
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route path="/login.js" element={<Loginpage />}></Route>
        <Route path="/main.js" element={<MainPage />}></Route>
        <Route path="/menu.js" element={<Menupage />}></Route>
        <Route path="/cook.js" element={<Cookpage />}></Route>
        <Route path="/deliver.js" element={<Deliverpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
