import React from 'react';
import ResultDisplay from "./resultDisplay";
import CalculatorForm from "./calculatorForm";

const calculatorDisplay = (props) => {
  return (
    <div className="wrapperStyle">
      <h1 className="titleStyle">Calculator</h1>
      <CalculatorForm 
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
      />
      <ResultDisplay 
        sum={props.sum}
        formula={props.formula}
      />
    </div>
  )
};

export default calculatorDisplay;