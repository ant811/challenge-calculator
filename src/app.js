import React from "react";
import {calculateSum} from "./calculateSum";
import Calculator from "./calculator";
import DelimiterDisplay from "./delimiterDisplay";
import ErrorDisplay from "./errorDisplay";
import {errorCheck} from "./errorCheck";
import {checkInputDelimiters} from "./checkInputDelimiters";
import {abstractNumbers} from "./abstractNumbers"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: '',
      input: '',
      sum: '',
      delimiters: [',', '\\n'],
      errorStatement: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.processNumbers = this.processNumbers.bind(this);
    this.abstractDelimiters = this.abstractDelimiters.bind(this);
  }
  
  abstractDelimiters() {
    const currentDelimiters = this.state.delimiters;
    const userSubmittedDelimiters = checkInputDelimiters(this.state.input);
    const newDelimiters = userSubmittedDelimiters.filter((delimiter)=>!currentDelimiters.includes(delimiter));
    return [currentDelimiters, userSubmittedDelimiters, newDelimiters]
  }

  processNumbers(didUserSubmitDelimiters) {
    const numbers = abstractNumbers(this.state.input, this.state.delimiters, didUserSubmitDelimiters);
    this.setState({
      numbers: numbers
    }, () => {
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
    });
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }
 
  handleSubmit(event) {
    event.preventDefault();
    this.setState({errorStatement: ''});
    
    let [currentDelimiters, userSubmittedDelimiters, newDelimiters] = this.abstractDelimiters();

    if(userSubmittedDelimiters.length > 0 && newDelimiters.length > 0) {
      currentDelimiters = currentDelimiters.concat(newDelimiters);
      this.setState({
        delimiters: currentDelimiters
      }, () => {
        this.processNumbers(true);
      });
    } else {
      this.processNumbers(userSubmittedDelimiters.length > 0 ? true : false);
    };
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