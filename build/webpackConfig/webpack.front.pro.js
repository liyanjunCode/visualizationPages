const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    pages: {
        front: {
            entry: path.resolve(__dirname, "../../src/frontPage/src/main.ts"),
            template: path.resolve(__dirname, "../../public/index.html"),
            // 在 dist/index.html 的输出
            filename: 'index.html',
        }
    },
    outputDir: "dist/frontPage"
}

