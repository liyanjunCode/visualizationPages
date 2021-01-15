const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "../../src/managePage/src/main.ts"),
    output: {
        filename: "js/[name].[contenthash].js",
        path: path.resolve(__dirname, "../../dist/managePage"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../../public/index.html"),
            title: "管理页面",
            filename: "index.html",
            minify: true,
        })
    ]
}
module.exports = {
    pages: {
        front: {
            entry: path.resolve(__dirname, "../../src/managePage/src/main.ts"),
            template: path.resolve(__dirname, "../../public/index.html"),
            // 在 dist/index.html 的输出
            filename: 'index.html',
        }
    },
    outputDir: "dist/managePage"
}
