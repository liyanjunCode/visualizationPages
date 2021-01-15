
const { merge } = require("webpack-merge");
const path = require("path");
const { openPageConfig, pageConfig } = require("../config.js");

module.exports = {
    mode: "development",
    entry: pageConfig.entry,
    output: {
        path: path.resolve(__dirname, "../../dist"),
        filename: "js/[name].[contenthash].js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "../../dist"),
        host: "localhost",
        port: "8080",
        hotOnly: true,
        open: true, //启动服务自动打开页面
        openPage: openPageConfig, //启动服务自动打开的指定页面， 可自行控制
        progress: true, //开启进度条
    },
    plugins: [
        ...pageConfig.plugins
    ]
}