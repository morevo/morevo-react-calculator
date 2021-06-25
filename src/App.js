import React from "react";
import Calculator from "./Calculator/Main";

function App() {
  let ariphmetics = [
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 0 },
    { id: "." },
  ];

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <Calculator ariphmetics={ariphmetics} />
    </div>
  );
}

export default App;
