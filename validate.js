module.exports = function validate(str) {
  const out = {};
  console.log(`==============================================================`);
  console.log(`Testing password: ${str}`);
  console.log(`==============================================================`);

  if (str.length < 8) {
    out.minLengthError = true;
    console.log(`Password must be at least 8 characters long`);
  }

  if (!/\d/.test(str)) {
    out.numbersRequiredError = true;
    console.log(`Password must contain at least 1 number`);
  }

  if (!/[a-zA-Z]/.test(str)) {
    out.lettersRequiredError = true;
    console.log(`Password must contain at least 1 letter`);
  }

  return out;
}
