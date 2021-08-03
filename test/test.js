const assert = require('assert');
const validate = require('../validate');

const BLANKS = '';
const FILLERS = '====';
const LETTERS = 'abcd';
const NUMBERS = '1234';

const substrs = [
  BLANKS,
  FILLERS,
  LETTERS,
  NUMBERS,
]

describe('validate()', function() {
  for (let substr1 = 0; substr1 < substrs.length; substr1++) {
    for (let substr2 = substr1; substr2 < substrs.length; substr2++) {
      const str = `=${substrs[substr1]}${substrs[substr2]}`;

      if (str.includes(LETTERS) && str.includes(NUMBERS)) {
        it(`should allow ${str}`, function() {
          assert.deepEqual(validate(str), {});
        });
      } else {
        it(`should not allow ${str}`, function() {
          assert.notDeepEqual(validate(str), {});
        });
      }
    }
  }
});
