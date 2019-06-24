<template>
  <div id="vue-lazy-loading-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">Vue 的異步組件</div>
        <hr>
        <div class="text">
          <div
            class="code-area"
          >const Component = () => Promise.resolve({ /* component definition */ });</div>
        </div>
        <br>
        <div class="sub-header">Webpack 中的程式碼分割點</div>
        <hr>
        <div class="text">
          <div class="code-area">import('./Component.vue');</div>
        </div>
        <br>
        <div class="sub-header">結合兩者達成 Lazy Loading</div>
        <hr>
        <div class="text">
          <div class="code-area">
            const Component = () => import('./Component.vue');
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg">
            </div>
          </div>
          <br>在 Vue Router 中的使用方法不變，直接使用即可：
          <div class="code-area">
            const router = new VueRouter({
            <br>&nbsp;&nbsp;routes: [
            <br>&nbsp;&nbsp;&nbsp;&nbsp;{ path: '/component', component: Component }
            <br>&nbsp;&nbsp;]
            <br>});
          </div>
        </div>
        <br>
        <div class="sub-header">組件模組分塊</div>
        <hr>
        <div class="text">
          使用 Webpack 特殊註解語法進行組件模組分塊（需要 Webpack 版本 > 2.4）：
          <div class="code-area">
            const Component = () => import(/* webpackChunkName: "group-1" */ './Component.vue');
            <br>const Component2 = () => import(/* webpackChunkName: "group-1" */ './Component2.vue');
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../util/constants';
import Clipboard from '../../../util/clipboard';

export default {
  data: () => ({ article: Cons.article.vueLazyLoading }),
  methods: {
    copy(event) {
      let ele = event.target.parentElement;
      while (ele) {
        if (ele.className === 'code-area') {
          Clipboard.copy2Clipboard(ele);
          break;
        }
        ele = ele.parentElement;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
