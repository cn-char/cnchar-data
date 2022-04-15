/*
 * @Author: tackchen
 * @Date: 2022-04-10 17:49:52
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-15 09:25:10
 * @FilePath: /cnchar-data/index.js
 * @Description: Coding something
 */
const words = require('./words/words.json')
const {serve, build} = require('./bin/lib')

module.exports = {
    name: 'cnchar-data',
    words,
    serve,
    build,
};