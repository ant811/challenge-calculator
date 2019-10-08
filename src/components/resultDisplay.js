import React from "react";

const resultDisplay = (props) => {
  return (
    <div className="resultDisplayStyle">
      Result is: {props.sum}
    </div>
  )
};

export default resultDisplay;