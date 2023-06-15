import { Transform } from 'node:stream';
import process from 'node:process';

class Reverser extends Transform {

    _transform(chunk, encoding, callback) {
        const str = chunk.reverse() + '\n';
        callback(null, str);
    }

    _flush
}

const transform = async () => {
    // Write your code here

    const tr = new Reverser();

    process.stdin.pipe(tr).pipe(process.stdout);

};

await transform();