
/*
 * @Author: tackchen
 * @Date: 2022-04-10 17:49:52
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-15 09:29:00
 * @FilePath: /cnchar-data/index.d.ts
 * @Description: Coding something
 */

export const name: 'cnchar-data';

export const words: {
    dict: string;
}

export function serve(): void;

export function build(): void;

export default {
    name,
    words,
    serve,
    build,
}