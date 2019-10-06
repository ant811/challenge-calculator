const calculateSum = (numbers) => {
  const numberArr = numbers.split(/,|\\n/);
  let sum = numberArr.reduce( (counter, number) => {
    if(parseFloat(number)) {
      return counter + parseFloat(number);
    } else {
      return counter;
    }
  }, 0);
  return sum;
};

module.exports.calculateSum = calculateSum;