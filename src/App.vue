<template>
  <div id="app">
    <Menu></Menu>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from './views/Menu.vue';

export default {
  components: {
    Menu
  }
};
</script>


<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Helvetica, Arial, Sans-Serif, Microsoft JhengHei;
  .main {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 400px;
    @media only screen and (max-width: 767px) {
      top: 380px;
      left: 0;
    }
  }
}
</style>
