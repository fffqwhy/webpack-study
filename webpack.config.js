const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : {
        app : "./src/app.js",
        main : "./src/main.js"
    },
    output: {
        path : path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        })
    ],
    mode: "production",
    optimization:{
        splitChunks: {
            chunks : "all",
            cacheGroups: {
                default : {
                    minSize: 0,  // 实际使用应该改为大的数值
                    minChunks: 2,// 应用超过两次就拆分单独的文件
                    priority: -20,
                    reuseExistingChunk: true,
                }
            }
        },
    }
}