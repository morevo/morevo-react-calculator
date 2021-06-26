import React, { useState } from "react";

function Calculator(props, concatChars) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      setValue(value);
      props.concatChars(value);
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
            onChange={() => submitHandler}
            className="form__input"
            type="text"
            name="calculator"
            id="enterNumbers"
            placeholder="Enter numbers"
          />
        </span>
        <div className="form__items">
          {props.ariphmetics.map((item, index) => (
            <div className="calculator__button" key={item.id}>
              <button
                onClick={() => setValue(value + item.id)}
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
