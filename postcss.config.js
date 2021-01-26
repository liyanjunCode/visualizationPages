const px2rem = require('postcss-plugin-px2rem');
const plugins = [require('autoprefixer')];
module.exports = {
    plugins: [
        require('autoprefixer'),
        px2rem({
            viewportWidth: 750,
            viewportHeight: 1550,
            unitPrecision: 5,    // 转换精度
            // viewportUnit: 'vw',  // 转换单位
            exclude: /managePage/,  // 管理系统 选择和配置页面忽略转化
            selectorBlackList: [], // 忽略转换的模块
            propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            propBlackList: [], //黑名单
            minPixelValue: 3,  // 嘴下像素
            mediaQuery: false,  // 媒体查询是否砖汉
            rootValue: 75,   // 转换rem的根节点大小
        })
    ]
}