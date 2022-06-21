const path = require("path");
const eslint = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

function getcssLoader(pre) {
    return [
        MiniCssExtractPlugin.loader, // 将样式文件单独提取为css文件 默认合并为一个css
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                        [
                            "postcss-preset-env", // 可以满足大多数兼容性问题
                            {
                                // Options
                            },
                        ],
                    ],
                },
            },
        },
        pre
    ].filter(Boolean)
}

module.exports = {
    // 入口
    entry: "./src/main.js",
    // 出口
    output: {
        // 输出路径
        path: path.resolve(__dirname, "../dist"), //绝对路径
        // 输出文件名
        filename: "static/js/main.js",
        clean: true //webpack 5 的功能，之前的版本需要使用插件，在打包前将path文件下清空
    },
    // 加载器
    module: {
        rules: [{
                test: /\.css$/,
                use: getcssLoader()
            },
            {
                test: /\.less$/,
                use: getcssLoader("less-loader")
            },
            {
                test: /\.s[ac]ss$/,
                use:getcssLoader("sass-loader")
            }, {
                test: /\.styl$/,
                use: getcssLoader("stylus-loader")
            }, {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        // 小于4kb的图片转换为base64 减少请求数量
                        // 图片转换为base64 过程中会增加三分之一的大小，大图片转为base64 不合适，还是走请求吧
                        maxSize: 4 * 1024,
                    },
                },
                generator: {
                    filename: "static/img/[hash:10][ext][query]"
                }
            }, {
                test: /\.(woff2?|ttf)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:11][ext][query]"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除
                loader: "babel-loader",
            }
        ]
        // loader 的配置
    },
    //插件
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/main.css'
        }),
        new eslint({
            context: path.resolve(__dirname, "../src"),
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new CssMinimizerPlugin()
    ],
    //模式
    mode: "production",
};