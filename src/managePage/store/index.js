import { createStore } from 'vuex'
export default createStore({
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
