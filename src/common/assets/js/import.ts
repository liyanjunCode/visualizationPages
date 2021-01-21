import { defineAsyncComponent } from "vue"
const file = require.context("../../component", true, /tsx$/);
const reg = /\/([^/]*)\.tsx$/
export default function () {
    const components: { [propName: string]: string } = {};
    file.keys().forEach(key => {
        reg.test(key);
        const componentKey = RegExp.$1;
        components[componentKey] = defineAsyncComponent(() => import(`../../component/${componentKey}/${componentKey}`));
    });
    return components
}