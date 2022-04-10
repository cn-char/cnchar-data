#!/usr/bin/env node

const {server, defaults} = require('lite-server');

async function main(){
    const chalk = (await import('chalk')).default;
    try{
        const port = parseInt(process.argv[2] || 7077);
        console.log(chalk.green('--Running cnchar server ...'));
        defaults.port = port
        server();
    }catch(err){
        console.log(chalk.red('--Run Failed'), err);
    }
}

main();