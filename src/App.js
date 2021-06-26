import React, { useState } from "react";
import Calculator from "./Calculator/Main";

function App() {
  const [ariphmetics, setAriphmetics] = useState([
    { id: "C" },
    { id: "<" },
    { id: "/" },
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
  const [clearInput, setClearInput] = useState("");
  /* For Minus */  // In process... + need append useContext for actions 
  // let calcNumbersMinus = (value) => {  // Will make clearState for other operators(-,+...)
  //   if (value.includes("-")) {
  //     let newArrMinus = [...value].join("").split("-");
  //     let resultMinus = newArrMinus
  //       .filter((item) => Number(item))
  //       .reduce((acc, item) => -acc - +item, 0);
  //     console.log(+resultMinus);
  //   }
  // };

  /* For Plus */
  // let calcNumbersPlus = (value) => {
  //   if (value.includes("+")) {
  //     let newArrPlus = [...value].join("").split("+");
  //     let resultPlus = newArrPlus
  //       .filter((item) => Number(item))
  //       .reduce((acc, item) => +acc + +item, 0);
  //     console.log(resultPlus);
  //   }
  // };

  /* For Multiply */
  let calcNumbersMultiply = (value) => {
    if (value.includes("*")) {
      let newArrMultiply = [...value].join("").split("*");
      let resultMultiply = newArrMultiply
        .filter((item) => Number(item))
        .reduce((acc, item) => +acc * +item);
      console.log(resultMultiply);
    }
  };

    /* For Divide */
  //   let calcNumbersDivide = (value) => {
  //   if (value.includes("/")) {
  //     let newArrDivide = [...value].join("").split("/");
  //     let resultDivide = newArrDivide
  //       .filter((item) => Number(item))
  //       .reduce((acc, item) => +(acc) / +(item));
  //     console.log(resultDivide);
  //   }
  // };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <Calculator ariphmetics={ariphmetics} concatChars={calcNumbersPlus, calcNumbersMultiply, calcNumbersMinus, calcNumbersDivide } />
    </div>
  );
}

export default App;
