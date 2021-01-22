<template>
  <div class="view">
    <banner
      v-for="(item, index) in pageData"
      :key="index"
      data="{item.data}"
    ></banner>
  </div>
</template>
<script>
import { defineComponent, computed, reactive } from 'vue';
import { useStore } from 'vuex'
import getComponent from "../../../common/assets/js/import"
export default defineComponent({
  setup () {
    const store = useStore();
    const pageData = reactive(computed(() => { return store.state.pageData }));
    return {
      pageData
    }
  },
  components: getComponent()
})
</script>
<style lang="scss">
.view {
  width: 375px;
  height: 1500px;
  overflow-y: auto;
}
</style>