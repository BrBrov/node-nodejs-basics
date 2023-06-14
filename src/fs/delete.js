import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const fileName = 'fileToRemove.txt';
const pathFile = path.join('src/fs/files', fileName);

const remove = async () => {
  // Write your code here
  try {
    await fs.rm(pathFile);
  } catch (e) {
    const err = new Error(`FS operation failed`);
    err.name = 'Error';
    throw err;
  }
};

await remove();