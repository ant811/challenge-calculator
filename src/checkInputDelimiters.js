const checkInputDelimiters = (inputStr) => {
  if(inputStr[0]==='/' && inputStr[1] === '/') {
    return newDelimiters(inputStr);
  }
};

const newDelimiters = (inputStr) => {
  let newDelimiter = inputStr[2];
  return newDelimiter;
};

module.exports.checkInputDelimiters = checkInputDelimiters;