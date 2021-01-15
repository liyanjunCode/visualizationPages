const { merge } = require('webpack-merge');
const path = require("path");

const { getMultyPage, openPageConfig } = require("./build/config");
// let front = require("./build/webpackConfig/webpack.front.pro.js");
// let manage = require("./build/webpackConfig/webpack.manage.pro.js");
// const devConfig = require("./build/webpackConfig/webpack.dev.js");
// 默认打包H5
// let flag = JSON.parse(process.env.BUILD_CONFIG);
const config = getMultyPage();
module.exports = {
    pages: config.pages,
    outputDir: config.outputDir,
    // resolve: {
    //     alias: {
    //         "@": path.resolve(__dirname, "../../src"),
    //         "frontPage": path.resolve(__dirname, "../../src/frontPage"),
    //         "managePage": path.resolve(__dirname, "../../src/managePage"),
    //         "front": path.resolve(__dirname, "../../src/frontPage/src"),
    //         "manage": path.resolve(__dirname, "../../src/managePage/src"),
    //     }
    // },
}
// let config = {};
// if (process.env.NODE_ENV == "development") {
//     config = devConfig;
// } else if ((process.env.NODE_ENV == "production")) {
//     front = merge(baseConfig, front);
//     manage = merge(baseConfig, manage);
//     config = flag == "front" ? front : flag == "manage" ? manage : [front, manage];
// }
// module.exports = {
//     pages: {
//         front: {
//             entry: "./src/frontPage/main.ts",
//             template: './public/index.html',
//             // 在 dist/index.html 的输出
//             filename: 'index.html',
//         }
//     },
//     outputDir: "dist/frontPage"
// };