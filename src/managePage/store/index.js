import { createStore } from 'vuex'
import { deepCopy } from "@/managePage/assets/js/utils.js"
import * as types from "./types.js"
const defaultContent = {
    'banner_template': {
        url: "www.baidu.com",
        pic: "https://pic12.secooimg.com/product/374/374/2020/1119/5ac955d520a94d2383276c7da5aaf1ba.jpg",
        title: "轮播图标题",
        des: "轮播图描述萨达萨达撒大V"
    }
}
const defaultData = {
    'banner_template': {
        template: 'banner_template',
        data: [
            deepCopy(defaultContent['banner_template'])
        ],
        config: {
            'show-indicators': true,
            'indicator-color': "#1989fa",
            'loop': true,
            'autoplay': '3000',
            'duration': '500',
            'initial-swipe': 0,
            'width': '100%',
            'height': '200',
            'lazy-render': false,
            'stop-propagation': true,
            'vertical': false,
            style: {
                title: {

                },
                des: {

                }
            }
        }
    }
}
export default createStore({
    state: {
        pageData: [],
        configData: {},
        curIndex: 0
    },
    mutations: {
        /* 
        * 添加页面数据模板
        * @params template<string> 模板名称
        * 
        * 
        */
        [types.ADD_DATA] (state, { template }) {
            state.pageData.push(deepCopy(defaultData[template]));
        },
        /* 
       * 选定要修改的内容
       *
       * 
       */
        [types.SET_CONFIG] (state, { item, index }) {
            state.configData = item;
            state.curIndex = index;
        },
        /* 
        * 增加banner轮播图
        *
        * 
        */
        [types.SET_BANNER_CONTENT] (state, { template, index }) {
            state.pageData[index]['data'].push(deepCopy(defaultContent[template]));
        },
        /* 
        * 设置banner组件轮播图的内容
        *
        * 
        */
        [types.SET_BANNER_DETAIL] (state, { item, index }) {
            Object.assign(state.pageData[state.curIndex]['data'][index], item);
        },
        [types.SET_BANNER_STYLE] (state, item) {
            Object.assign(state.pageData[state.curIndex].config.style, item);
        },
        [types.DEAL_VIEW_COMPONENT] (state, { type, index }) {
            const len = state.pageData.length;
            let replaceItem;
            switch (type) {
                case 'up':
                    if (index === 0) { return }
                    replaceItem = state.pageData[index - 1];
                    state.pageData[index - 1] = state.pageData[index];
                    state.pageData[index] = replaceItem;
                    state.curIndex = index - 1;
                    break;
                case 'down':
                    if (index === len - 1) { return }
                    replaceItem = state.pageData[index + 1];
                    state.pageData[index + 1] = state.pageData[index];
                    state.pageData[index] = replaceItem;
                    state.curIndex = index + 1;
                    break;
                case 'delete':
                    state.pageData.splice(index, 1);
                    state.configData = {};
                    break;
                default:
                    break;
            }
        },
    },
    actions: {
    },
    modules: {
    }
})
