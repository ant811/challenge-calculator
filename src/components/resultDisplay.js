import React from "react";

const resultDisplay = (props) => {
  return (
    <div className="resultDisplayStyle">
      Result is: {props.sum} <br></br>
      Formula is: {props.formula}
    </div>
  )
};

export default resultDisplay;