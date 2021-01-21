import "./selectPage.scss";
import { defineComponent } from 'vue';
interface datype {
    name: string,
    path: string
}
type data1 = Array<datype>
export default defineComponent({
    setup() {
        const data: data1 = [
            { name: 'banner', path: "/a" },
            { name: '倒计时', path: "/b" },
        ]
        return () => {
            return (
                <div class="select">
                    <div class="select-tab">
                        {data.map(item => <router-link class="tab" to={item.path}>{item.name}</router-link>)}
                    </div>
                    <router-view></router-view>
                </div>
            )
        }
    }
})