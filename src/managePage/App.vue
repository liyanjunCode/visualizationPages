
<template>
  <router-view></router-view>
  <router-view name="view"></router-view>
  <router-view name="config"></router-view>
</template>
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

