import * as fs from 'node:fs/promises';

const filePath = 'src/fs/files';
const {log} = console;

const list = async () => {
  // Write your code here
  try {
    const dir = await fs.readdir(filePath);
    
    dir.forEach((item) => log(item));
  } catch (e) {
    const err = new Error();
    err.message = 'FS operation failed';
    err.name = 'Error';
    throw err;
  }
};

await list();