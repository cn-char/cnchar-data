
/*
 * @Author: tackchen
 * @Date: 2022-04-10 17:49:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-09 09:11:15
 * @FilePath: /cnchar-data/index.d.ts
 * @Description: Coding something
 */

export const name: 'cnchar-data';

export const words: {
    dict: string;
}

export function serve(port?: number): void;

export function build(): void;

export default {
    name,
    words,
    serve,
    build,
}