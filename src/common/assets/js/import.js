import {defineAsyncComponent} from "vue"
const file = require.context("../../component", false,/vue$/);

export default function () {
    const components = {};
    file.keys().forEach(key => {
        const componentKey = key.slice(2, -4);
        components[componentKey] = defineAsyncComponent(() => import(`../../component/${componentKey}`));
    });
    return components
}