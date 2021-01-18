import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import view from '../views/viewPage'
// import config from '../views/configPage.vue'
import select from '../views/selectPage.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'page',
        components: {
            default: select,
            view,
            config: () => import('../views/configPage.vue')
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
