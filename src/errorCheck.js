const errorCheck = (numberArr) => {
  try {
    checkForNegativeNumbers(numberArr);
  }
  catch(error) {
    return error;
  }
};

const checkForNegativeNumbers = (numberArr) => {
  for(let i = 0; i < numberArr.length; i++) {
    if(numberArr[i] < 0) {
      let negatives = [];
      for(let i = 0; i < numberArr.length; i++) {
        if(numberArr[i] < 0) {
          negatives.push(numberArr[i]);
        };
      };
      throw `NOTE: Calculator cannot support negative numbers. Input contains the following negative number(s): ${negatives}`;
      break;  
    };
  };
};

module.exports.errorCheck = errorCheck;