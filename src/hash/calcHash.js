import * as fs from 'node:fs/promises';
import crypto from 'node:crypto';

const filePath = 'src/hash/files/fileToCalculateHashFor.txt';
const algo = 'sha256';

const calculateHash = async () => {
    // Write your code here 
   const fileData = await fs.readFile(filePath, {encoding: 'utf-8'});
   const buffer = fileData.toString('hex');
   const sha = crypto.createHash(algo).update(buffer).digest('hex');
   console.log(sha);
};

await calculateHash();