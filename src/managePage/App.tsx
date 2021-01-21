import { defineComponent, Fragment } from 'vue';
import "./app.scss"
export default defineComponent({
    setup() {
        return () => {
            return (
                <Fragment>
                    <router-view></router-view>
                    <router-view name="view"></router-view>
                    <router-view name="config"></router-view>
                </Fragment>
            )
        }
    }
})
