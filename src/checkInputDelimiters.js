const checkInputDelimiters = (inputStr) => {
  if(inputStr[0]==='/' && inputStr[1] === '/') {
    return newDelimiters(inputStr);
  } else {
    return [];
  }
};

const newDelimiters = (inputStr) => {
  if(inputStr.indexOf('[') === 2) {
    let newLineIndex = inputStr.indexOf('n');
    let newDelimiterInput = inputStr.slice(3, newLineIndex - 2);
    let newDelimiters = newDelimiterInput.split('][');
    return newDelimiters;
  } else {
    let newDelimiter = inputStr[2];
    return [newDelimiter];
  }
};

module.exports.checkInputDelimiters = checkInputDelimiters;