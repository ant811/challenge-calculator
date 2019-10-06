const {calculateSum} = require('../src/calculateSum');
const {errorCheck} = require('../src/errorCheck');
const assert = require('assert');

describe('Sum Calculations', function() {
  describe('Step 1: Support a maximum of 2 numbers using a comma delimiter', function() {
    it('should return 8 when the imput is \'1,7\'', function() {
      let sum = calculateSum('1,7');
      assert.equal(sum, 8);
    });
    it('should return the input when the input is only one number', function() {
      let sum = calculateSum('30');
      assert.equal(sum,30);
    });
    it('should only calculate sum of two numbers when the input includes: \n -one delimiter, and \n -three numbers', function() {
      let sum = calculateSum('2,2 2');
      assert.equal(sum, 4);
    });
    it('should convert missing or invalid numbers to zero', function() {
      let sum1 = calculateSum('78,tytyt');
      assert.equal(sum1, 78);
      let sum2 = calculateSum('');
      assert.equal(sum2, 0);
    });
  });
  describe('Step 2: Support an unlimited number of numbers', function() {
    it('should support an unlimited number of numbers', function() {
      let sum1 = calculateSum('1,2,3,4,5,6,7,8,9,10,11,12');
      assert.equal(sum1, 78);
      const zeroThurOneThousand = [];
      for(let i = 0; i <= 1000; i++) {
        zeroThurOneThousand.push(i);
      };
      let sum2 = calculateSum(zeroThurOneThousand.join(','));
      assert.equal(sum2, 500500);
    });
  });
  describe('Step 3: Support a newline character as an alternative delimiter', function() {
    it('should support a newline character as an alternative delimiter', function() {
      let sum1 = calculateSum('5\\n7');
      assert.equal(sum1, 12);
      let sum2 = calculateSum('5\\n56,9\\n789,67');
      assert.equal(sum2, 926);
      let sum3 = calculateSum('78\\ntryh\\n6');
      assert.equal(sum3, 84);
    });
  });
  describe('Step 4: Deny negative numbers. An exception should be thrown that includes all of the negative numbers provided', function() {
    it('should not throw exception when no negative numbers provided', function() {
      let errorStatement = errorCheck('1,2,3,4');
      assert.equal(errorStatement, undefined);
    });
    it('should throw exception that includes all of the negative numbers provided', function() {
      let errorStatement = errorCheck('-1,2,3,-4,5,-6');
      let containsAllNegative = ['-1','-4','-6'].reduce((found, number) => {
        return found && errorStatement.includes(number);
      }, true);
      assert.equal(containsAllNegative, true);
    });
  });
  describe('Step 5: Ignore any number greater than 1000', function() {
    it('should ignore any number greater than 1000', function() {
      let sum = calculateSum('2000\\n5\\n7,1090');
      assert.equal(sum, 12);
    });
  });
});
