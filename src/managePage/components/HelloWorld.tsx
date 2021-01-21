import "./HelloWorld.scss";
import { defineComponent } from 'vue';
export default defineComponent({
    setup (props, { emit, slots }) {

        return () => {
            return (
                <div class="HelloWorld">hedlo
                </div>

            )
        }
    }
})