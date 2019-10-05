const calculateSum = (numsString) => {
  const numbers = numsString.split(/,|\\n/);
  let sum = numbers.reduce( (counter, number) => {
    if(parseFloat(number)) {
      return counter + parseFloat(number);
    } else {
      return counter;
    }
  }, 0);
  return sum;
}

module.exports.calculateSum = calculateSum;