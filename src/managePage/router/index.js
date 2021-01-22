import { createRouter, createWebHashHistory } from 'vue-router'
import view from '../views/viewPage/index'
import config from '../views/configPage/index'
import select from '../views/selectPage/index'
const routes = [
    {
        path: '/',
        name: 'page',
        components: {
            default: select,
            view,
            config
        },
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
