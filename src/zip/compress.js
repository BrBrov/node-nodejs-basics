import * as fs from 'node:fs/promises';
import zlib from 'node:zlib';

const fileName = 'fileToCompress.txt';
const filePath = 'src/zip/files/';
const fileZip = 'archive.gz';

const compress = async () => {
    // Write your code here
    const fh = await fs.open(filePath + fileName, 'r');

    await fs.appendFile(filePath + fileZip, '', {encoding: 'utf8'});

    const fZip = await fs.open(filePath + fileZip, 'w');

    const fStream = fh.createReadStream({encoding: 'utf-8'});

    const fZipStream = fZip.createWriteStream({encoding: 'utf8'});

    const gZip = zlib.createGzip();

    fStream.pipe(gZip).pipe(fZipStream);
};

await compress();