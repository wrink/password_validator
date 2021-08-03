const readline = require('readline');
const validate = require('./validate');

const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Enter password');
rl.question('==> ', (line) => {
  const errors = validate(line, process.argv.includes('-a'));
  if (Object.keys(errors).length) {
    console.log(`${RED}Invalid${RESET}`)
  } else {
    console.log(`${GREEN}Valid${RESET}`)
  }

  rl.close();
});
