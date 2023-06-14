import process from 'node:process';

const { log } = console;
const prefix = 'RSS_';

const parseEnv = () => {
    // Write your code here

  const arg = Object.keys(process.env);

  const variables = arg.filter((value) => {
    const prefixValue = value.slice(0, 4);
    if (prefixValue === prefix) {
      return value;
    }
  });

  const variableLen = variables.length;

  if (!variableLen) return;

  let outputString = ``;

  variables.forEach((name, index) => {
    const value = process.env[`${name}`];
    let variableString = `${name}=${value}`;

    if (index !== variableLen - 1) {
      variableString += '; ';
    }

    outputString += variableString;
  });

  log(outputString);
};

parseEnv();