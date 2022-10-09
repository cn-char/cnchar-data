## [cnchar](https://www.github.com/theajack/cnchar) 资源库

该库为[cnchar](https://www.github.com/theajack/cnchar)的资源cdn库

也可以用于支持离线化使用cnchar部分在线资源，及生产环境部署到自己的服务器中

### 1. 安装

```
npm i cnchar-data -D
```

### 2. 运行

首先配置 package.json scripts

```
{
    ...,
    "scripts": {
        "cnchar-serve": "cnchar-serve 3002",
        "cnchar-prod": "cnchar-serve-prod"
    },
}
```

运行一个本地的服务，端口可以自定义

```
npm run cnchar-serve
```

运行成功之后可以访问一下链接查看是否正确运行

[http://localhost:3002/draw/一.json](http://localhost:3002/draw/一.json)

### 3. 开发环境使用

```js
import cnchar from 'cnchar';
cnchar.setResourceBase('http://localhost:{port}/')
```

### 4. 生产环境使用

如需将资源部署到您的生产环境服务器

请执行

```
npm run cnchar-prod
```

会在项目根目录生成cnchar-data目录, 将改文件夹放置在您的http服务器中

假设可访问路径为 `https://www.xxx.com/cnchar-data/`

则对cnchar设置如下

```js
import cnchar from 'cnchar';
cnchar.setResourceBase('https://www.xxx.com/cnchar-data/')
```

### 5. api

```ts
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
```

```js
import {serve} from 'cnchar-data';
serve(port);
```

```js
import {build} from 'cnchar-data';
build();
```

### 6. 或者可以全局安装使用

```
npm i cnchar-data -g
```

```
cnchar-serve [port]
```

```
cnchar-serve-prod
```