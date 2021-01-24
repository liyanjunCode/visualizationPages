import { defineAsyncComponent } from "vue"
// 缓存读取过的组件
const cachComponent = {};
const reg = /\/(.*)\/index\.vue$/;
// 因为require.context和import 第一个使用变量就报错， 只能先写死，以后再研究
const getCompoent = {
    "@/managePage/components/configPage": {
        require: () => require.context("@/managePage/components/configPage", true, /.vue$/),
        import:(componentKey) => import(`@/managePage/components/configPage/${componentKey}/index`)
    },
    "@/common/component":{
        require:  () => require.context("@/common/component", true, /.vue$/),
        import:(componentKey) => import(`@/common/component/${componentKey}/index`)
    }
}
export default function (path) {
    if(cachComponent[path]){return cachComponent[path]}
    const file = getCompoent[path].require();
    const components = {};
    file.keys().forEach(key => {
        reg.test(key);
        const componentKey = RegExp.$1;
        components[componentKey] = defineAsyncComponent(() => getCompoent[path].import(componentKey));
    });
    cachComponent[path] = components;
    return components
}