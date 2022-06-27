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
    mode: "production"
}