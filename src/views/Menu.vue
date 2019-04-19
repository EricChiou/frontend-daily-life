<template>
  <div id="menu-container">
    <div class="title">
      <div class="first-line">Frontend</div>
      <div class="second-line">Daily Life</div>
    </div>
    <div class="description">記錄我在前端遇到的大小事、心得及其他相關技術，並推薦一些好用網站。</div>
    <MenuList></MenuList>
    <MenuFooter></MenuFooter>
  </div>
</template>

<script>
import MenuList from '../components/MenuList.vue';
import MenuFooter from '../components/MenuFooter.vue';

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
    font-size: 46px;
    font-weight: bold;
    font-style: italic;
    .first-line {
      text-align: left;
    }
    .second-line {
      text-align: right;
    }
  }
  .description {
    margin: 5px 45px 0 45px;
    font-size: 18px;
    color: #aaaaaa;
  }
  @media only screen and (max-width: 767px) {
    position: relative;
    width: 100%;
    height: 380px;
    .title {
      width: 300px;
      max-width: calc(90vw);
      margin: 0 5vw;
      padding-top: 20px;
      font-size: 40px;
      font-weight: bold;
      font-style: italic;
      text-align: center;
    }
    .description {
      margin: 5px 6vw 0 6vw;
      font-size: 16px;
    }
  }
}
</style>
