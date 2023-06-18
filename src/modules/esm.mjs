// const path = require('path');
// const { release, version } = require('os');
// const { createServer: createServerHttp } = require('http');
// require('./files/c.js');

import path from 'node:path';
import url from 'node:url';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import './files/c.js';
import { createRequire } from 'node:module';

const random = Math.random();
const json = createRequire(import.meta.url);
export let unknownObject;

if (random > 0.5) {
    // Experimental, but work //
    // unknownObject = await import('./files/a.json', { assert: { type: "json" } });//    
    unknownObject = json('./files/a.json');
} else {
    // Experimental, but work //
    // unknownObject = await import('./files/b.json', { assert: { type: "json" } });
    unknownObject = json('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end(`Request accepted ${unknownObject}`);
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

// module.exports = {
//     unknownObject,
//     myServer,
// };

