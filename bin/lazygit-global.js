#!/usr/bin/env node
const VERSION = '1.0.4';

const proc = require('../index');
const args = process.argv.slice(3, process.argv.length).map(arg => arg.match(/\s+/) ? `"${arg}"` : arg);

const cmd = process.argv[2];
const commands = {
    'i': 'init',
    'ps': 'push',
    's': 'status',
    'pl': 'pull',
    'b': 'branch',
    'cm': 'commit',
    'a' : 'add',
    'l' : 'log',
    'd' : 'diff',
    'r' : 'reset',
    'm' : 'merge',
    'co' : 'checkout',
    'ss' : 'stash',
    'cl' : 'clone',
    't' : 'tag',
    'rmt' : 'remote',
    'apl' : 'apply'
};

const commandsList = Object.keys(commands);

if(['--version', '-v'].indexOf(cmd) !== -1) {
    console.log(`Version: ${VERSION}`);
} else if(commandsList.indexOf(cmd) !== -1) {
    proc.exec(commands[cmd], args);
} else if(cmd === 'random') {
    const randomCmd = commandsList[Math.floor((Math.random() * commandsList.length) + 0)];
    proc.exec(commands[randomCmd], args);
} else {
    console.log('Unknown command');
}