import { defineAsyncComponent } from "vue"
const file = require.context("../../component", true, /.vue$/);
const reg = /\/(.*)\/index\.vue$/
export default function () {
    const components = {};
    file.keys().forEach(key => {
        reg.test(key);
        const componentKey = RegExp.$1;
        components[componentKey] = defineAsyncComponent(() => import(`../../component/${componentKey}/index`));
    });
    return components
}