import React from "react";

const errorDisplay = (props) => {
  return (
    <div className="wrapperStyle">
      <h1 className="titleStyle">Errors</h1>
      <p className="errorStyle">{props.errorStatement}</p>
    </div>
  )
};

export default errorDisplay;