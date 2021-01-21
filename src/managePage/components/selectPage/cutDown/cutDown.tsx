import "./cutDown.scss";
import { Button } from 'ant-design-vue';
// import pageData from "@/managePage/useComponent/pageData/pageDta"
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const data = [
            {
                name: "button1",
                tempalte: "cut_down1"
            },
            {
                name: "button2",
                template: "cut_down2"
            }
        ]
        return () => {
            return (
                <div class="cut">
                    <Button type="primary" size="large">cutdown</Button>
                </div>
            )
        }
    }
})