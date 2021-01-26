import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ant from "./assets/js/ant"
import vant from "@/common/assets/js/vant";
import "@/common/assets/css/index.css"
createApp(App).use(store).use(router).use(ant).use(vant).mount('#app')
