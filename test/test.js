const assert = require('assert');
const validate = require('../validate');

const BLANKS = '';
const FILLERS = '====';
const SYMBOLS = '!@#$';
const LETTERS = 'abcd';
const NUMBERS = '1234';

const substrs = [
  BLANKS,
  FILLERS,
  SYMBOLS,
  LETTERS,
  NUMBERS,
]

describe('validate()', function() {
  for (let substr1 = 0; substr1 < substrs.length; substr1++) {
    for (let substr2 = substr1; substr2 < substrs.length; substr2++) {
      for (let substr3 = substr2; substr3 < substrs.length; substr3++) {
        const str = `=${substrs[substr1]}${substrs[substr2]}${substrs[substr3]}`;

        if (str.includes(LETTERS) && str.includes(NUMBERS) && str.length >= 10) {
          it(`should allow ${str} as normal`, function() {
            assert.deepEqual(validate(str), {});
          });
        } else {
          it(`should not allow ${str} as normal`, function() {
            assert.notDeepEqual(validate(str), {});
          });
        }

        if (str.includes(LETTERS) && str.includes(NUMBERS) && str.includes(SYMBOLS)) {
          it(`should allow ${str} as admin`, function() {
            assert.deepEqual(validate(str, true), {});
          });
        } else {
          it(`should not allow ${str} as admin`, function() {
            assert.notDeepEqual(validate(str, true), {});
          });
        }
      }
    }
  }
});
