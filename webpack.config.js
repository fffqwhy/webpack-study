const path = require("path");

module.exports = {
    // 入口
    entry: "./src/main.js",
    // 出口
    output: {
        // 输出路径
        path: path.resolve(__dirname, "dist"), //绝对路径
        // 输出文件名
        filename: "build.js"
    },
    // 加载器
    module: {
        rules: [
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test: /\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.s[ac]ss$/,
                use:["style-loader","css-loader","sass-loader"]
            },{
                test: /\.styl$/,
                use:["style-loader","css-loader","stylus-loader"]
            }
        ]
            // loader 的配置
    },
    //插件
    // plugins: [

    // ],
    //模式
    mode: "development",
};