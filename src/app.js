import React from "react";
import {calculateSum} from "./calculateSum";
import Calculator from "./calculator";
import DelimiterDisplay from "./delimiterDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: '',
      sum: '',
      delimiters: [',', '\\n']
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
      <div>
        <Calculator 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          sum = {this.state.sum}
        />
        <DelimiterDisplay 
          delimiters = {this.state.delimiters}
        />
      </div>
    )
  }
};

export default App;