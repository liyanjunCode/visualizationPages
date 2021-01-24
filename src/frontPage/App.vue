

<template>
  <banner></banner>
</template>
<script>
import { defineComponent } from 'vue';
import getComponent from "@/common/assets/js/import"
export default defineComponent({
  setup () {
    return {

    }
  },
  components:  getComponent("@/common/component")
})
</script>
<style lang="scss">
html {
  font-size: 37.5px;
}
body {
  font-size: 16px;
}
html,
body,
#app {
  height: 100%;
}
body {
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
</style>
