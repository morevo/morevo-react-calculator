import React from "react";
import CalcItem from "./CalcItem";

function Calculator(props) {
  return (
    <div className="calculator__inner">
      <form className="form">
        <span style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <input className="form__input" type="text" name="calculator" id="enterNumbers" placeholder="Enter numbers" />
        </span>
        <div className="form__items">
        {props.ariphmetics.map((item, index) => (
          <CalcItem item={item} index={index + 1} key={item.id} />
        ))}
        </div>
      </form>
    </div>
  );
}

export default Calculator;
