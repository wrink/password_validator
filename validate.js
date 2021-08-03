module.exports = function validate(str) {
  const out = {};

  if (str.length < 8) {
    out.minLengthError = true;
  }

  if (!/\d/.test(str)) {
    out.numbersRequiredError = true;
  }

  if (!/[a-zA-Z]/.test(str)) {
    out.lettersRequiredError = true;
  }

  return out;
}
