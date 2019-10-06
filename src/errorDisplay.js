import React from "react";

const errorDisplay = (props) => {
  return (
    <div style ={wrapperStyle}>
      <h1 style={titleStyle}>Errors</h1>
      <p style={errorStyle}>{props.errorStatement}</p>
    </div>
  )
};

const titleStyle = { 
  fontFamily: "Arial, Helvetica, sans-serif",
  display: "flex",
  justifyContent: "center"
};

const wrapperStyle = {
  outlineStyle: 'solid',
  width: "40%",
  paddingLeft: "10px",
  marginLeft: "10px",
  minHeight: "150px"
};

const errorStyle = {
  color: 'red',
  fontSize: "1.5em"
};

export default errorDisplay;