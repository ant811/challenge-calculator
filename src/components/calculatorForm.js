import React from 'react';

const calculatorForm = (props) => {
  return (
    <form className="calculatorFormStyle" onSubmit={props.handleSubmit}>
      <label>
        Enter Numbers:
        <input className="inputStyle" type="text" onChange={props.handleChange} />
      </label>
      <div className="operationsStyle">
        <p className="inputStyle">Choose Operation:</p>
        <input className="buttonStyle" type="submit" value="Add" />
      </div>
    </form>
  )
};

export default calculatorForm;

