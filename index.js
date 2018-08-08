const spawn = require('child_process').spawn;
const exec = (cmd, args) => {
    args.unshift(cmd);
    spawn('git', args, {stdio: "inherit"});
};

exports.exec = exec;