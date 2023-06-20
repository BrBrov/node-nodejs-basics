import * as fs from 'node:fs/promises';

const fileName = 'fresh.txt';
const fileContent = 'I am fresh and young files';
const path = 'src/fs/files';

const create = async () => {
  // Write your code here
  const dir = await fs.readdir(path, { withFileTypes: true });
  const isFileHas = dir.some((item) => item.name === fileName);

  if (isFileHas) {
    const err = new Error();
    err.message = `FS operation failed`;
    err.name = 'Error';
    throw err;
  }
  
  await fs.appendFile(`${path}/${fileName}`, fileContent);
};

await create();