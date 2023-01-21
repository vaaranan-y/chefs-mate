import logo from "./logo.svg";
import "./App.css";
import "./index.css";

function App() {
  let userName = "Vaaranan"; // Hardcoded
  return (
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
  );
}

export default App;
