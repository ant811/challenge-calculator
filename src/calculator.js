import React from 'react';
import ResultDisplay from "./resultDisplay";
import CalculatorForm from "./calculatorForm";

const calculator = (props) => {
  return (
    <div style ={wrapperStyle}>
      <h1 style={titleStyle}>Calculator</h1>
      <CalculatorForm 
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
      />
      <ResultDisplay sum={props.sum}/>
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
  marginLeft: "10px"
};

export default calculator;