import "./viewPage.scss"
import { defineComponent, computed, ref, reactive } from 'vue';
import { useStore } from 'vuex'
import { key } from "../../store"
import getComponent from "../../../common/assets/js/import"
// 按需加载组件
const { banner } = getComponent();
export default defineComponent({
    setup() {
        const store = useStore(key);
        console.log(store)
        const pageData = reactive(computed(() => { return store.state.pageData }));
        return () => {
            return (
                <div class="view">viewPage
                    {pageData.value.map(item => {
                        return (
                            item.template === "banner" && (<banner data={item.data}></banner>)
                        )
                    })}
                </div >
            )
        }
    }
})