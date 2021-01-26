<template>
  <div class="config">
    <banner-config
      v-if="configData.template == 'banner_template'"
      :configData="configData"
    ></banner-config>
  </div>
</template>
<script>
import { computed, defineComponent } from 'vue';
import getComponent from "../../../common/assets/js/import"
import { useStore } from 'vuex'
// 按需加载组件
export default defineComponent({
  setup () {
    const store = useStore();
    const configData = computed(() => { return store.state.configData; });
    return {
      configData
    }
  },
  components: getComponent("@/managePage/components/configPage")
})
</script>
<style lang="scss" scoped>
.config {
  flex: 1;
  overflow-y: auto;
  border-left: 1px solid black;
}
</style>