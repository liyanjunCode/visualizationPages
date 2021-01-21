import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import view from '../views/viewPage/viewPage'
import config from '../views/configPage/configPage'
import select from '../views/selectPage/selectPage'
import bannerContent from '../components/selectPage/bannerContent/bannerContent'
import cutDown from '../components/selectPage/cutDown/cutDown'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'page',
        components: {
            default: select,
            view,
            config
        },
        children: [
            {
                path: '/a',
                name: 'banner',
                component: bannerContent
            },
            {
                path: '/b',
                name: 'cutdown',
                component: cutDown
            }
        ]

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
