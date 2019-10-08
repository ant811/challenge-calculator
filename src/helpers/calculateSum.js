const calculateSum = (numberArr) => {
  let sum = numberArr.reduce( (counter, number) => {
    if(number<= 1000) {
      return counter + number;
    } else {
      return counter;
    }
  }, 0);
  let formula = `${numberArr.join('+')} = ${sum}`;

  return [sum, formula];
};

module.exports.calculateSum = calculateSum;