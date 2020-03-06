<template>
  <div id="menu-list-container">
    <ul>
      <router-link :to="{name:'frontend'}">
        <li>前端</li>
      </router-link>
      <router-link :to="{name:'angular'}">
        <li>Angular</li>
      </router-link>
      <router-link :to="{name:'react'}">
        <li>React</li>
      </router-link>
      <router-link :to="{name:'vue'}">
        <li>Vue</li>
      </router-link>
      <router-link :to="{name:'other'}">
        <li>相關技術</li>
      </router-link>
      <router-link :to="{name:'recommend'}">
        <li>推薦網站</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#menu-list-container {
  margin: 0 10px;
  ul {
    a {
      color: #ffffff;
      text-decoration: none;
    }
    li {
      margin: 0px 56px;
      padding: 5px 5px;
      font-size: 20px;
      list-style-type: square;
      cursor: pointer;
      &:hover {
        background-color: #3a4750;
      }
      @media only screen and (max-width: 767px) {
        float: left;
        margin: 2px;
        margin-right: 20px;
        width: calc(50% - 35px);
        height: 23px;
        line-height: 23px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    margin-top: -15px;
  }
}
</style>
