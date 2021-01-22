<template>
  <div class="config">
    <div class="aaa"></div>
    <banner></banner>
    <Hello></Hello>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import getComponent from "../../../common/assets/js/import"
// 按需加载组件
export default defineComponent({
  setup () {
    return {

    }
  },
  components: getComponent()
})
</script>
<style lang="scss">
.config {
  flex: 1;
  overflow-y: auto;
  border-left: 1px solid black;
}
</style>