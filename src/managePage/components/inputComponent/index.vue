<template>
    <h2>{{headTitle}}</h2>
    <div class="set-content">
        <a-input class="input" v-model:value="state.value" placeholder="请输入内容" />
        <a-button class="btn" type="primary" @click="clickHandler">确定</a-button>
    </div>
</template>
<script>
import { defineComponent, reactive } from 'vue';
export default defineComponent({
    props: {
     headTitle: String,
     flag: String,
     defaultValue: {
         type:String,
         default: ''
     }
    },
    emits: ['onClick'],
    setup (props, {emit }) {
        const state = reactive({
          value: props.defaultValue
        })
        const clickHandler = () => {
            emit("onClick", {
                value: state.value,
                flag: props.flag
            })
        }
        return {
            state,
            clickHandler
        }
    }
})
</script>
<style lang="scss" scoped>
.set-content {
    display: flex;
    margin-bottom: 20px;
    .input, .btn{
        height: 25px;
    }
}
</style>