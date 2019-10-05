import React from "react";

const delimiterDisplay = (props) => {
  const delimiters = props.delimiters;
  const delimiterItems = delimiters.map((delimiter) => {
    return <li key={delimiter}>{delimiter}</li>
  });
  return (
    <div style={wrapperStyle}>
      <h1 style={titleStyle}>Acceptable Delimiters</h1>
      <ul style={listStyle}>
        {delimiterItems}    
      </ul>
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

const listStyle = {
  fontSize: "1.5em"
}

export default delimiterDisplay;