#!/usr/bin/env node
const proc = require('../index');
const args = process.argv.slice(3, process.argv.length).map(arg => arg.match(/\s+/) ? `"${arg}"` : arg);

const cmd = process.argv[2];
const commands = {
    'i': 'init',
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

if(Object.keys(commands).indexOf(cmd) !== -1) {
    proc.exec(commands[cmd], args);
}