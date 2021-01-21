import "./banner.scss";
import { defineComponent } from 'vue';
import { Swipe, SwipeItem } from 'vant';
export default defineComponent({
    props: {
        data: {
            type: Object,
            default: () => {
                return {
                    // url: '',
                    // pic: '',
                    // des: ''
                }
            }
        }
    },
    setup(props) {
        return () => {
            return (
                <div class="banner">
                    <Swipe autoplay={3000} indicator-color="white">
                        <SwipeItem>1</SwipeItem>
                        <SwipeItem>2</SwipeItem>
                    </Swipe>
                    {/* <a href={props.data.url}></a>
                    <img src={props.data.pic} />
                    <div>{props.data.des}</div> */}
                </div >
            )
        }
    }
})