<template>
  <div id="vue-lazy-loading-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <BackToList></BackToList>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        當網站內容越來越多時，打包出來的 Javascript 檔案會越來越大，影響頁面載入，因此需要將不同路由的組件分割成不同的 Javascript 檔來載入，以此來提高網站效能。
        <br>
        <br>
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
            <br><Tab />routes: [
            <br><Tab /><Tab />{ path: '/component', component: Component }
            <br><Tab />]
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
            <br>
            const Component2 = () => import(/* webpackChunkName: "group-1" */ './Component2.vue');
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../constants/constants';
import Clipboard from '../../../util/clipboard';
import Tab from '../../../components/tab/Tab.vue';

import BackToList from '../../../components/backtolist/BackToList.vue';

export default {
  components: { BackToList, Tab },
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
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
