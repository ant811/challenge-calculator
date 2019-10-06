const abstractNumbers = (inputString, delimiters, includesInputDelimiters) => {
  if(includesInputDelimiters) {
    let newlineIndex = inputString.indexOf('n');
    let newInputStr = inputString.slice(newlineIndex + 1);
    const result = newInputStr.split(new RegExp(`[${delimiters.join('|\\')}]`,'g'));
    return result.filter(num=>num!=='');
  } else {
    const result = inputString.split(new RegExp(`[${delimiters.join('|\\')}]`,'g'));
    return result.filter(num=>num!=='');
  }
};

module.exports.abstractNumbers = abstractNumbers;