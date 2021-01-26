/* 
* 配置样式拼接
*/
export const spliceStyle = (obj) => {
    return Object.keys(obj).map(key => {
        return `${key}:${obj[key]}`
    }).join(";")
}