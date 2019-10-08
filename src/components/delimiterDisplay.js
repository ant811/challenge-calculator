import React from "react";

const delimiterDisplay = (props) => {
  const delimiters = props.delimiters;
  const delimiterItems = delimiters.map((delimiter) => {
    return <li key={delimiter}>{delimiter}</li>
  });
  return (
    <div className="wrapperStyle">
      <h1 className="titleStyle">Acceptable Delimiters</h1>
      <ul className="listStyle">
        {delimiterItems}    
      </ul>
    </div>
  )
};

export default delimiterDisplay;