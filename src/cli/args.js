import process from 'node:process';

const { log } = console;
const parseArgs = () => {
    // Write your code here
  const argArray = process.argv.slice(2);

  if (!argArray.length) return;

  const outputString = [];

  let argString = '';

  argArray.forEach((item, index) => {
    if ((index % 2) == 0) {
      argString += index == 0 ? `${item.slice(2)} is ` : ` ${item.slice(2)} is `;
    } else {
      argString += `${item}`;
      outputString.push(argString);
      argString = '';
    }
  });

  log(outputString.toString());
};

parseArgs();