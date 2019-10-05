import React from "react";

const resultDisplay = (props) => {
  return (
    <div style={resultDisplayStyle}>
      Result is: {props.sum}
    </div>
  )
};

const resultDisplayStyle = {
  paddingBottom: "10px",
  fontSize: "1.5em"
};

export default resultDisplay;