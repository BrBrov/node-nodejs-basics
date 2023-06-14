import * as fs from 'node:fs/promises';
import readline from 'node:readline/promises';

const fileOut = './src/streams/files/fileToWrite.txt';

const write = async () => {
    // Write your code here 

    const fh = await fs.open(fileOut, 'w');

    const streamW = fh.createWriteStream({encoding: 'utf8'});

    process.stdin.pipe(streamW);
    
};

await write();