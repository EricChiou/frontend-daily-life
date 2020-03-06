<template>
  <div id="menu-container">
    <router-link :to="{name:'home'}">
      <div class="title">
        <img class="logo" src="../../assets/images/logo.png" />
        <div class="text">
          <div class="first-line">Frontend</div>
          <div class="second-line">Daily Life</div>
        </div>
      </div>
    </router-link>
    <div class="description">記錄我在前端遇到的大小事、心得及其他相關技術，並推薦一些好用網站。</div>
    <MenuList></MenuList>
    <div class="mobile">
      <MenuFooter></MenuFooter>
    </div>
  </div>
</template>

<script>
import MenuList from './menu-components/MenuList.vue';
import MenuFooter from './menu-components/MenuFooter.vue';

export default {
  components: { MenuList, MenuFooter }
};
</script>

<style scoped lang="scss">
#menu-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 400px;
  color: #ffffff;
  background-color: #303841;
  .title {
    margin: 10vh 40px 0 40px;
    font-size: 42px;
    font-weight: bold;
    font-style: italic;
    cursor: pointer;
    .logo {
      width: 100px;
      vertical-align: middle;
    }
    .text {
      display: inline-block;
      margin-left: 10px;
      width: calc(100% - 110px);
      vertical-align: middle;
      .first-line {
        text-align: left;
      }
      .second-line {
        text-align: right;
      }
    }
    &:hover {
      text-decoration: underline;
    }
  }
  .description {
    margin: 5px 45px 0 45px;
    font-size: 18px;
    color: #aaaaaa;
  }
  a {
    color: #ffffff;
  }

  @media only screen and (max-width: 767px) {
    position: relative;
    width: 100%;
    height: 275px;
    .title {
      max-width: calc(90vw);
      margin: 0 5vw;
      padding-top: 5px;
      font-size: 32px;
      font-weight: bold;
      font-style: italic;
      text-align: left;
      .logo {
        width: 85px;
        vertical-align: middle;
      }
      .text {
        margin-left: 15px;
        width: calc(100% - 100px);
        max-width: 260px;
      }
    }
    .description {
      margin: 5px 6vw 0 6vw;
      height: 48px;
      font-size: 16px;
    }
    .mobile {
      display: none;
    }
  }
}
</style>
