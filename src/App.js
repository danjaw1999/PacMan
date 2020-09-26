import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <Header score={score} />
      {/* <Board /> */}
    </div>
  );
}

export default App;
