const {calculateSum} = require('../src/calculateSum');
const {errorCheck} = require('../src/errorCheck');
const assert = require('assert');
const {abstractNumbers} = require('../src/abstractNumbers');
const {checkInputDelimiters} = require('../src/checkInputDelimiters');

describe('Sum Calculations', function() {
  let defaultDelimiters = [',', '\\n'];
  describe('Step 1: Support a maximum of 2 numbers using a comma delimiter', function() {
    it('should return 8 when the imput is \'1,7\'', function() {
      let numbers = abstractNumbers('1,7', defaultDelimiters, false);
      let sum = calculateSum(numbers);
      assert.equal(sum, 8);
    });
    it('should return the input when the input is only one number', function() {
      let numbers = abstractNumbers('30', defaultDelimiters, false);
      let sum = calculateSum(numbers);
      assert.equal(sum,30);
    });
    it('should only calculate sum of two numbers when the input includes: \n -one delimiter, and \n -three numbers', function() {
      let numbers = abstractNumbers('2,2 2', defaultDelimiters, false);
      let sum = calculateSum(numbers);
      assert.equal(sum, 4);
    });
    it('should convert missing or invalid numbers to zero', function() {
      let numbers1 = abstractNumbers('78,tytyt', defaultDelimiters, false);
      let sum1 = calculateSum(numbers1);
      assert.equal(sum1, 78);
      let numbers2 = abstractNumbers('', defaultDelimiters, false);
      let sum2 = calculateSum(numbers2);
      assert.equal(sum2, 0);
    });
  });
  describe('Step 2: Support an unlimited number of numbers', function() {
    it('should support an unlimited number of numbers', function() {
      let numbers1 = abstractNumbers('1,2,3,4,5,6,7,8,9,10,11,12', defaultDelimiters, false);
      let sum1 = calculateSum(numbers1);
      assert.equal(sum1, 78);
      const zeroThurOneThousand = [];
      for(let i = 0; i <= 1000; i++) {
        zeroThurOneThousand.push(i);
      };
      let numbers2 = abstractNumbers(zeroThurOneThousand.join(','), defaultDelimiters, false);
      let sum2 = calculateSum(numbers2);
      assert.equal(sum2, 500500);
    });
  });
  describe('Step 3: Support a newline character as an alternative delimiter', function() {
    it('should support a newline character as an alternative delimiter', function() {
      let numbers1 = abstractNumbers('5\\n7', defaultDelimiters, false);
      let sum1 = calculateSum(numbers1);
      assert.equal(sum1, 12);
      let numbers2 = abstractNumbers('5\\n56,9\\n789,67', defaultDelimiters, false);
      let sum2 = calculateSum(numbers2);
      assert.equal(sum2, 926);
      let numbers3 = abstractNumbers('78\\ntryh\\n6', defaultDelimiters, false);
      let sum3 = calculateSum(numbers3);
      assert.equal(sum3, 84);
    });
  });
  describe('Step 4: Deny negative numbers. An exception should be thrown that includes all of the negative numbers provided', function() {
    it('should not throw exception when no negative numbers provided', function() {
      let numbers = abstractNumbers('1,2,3,4', defaultDelimiters, false);
      let errorStatement = errorCheck(numbers);
      assert.equal(errorStatement, undefined);
    });
    it('should throw exception that includes all of the negative numbers provided', function() {
      let numbers = abstractNumbers('-1,2\\n3,-4,5,-6', defaultDelimiters, false);
      let errorStatement = errorCheck(numbers);
      let containsAllNegative = ['-1','-4','-6'].reduce((found, number) => {
        return found && errorStatement.includes(number);
      }, true);
      assert.equal(containsAllNegative, true);
    });
  });
  describe('Step 5: Ignore any number greater than 1000', function() {
    it('should ignore any number greater than 1000', function() {
      let numbers = abstractNumbers('2000\\n5\\n7,1090', defaultDelimiters, false);
      let sum = calculateSum(numbers);
      assert.equal(sum, 12);
    });
  });
  describe('Step 6: Support 1 custom delimiter of a single character using the format: //{delimiter}\\n{numbers}', function() {
    it('should support 1 customer delimiter of a single character', function() {
      let newDelimiter1 = checkInputDelimiters('//#\\n2#5');
      let allDelimiters = defaultDelimiters.concat(newDelimiter1);
      let numbers1 = abstractNumbers('//#\\n2#5', allDelimiters, true);
      let sum1 = calculateSum(numbers1);
      assert.equal(sum1, 7);
      let newDelimiter2 = checkInputDelimiters('//,\\n2,ff,100');
      allDelimiters = allDelimiters.concat(newDelimiter2);
      let numbers2 = abstractNumbers('//,\\n2,ff,100', allDelimiters, true);
      let sum2 = calculateSum(numbers2);
      assert.equal(sum2, 102);
      let newDelimiter3 = checkInputDelimiters('//*\\n60\\n7,89*9*t789y#8');
      allDelimiters = allDelimiters.concat(newDelimiter3);
      let numbers3 = abstractNumbers('//*\\n60\\n7,89*9*t789y#8', allDelimiters, true);
      let sum3 = calculateSum(numbers3);
      assert.equal(sum3, 173);
    });
  });
  describe('Step 7: Support 1 custom delimiter of any length using the format: //[{delimiter}]\\n{numbers}', function() {
    it('should support 1 custom delimiter of any length', function() {
      let input1 = '//[***]\\n11***22***33';
      let newDelimiter1 = checkInputDelimiters(input1);
      let allDelimiters = defaultDelimiters.concat(newDelimiter1);
      let numbers1 = abstractNumbers(input1, allDelimiters, true);
      let sum1 = calculateSum(numbers1);
      assert.equal(sum1, 66);
      let input2 = '//[^f&)]\\n11^f&)22,33\\n33';
      let newDelimiter2 = checkInputDelimiters(input2);
      allDelimiters = allDelimiters.concat(newDelimiter2);
      let numbers2 = abstractNumbers(input2, allDelimiters, true);
      let sum2 = calculateSum(numbers2);
      assert.equal(sum2, 99);
    });
  }); 
  describe('Step 8: Support multiple delimiters of any length using the format: //[{delimiter1}][{delimiter2}]...\\n{numbers}', function() {
    it('should support multiple delimiters of any length', function() {
      let input1 = '//[*][!!][r9r]\\n11r9r22*hh*33!!44';
      let newDelimiter1 = checkInputDelimiters(input1);
      let allDelimiters = defaultDelimiters.concat(newDelimiter1);
      let numbers1 = abstractNumbers(input1, allDelimiters, true);
      let sum1 = calculateSum(numbers1);
      assert.equal(sum1, 110);
      let input2 = '//[&yh&)][%$%][^]\\n11&yh&22%$%33\\n33^600';
      let newDelimiter2 = checkInputDelimiters(input2);
      allDelimiters = allDelimiters.concat(newDelimiter2);
      let numbers2 = abstractNumbers(input2, allDelimiters, true);
      let sum2 = calculateSum(numbers2);
      assert.equal(sum2, 699);
    });
  }); 
});
