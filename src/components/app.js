import React from "react";
import CalculatorDislay from "./calculatorDisplay";
import DelimiterDisplay from "./delimiterDisplay";
import ErrorDisplay from "./errorDisplay";
import {abstractNumbers} from "../helpers/abstractNumbers";
import {calculateSum} from "../helpers/calculateSum";
import {checkInputDelimiters} from "../helpers/checkInputDelimiters";
import {errorCheck} from "../helpers/errorCheck";
import '../style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: '',
      input: '',
      sum: '',
      delimiters: [',', '\\n'],
      errorStatement: '',
      formula: ''
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
          sum: '',
          formula: ''
        });
      } else {
        let [sum, formula] = calculateSum(this.state.numbers);
        this.setState(
          {sum, formula});
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
        <CalculatorDislay
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          sum={this.state.sum}
          formula={this.state.formula}
        />
        <DelimiterDisplay
          delimiters={this.state.delimiters}
        />
        <ErrorDisplay
          errorStatement={this.state.errorStatement}
        />
      </div>
    )
  }
};
 
export default App;