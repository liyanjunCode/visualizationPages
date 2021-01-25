<template>
  <div class="view">
    <div
      class="wrap"
      v-for="(item, index) in pageData"
      :key="index"
      @click="handlerClick(item, index)"
    >
      <dealViewComponent
        @click="dealViewComponent"
        :index="index"
      ></dealViewComponent>
      <banner
        v-if="item.template === 'banner_template'"
        :data="item.data"
        :config="item.config"
      ></banner>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed, reactive } from 'vue';
import { useStore } from 'vuex'
import getComponent from "../../../common/assets/js/import"
import dealViewComponent from "../../components/dealViewComponent/index"
export default defineComponent({
  setup () {
    const store = useStore();
    const pageData = reactive(computed(() => { return store.state.pageData }));
    const dealViewComponent = (item) => {
      store.commit("DEAL_VIEW_COMPONENT", item)
    }
    const handlerClick = (item, index) => {
      store.commit("SET_CONFIG", {
        item,
        index
      })
    }
    return {
      pageData,
      handlerClick,
      dealViewComponent
    }
  },
  components: {
    dealViewComponent,
    ...getComponent("@/common/component")
  }
})
</script>
<style lang="scss">
.view {
  width: 375px;
  height: 1500px;
  overflow-y: auto;
  .wrap {
    position: relative;
  }
}
</style>