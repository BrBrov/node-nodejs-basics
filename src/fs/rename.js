import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const pathFolder = 'src/fs/files';
const oldName = 'wrongFilename.txt';
const newName = 'properFilename.md';

const rename = async () => {
  // Write your code here
  try {
    const result = await fs.rename( path.join(pathFolder, oldName), path.join(pathFolder, newName));
  } catch (e) {
    const err = new Error(`FS operation failed`);
    err.name = 'Error';
    throw err;
  }
};

await rename();
