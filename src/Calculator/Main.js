import React, { useState } from "react";

function Calculator(props, concatNums) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (!Number(value)) {
      setValue(value);  // In process...
      props.concatNums(value);
    }
  }

  return (
    <div className="calculator__inner">
      <form className="form" onSubmit={submitHandler}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            value={value}
            className="form__input"
            type="text"
            name="calculator"
            id="enterNumbers"
            placeholder="Enter numbers"
          />
        </span>
        <div className="form__items">
          {props.ariphmetics.map((item, index) => (
            <div className="calculator__button">
              <button
                onClick={() => setValue(item.id)}
                id={index + 1}
                className="calculator__item"
                type="submit"
              >
                {item.id}
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Calculator;
