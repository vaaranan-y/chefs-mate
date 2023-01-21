import logo from "./logo.svg";
import "./App.css";

function App() {
  let userName = "Vaaranan"; // Hardcoded
  return (
    <div className="App">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        Welcome {userName}
      </header>
      <div>Please enter your dietary restrictions before moving forward:</div>
      <input></input>
      <div>What are you craving?:</div>
      <input></input>
      <div>What is your budget?:</div>
      <input></input>
    </div>
  );
}

export default App;
