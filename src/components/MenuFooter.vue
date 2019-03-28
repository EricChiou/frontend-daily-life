<template>
  <div id="menu-footer-container">
    <ul>
      <li>About</li>
      <span class="vertical-line">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <li>Entrance</li>
      <span class="vertical-line">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <li>
        <img src="../assets/images/github.png" width="20" height="20">Github
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#menu-footer-container {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 18px;
  text-align: center;
  color: #aaaaaa;
  ul {
    margin: 15px 0;
    padding: 0;
    li {
      display: inline-block;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
      img {
        margin-right: 4px;
        margin-bottom: -3px;
      }
    }
    .vertical-line {
      font-size: 20px;
    }
  }
}
</style>
