# challenge-calculator

## Application Setup

1. Clone repository to local machine
2. In a terminal window, navigate to project folder directory
3. Run the following command in the terminal: `npm install`
**RESULT:** npm installs all modules listed as dependencies in package.json
4. Run the following command in the terminal: `npm run start`
**RESULT:** An Express.js server is now running on local port 3000
5. Open an internet browser and go to the address http://localhost:3000/
**RESULT:** Calculator application is available in broswer window and ready for use 

## How to Use Calculator
 - Enter numbers in the *Enter Numbers* field and select operation
**NOTE:**Space between numbers *must* be an acceptable delimiter located under *Acceptable Delimiters*
*Example:* `1,2\n3,4\n5`

### Custom Delimiters
 - To add a single character delimiter, use the following format in the *Enter Numbers* field: `//{delimiter}\n{numbers}`
 *Example:* `//#\n2#5`
 - To add a multiple character delimiter, use the following format in the *Enter Numbers* field: `//[{delimiter}]\n{numbers}`
 *Example:* `//[***]\n11***22***33`
 - To add multiple delimiters of any length, use the following format in the *Enter Numbers* field: `//[{delimiter1}][{delimiter2}]...\n{numbers}`
 *Example:* `//[*][!!][r9r]\n11r9r22*hh*33!!44`

## Defaults
The calculator contains the following default settings:
 - `\n` and `,` are default delimiters
 - The calculator ignores numbers over 1000
 - The calculator flags, and does not process, entries with negative numbers

## Development
### Compile Updated Code
To compile updated code, navigate to project folder directory in a terminal window and run the following command: `npm run webpack`
**RESULT:** 
 - Webpack recompiles /dist/bundle.js, and
 - Continuously checks for, and recompiles, updated code while the terminal window is open

### Test Suites
To run the application's test suites, navigate to project folder directory in a terminal window and run the following command: `npm run test`
**RESULT:** Test results are printed to terminal window