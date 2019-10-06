import React from "react";
import {calculateSum} from "./calculateSum";
import Calculator from "./calculator";
import DelimiterDisplay from "./delimiterDisplay";
import ErrorDisplay from "./errorDisplay";
import {errorCheck} from "./errorCheck";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: '',
      sum: '',
      delimiters: [',', '\\n'],
      errorStatement: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleChange(event) {
    this.setState({numbers: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({errorStatement: ''});
    let errorStatement = errorCheck(this.state.numbers);
    if(errorStatement) {
      this.setState({
        errorStatement: errorStatement,
        sum: ''
      });
    } else {
      let sum = calculateSum(this.state.numbers);
      this.setState({sum});
    }
  }

  render() {
    return (
      <div>
        <Calculator 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          sum={this.state.sum}
        />
        <DelimiterDisplay 
          delimiters={this.state.delimiters}
        />
        <ErrorDisplay 
          error={this.state.error}
          errorStatement={this.state.errorStatement}
        />
      </div>
    )
  }
};

export default App;