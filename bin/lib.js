/*
 * @Author: tackchen
 * @Date: 2022-04-15 09:23:16
 * @FilePath: /cnchar-data/bin/lib.js
 * @Description: Coding something
 */
const gulp = require('gulp');
const path = require('path');
const {server, defaults} = require('lite-server')

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
        .pipe(gulp.dest(path.resolve(process.cwd(), `cnchar-data/${dir}`)))
        .on('end', () => {
            console.log(`Finish ${dir}!`);
        });
    });
}

async function serve(port){
    const chalk = (await import('chalk')).default;
    try{
        if(typeof process !== 'undefined' && !port) {
            port = process.argv[2];
        }
        port = parseInt(port || 7077);
        console.log(chalk.green(`--Running cnchar server [port=${port}] ...`));
        defaults.port = port;
        defaults.files = ['./**/*.{html,htm,css,js,json,mp3}'];
        defaults.server.baseDir = path.resolve(__dirname, '../');
        defaults.watchOptions = {};
        server();
    }catch(err){
        console.log(chalk.red('--Run Failed'), err);
    }
}

module.exports = {build, serve};