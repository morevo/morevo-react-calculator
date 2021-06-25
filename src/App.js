import React from "react";
import Calculator from "./Calculator/Main";

function App() {
  const [ariphmetics, setAriphmetics] = React.useState([
    { id: "C" },
    { id: "<" },
    { id: "x" },
    { id: "*" },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: "-" },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: "+" },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 0 },
    { id: "." },
    { id: "=" },
  ]);

  function sliceNumbers(value) {}

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <Calculator ariphmetics={ariphmetics} concatNums={sliceNumbers} />
    </div>
  );
}

export default App;
