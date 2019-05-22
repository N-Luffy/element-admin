# element-admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



> 项目说明

## 简介
element-admin 是一个后台前端解决方案，它基于 vue 和 element-ui实现，参考<a href="https://github.com/PanJiaChen/vue-element-admin">PanJiaChen的vue-element-admin项目</a>所写的一个后台程序，干净简洁，能够快速快发添加自己需要的业务模块。



## 目录结构

|目录/文件|说明|
|:----:|:----|
|build|项目构建(webpack)相关代码|
|config|配置目录，包括端口号等。我们初学可以使用默认的。|
|mock|mock数据，在没有接入真实开发环境时的模拟数据|
|node_modules|npm 加载的项目依赖模块|
|src|这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：<br/> <ul><li>api: 数据访问接口</li><li>assets: 放置一些图片，如logo等。</li><li>components: 目录里面放了一个组件文件，可以不用。</li><li>icons: icon样式</li><li>images: 图片文件夹</li><li>router: 路由配置文件。</li><li>store: 整个项目状态管理的地方，使用了vuex状态管理工具。</li><li>styles: css样式文件</li><li>utils: 工具库</li><li>views: 展示的界面。</li><li>App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。</li><li>main.js: 项目的核心文件。</li></ul>|
|static|静态资源目录，如图片、字体等。|
|test|初始测试目录，可删除|
|.xxxx文件|这些是一些配置文件，包括语法配置，git配置等。|
|index.html|首页入口文件，你可以添加一些 meta 信息或统计代码啥的。|
|package.json	|项目配置文件。|
|README.md|项目的说明文档，markdown 格式|
