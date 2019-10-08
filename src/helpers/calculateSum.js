const calculateSum = (numberArr) => {
  let sum = numberArr.reduce( (counter, number) => {
    if(parseFloat(number) && parseFloat(number) <= 1000) {
      return counter + parseFloat(number);
    } else {
      return counter;
    }
  }, 0);
  return sum;
};

module.exports.calculateSum = calculateSum;