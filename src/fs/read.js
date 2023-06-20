import * as fs from 'node:fs/promises';

const { log } = console;
const filePath = 'src/fs/files/fileToRead.txt';

const read = async () => {
  // Write your code here
  try {
    const file = await fs.readFile(filePath, {encoding: 'utf8'});
    log(file);
  } catch (e) {
    const err = new Error();
    err.message = 'FS operation failed';
    err.name = 'Error';
    throw err;
  }
};

await read();
