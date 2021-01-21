import { defineComponent, Fragment } from 'vue';
import "./app.scss"
import getComponent from "@/common/assets/js/import"
// 按需加载组件
const { banner } = getComponent();
export default defineComponent({
    setup() {
        return () => {
            return (
                <Fragment>
                    <banner></banner>
                </Fragment>
            )
        }
    }
})
