npx webpack ./src/main.js --mode=development  开发模式

npx webpack ./src/main.js --mode=production   生产模式

使用配置文件 npx webpack 没有配置内容的配置项要进行注释

webpack 处理 css,less,sass,等

webpack 5 内置了图片资源的处理

添加 对图标等资源的处理

添加eslint配置和babel 进行es6转es5

添加devserver 进行 开发自动更新服务器配置

处理html文件，自动生成html引入打包的js，使用模板。

minicss-extract-plugin 是webpack5中新增加的插件用于将css打包为单独的css文件。

postcss-loader 对css进行兼容性处理

css-minimizer-webpack-plugin 压缩处理css,

初级学习over
之后高级优化部分：提升开发体验，提升打包速度，减少打包体积，优化代码性能

高级优化开始：