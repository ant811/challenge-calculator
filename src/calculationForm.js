import React from 'react';

const calculationForm = (props) => {
  return (
    <form style ={calculationFormStyle} onSubmit={props.handleSubmit}>
      <label>
        Enter Numbers:
        <input style ={inputStyle} type="text" onChange={props.handleChange} />
      </label>
      <div style={operationsStyle}>
        <p style ={inputStyle}>Choose Operation:</p>
        <input style ={buttonStyle} type="submit" value="Add" />
      </div>
    </form>
  )
};

const calculationFormStyle = {
  fontSize: "1.5em"
};

const inputStyle = {
  fontSize: "1em"
};

const buttonStyle = {
  fontSize: ".7em"
};

const operationsStyle = {
  display: "flex",
  alignItems: "center"
};

export default calculationForm;