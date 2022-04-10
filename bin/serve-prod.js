#!/usr/bin/env node

const gulp = require('gulp');
const path = require('path');

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