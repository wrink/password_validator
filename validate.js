module.exports = function validate(str, admin=false) {
  const out = {};
  console.log(`==============================================================`);
  console.log(`Testing password: ${str} as ${(admin) ? 'admin' : 'normal'}`);
  console.log(`==============================================================`);

  if (!admin && str.length < 8) {
    out.minLengthError = true;
    console.log(`Password must be at least 8 characters long`);
  }

  if (admin && str.length < 13) {
    out.minLengthError = true;
    console.log(`Password must be at least 13 characters long`);
  }

  if (!/\d/.test(str)) {
    out.numbersRequiredError = true;
    console.log(`Password must contain at least 1 number`);
  }

  if (!/[a-zA-Z]/.test(str)) {
    out.lettersRequiredError = true;
    console.log(`Password must contain at least 1 letter`);
  }

  if (admin && !/[!@#$%^&*]/.test(str)) {
    out.symbolsRequiredError = true;
    console.log(`Password must contain at least 1 symbol`);
  }

  return out;
}
