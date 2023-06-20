import { spawn } from 'node:child_process';

const args = ['one', 'two', 'three'];


const spawnChildProcess = async (args) => {
    // Write your code here

    const cProcess = spawn('node', ['./src/cp/files/script.js', ...args], {stdio: [0, 1, 2, 'ipc']});
};

// Put your arguments in function call to test this functionality
/* [someArgument1, someArgument2, ...] */
spawnChildProcess(args);
