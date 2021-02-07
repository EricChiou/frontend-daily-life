<template>
  <div id="menu-footer-container">
    <ul>
      <router-link :to="{ name: 'about' }">
        <li>關於我</li>
      </router-link>
      <span class="vertical-line">&nbsp;|&nbsp;</span>
      <li>
        <a href="http://www.calicomoomoo.ml/entrance/" target="_blank">入口網站</a>
      </li>
      <span class="vertical-line"> | </span>
      <li>
        <a href="https://github.com/EricChiou/frontend-daily-life" target="_blank">
          <img src="../../../assets/images/github.png" width="20" height="20" />Github
        </a>
      </li>
    </ul>
    <div class="rights-reserved">© 2019 Calico & MooMoo</div>
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
    margin: 5px 0;
    padding: 0;
    a {
      color: #aaaaaa;
      text-decoration: none;
    }
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
  .rights-reserved {
    margin-bottom: 5px;
    font-size: 16px;
  }

  @media only screen and (max-width: 767px) {
    position: initial;
    padding: 5px 0 8px 0;
    color: #eeeeee;
    background-color: #303841;

    ul {
      a {
        color: #eeeeee;
      }
    }

    .rights-reserved {
      margin-bottom: 0px;
    }
  }
}
</style>
