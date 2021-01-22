import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
console.log(Antd, "1111")
createApp(App).use(store).use(router).use(Antd).mount('#app')
