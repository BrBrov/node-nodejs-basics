import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const folderPath = 'src/fs/files';
const destinationFolder = 'src/fs/files_copy';

const copy = async () => {
  // Write your code here
  try {
    const dir = await fs.readdir(folderPath);

    await fs.mkdir(destinationFolder);

    dir.forEach((file) => {
      const pathFile = path.join(folderPath, file);
      const pathNewFile = path.join(destinationFolder, file);
      fs.copyFile(pathFile, pathNewFile);
    });
  } catch (e) {
    const err = new Error(`FS operation failed`);
    err.name = 'Error';
    throw err;
  }
};

await copy();
