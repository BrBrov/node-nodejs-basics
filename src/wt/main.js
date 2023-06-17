import { Worker } from 'node:worker_threads';
import os from 'node:os';

const { log } = console;

function WorkerResultObject(status, value) {
    this.status = status;
    this.data = value;
}

function createWorker(counter) {
    return new Promise((resolve) => {
        const worker = new Worker('./src/wt/worker.js', { workerData: counter });

        worker.on('message', (value) => resolve(new WorkerResultObject('resolved', value)));

        worker.on('error', () => resolve(new WorkerResultObject('error', null)));
    });
}

function* workerGenerator(cpuCount) {
    let startCPUCounter = 10;
    for (let index = 0; index < cpuCount; index++) {
        yield createWorker(startCPUCounter);
        startCPUCounter += 1;
    }
}

const performCalculations = async () => {
    // Write your code here
    const cpusCount = os.cpus().length;
    const resultArray = [];

    const workerObject = workerGenerator(cpusCount);

    for await (const value of workerObject) {
        resultArray.push(value);
    }

    log(resultArray);
};

await performCalculations();