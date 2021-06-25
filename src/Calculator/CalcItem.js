import React from "react";

function CalcItem({item, index}) {
    return (
        <div className="calculator__button">
        <button id={index} className="calculator__item" type="submit">{item.id}</button>
        </div>
    );

}

export default CalcItem;