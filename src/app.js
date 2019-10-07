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
  }
  
  handleChange(event) {
    this.setState({input: event.target.value});
  }
 
  handleSubmit(event) {
    event.preventDefault();
    this.setState({errorStatement: ''});

    let allDelimiters = this.state.delimiters;
    let inputDelimiters = checkInputDelimiters(this.state.input) || [];
    let newDelimiters = inputDelimiters.filter((delim)=>!allDelimiters.includes(delim));
    
    if(inputDelimiters.length > 0 && newDelimiters.length > 0) {
      allDelimiters = allDelimiters.concat(newDelimiters);
      this.setState({
        delimiters: allDelimiters
      }, () => {
        const numbers = abstractNumbers(this.state.input, this.state.delimiters, true);
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
      });
    } else {
      const numbers = abstractNumbers(this.state.input, this.state.delimiters, inputDelimiters.length > 0 ? true : false);
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