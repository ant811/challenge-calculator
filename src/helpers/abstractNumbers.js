const abstractNumbers = (inputString, delimiters, didUserSubmitDelimiters) => {
  let result;
  if(didUserSubmitDelimiters) {
    let newlineIndex = inputString.indexOf('n');
    result = inputString.slice(newlineIndex + 1);
  } else {
    result = inputString;
  }
  let delimitersCopy = delimiters.slice();
  while(delimitersCopy.length !== 0) {
    let delimiter = delimitersCopy.pop();
    result = result.split(delimiter).join(',')
  }
  result = result.split(',').map(element=> {
    if(parseFloat(element) && parseFloat(element) <= 1000) {
      return parseFloat(element);
    } else {
      return 0;
    }
  });
  return result;
};

module.exports.abstractNumbers = abstractNumbers;