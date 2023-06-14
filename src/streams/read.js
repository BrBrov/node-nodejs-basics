import * as fs from 'node:fs/promises';

const filePath = 'src/streams/files/fileToRead.txt';

const read = async () => {
    // Write your code here 
    const fh = await fs.open(filePath);
    const stream = fh.createReadStream({encoding: 'utf8'});

    stream.on('data', (data) => {
        process.stdout.write(data);
    });

    stream.on('end', () => {
        process.stdout.write('\n');
    });
};

await read();