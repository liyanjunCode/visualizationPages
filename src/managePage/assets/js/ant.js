import { Button, Input } from 'ant-design-vue'

const pcComopnents = [Button, Input];
export default {
    install (app) {
        pcComopnents.forEach(componet => {
            app.use(componet)
        })
    }
}