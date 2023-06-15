import * as fs from 'node:fs/promises';
import zlib from 'node:zlib';

const fileName = 'fileToCompress.txt';
const filePath = 'src/zip/files/';
const fileZip = 'archive.gz';

const decompress = async () => {
    // Write your code here
    const fZip = await fs.open(filePath + fileZip, 'r');
    const fZipStream = fZip.createReadStream();

    await fs.appendFile(filePath + fileName, '', {encoding: 'utf8'});

    const fh = await fs.open(filePath + fileName, 'w');
    const fStream = fh.createWriteStream({encoding: 'utf-8'});

    const gUnZip = zlib.createGunzip();

    fZipStream.pipe(gUnZip).pipe(fStream);
};

await decompress();