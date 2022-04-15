/*
 * @Author: tackchen
 * @Date: 2022-04-15 09:23:16
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-15 09:24:11
 * @FilePath: /cnchar-data/bin/lib.js
 * @Description: Coding something
 */
const gulp = require('gulp');
const path = require('path');

function build(){
    const map = [{
        dir: 'voice',
        fileType: 'mp3'
    }, {
        dir: 'explanation',
        fileType: 'json'
    }, {
        dir: 'draw',
        fileType: 'json'
    }, {
        dir: 'words',
        fileType: 'json'
    }]
    
    console.log('Progress is running, please wait ...');
    map.forEach(({dir, fileType}) => {
        gulp.src(path.resolve(__dirname, `../${dir}/*.${fileType}`))
        .pipe(gulp.dest(path.resolve(__dirname, `../../dist/${dir}`)))
        .on('end', () => {
            console.log(`Finish ${dir}!`);
        });
    });
}

async function serve(){
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

module.exports = {build, serve};