
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { getMultyPage, getOpenPage } = require("./build/config");
// 默认打包H5
const config = getMultyPage();

module.exports = {
    publicPath:"/",
    outputDir: config.outputDir,
    pages: config.pages,
    devServer: {
        // proxy: {
        //     '/api': {
        //       target: '',
        //       ws: true,
        //       changeOrigin: true
        //     }
        // },
        before(app){
            console.log(app,"app==============================")
        },
        contentBase: path.resolve(__dirname, "../dist"),
        host: "localhost",
        port: "8080",
        hotOnly: true,
        open: true, //启动服务自动打开页面
        openPage: getOpenPage(), //启动服务自动打开的指定页面， 可自行控制
        progress: true, //开启进度条
    },
    configureWebpack: {
        plugins: [
            new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "./dist/**/*")] })
        ]
    },
    chainWebpack: config => {
        config.resolve.alias
        .set('@', path.resolve(__dirname, "../../src"))
        .set("frontPage", path.resolve(__dirname, "./src/frontPage"))
        .set("managePage", path.resolve(__dirname, "./src/managePage"))
        .set("front", path.resolve(__dirname, "./src/frontPage/src"))
        .set("manage", path.resolve(__dirname, "./src/managePage/src"));
    }
}
