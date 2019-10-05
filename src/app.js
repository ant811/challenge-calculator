import React from "react";
import {calculateSum} from "./calculateSum";
import ResultDisplay from "./resultDisplay";
import CalculationForm from "./calculationForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: '',
      sum: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleChange(event) {
    this.setState({numbers: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let sum = calculateSum(this.state.numbers);
    this.setState({sum});
  }

  render() {
    return (
      <div style ={wrapperStyle}>
        <h1 style={titleStyle}>Calculator</h1>
        <CalculationForm 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <ResultDisplay sum={this.state.sum}/>
      </div>
    )
  }
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

export default App;