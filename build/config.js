const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 用于区分打包， 如果是front只打包前台页面，manage打包后台页面，否则两个一起打包

// const flag = JSON.parse(process.env.BUILD_CONFIG);
let flag;
const dirPath = path.resolve(__dirname, "./build.json");
if (fs.existsSync(dirPath)) {
    console.log("*****************8")
    flag = process.env.BUILD_CONFIG = JSON.parse(fs.readFileSync(dirPath, { encoding: "utf-8" })).name;
    fs.unlink(dirPath, () => { });
}
const openPageConfig = flag == "front" ? ["frontPage.html"] : flag == "manage" ? ["managePage.html"] : ["frontPage.html", "managePage.html"];
//  本地服务采用多页面运行
const nameList = process.env.NODE_ENV == "production" ? [`${process.env.BUILD_CONFIG}Page`] : ["frontPage", "managePage"];
const getMultyPage = () => {
    const config = {};
    const pages = {};
    let outputDir = "";
    nameList.forEach(item => {
        pages[item] = {
            entry: path.resolve(__dirname, `../src/${item}/src/main.ts`),
            template: path.resolve(__dirname, "../public/index.html"),
            filename: `${item}.html`
        };
    })
    config.pages = pages;
    config.outputDir = nameList.length == 1 ? nameList[0] : "dist";
    return config;
}
module.exports = {
    openPageConfig,
    getMultyPage
}