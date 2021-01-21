import "./configPage.scss";
import { defineComponent } from 'vue';
import getComponent from "../../../common/assets/js/import"
import Hello from "../../components/HelloWorld"
// 按需加载组件
const { banner } = getComponent();
export default defineComponent({
    setup(props, { emit, slots }) {

        return () => {
            return (
                <div class="config">configPage  <span class="span1">

                </span>
                    <div class="aaa"></div>
                    <banner></banner>
                    <Hello></Hello>
                </div>

            )
        }
    }
})
