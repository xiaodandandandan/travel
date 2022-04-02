# travel

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 设置路径别名
    见vue.config.js

## vue的静态资源管理
1.项目中统一管理 便于开发人员使用 打包文件体积大
2.cdn上管理
    Vue项目打包的时候，默认会把所有代码合并生产新文件,其中包括各种库导致打包出来很大。如果使用cdn的话,会更利于程序的加载速度。用资源的形式引用
    优点：
        打包时间太长、打包后代码体积太大，请求慢
        服务器网络不稳带宽不高，使用cdn可以回避服务器带宽问题
3.第三方平台管理 体积较大的文件托管在第三方平台

## vue-awesome-swiper
轮播图插件 注意版本配置写法

## mixins
封装常用的css样式 作为方法调用