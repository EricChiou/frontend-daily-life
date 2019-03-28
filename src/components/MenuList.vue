<template>
  <div id="menu-list-container">
    <ul>
      <li>前端趨勢</li>
      <li>Angular</li>
      <li>React</li>
      <li>Vue</li>
      <li>UI Design</li>
      <li>相關技術</li>
      <li>推薦網站</li>
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
    li {
      margin: 5px 56px;
      padding: 5px 5px;
      font-size: 20px;
      list-style-type: square;
      cursor: pointer;
      &:hover {
        background-color: #3a4750;
      }
      @media only screen and (max-width: 767px) {
        float: left;
        margin: 5px;
        margin-right: 20px;
        width: calc(50% - 35px);
        height: 23px;
        line-height: 23px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    margin-top: -8px;
  }
}
</style>
