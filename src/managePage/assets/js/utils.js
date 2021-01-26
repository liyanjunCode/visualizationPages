/* 
* 简易类型深拷贝
*/
export const deepCopy = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}