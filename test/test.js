const {calculateSum} = require('../src/calculateSum')
const assert = require('assert');

describe('Sum Calculations', function() {
  describe('Step 1: Support a maximum of 2 numbers using a comma delimiter', function() {
    it('should return 8 when the imput is \'1,7\'', function() {
      let sum = calculateSum('2,2');
      assert.equal(sum, 4);
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
});
