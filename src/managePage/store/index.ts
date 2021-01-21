import { createStore, Store } from 'vuex'
import { pageType } from "../interface/index"
import { InjectionKey } from "vue"
// import * as math from "./type"
export const key: InjectionKey<Store<State>> = Symbol()
interface State {
    pageData: pageType
}
// {
//     template: "banner",
//     data: {
//         url: "www.baidu.com",
//         pic: "//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
//         des: "百度数据"
//     }
// }
export default createStore<State>({
    state: {
        pageData: [
            {
                template: "banner",
                data: {
                    url: "www.baidu.com",
                    pic: "//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
                    des: "百度数据"
                }
            }

        ]
    },
    mutations: {
        // [types.ADD_DATA]() {
        //     return;
        // }
    },
    actions: {
    },
    modules: {
    }
})
