<template>
  <div id="vue-notebook-container">
    <div class="article">
      <div class="title">{{ article.title }}</div>
      <BackToList></BackToList>
      <div class="date">{{ article.date }}</div>
      <div class="summary">{{ article.summary }}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">建立一個基本的 vue component</div>
        <hr />
        <div class="text">
          <div class="code-area">
            <div class="code">
              &lt;template&gt;
              <br /><Tab />&lt;div&gt;&lt;/div&gt; <br />&lt;/template&gt;
              <br />
              <br />&lt;script&gt;
              <br />
              export default {};
              <br />&lt;/script&gt;
              <br />
              <br />&lt;style lang="scss" scoped&gt; <br />&lt;/style&gt;
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
        </div>
        <br />
        <div class="sub-header">寫入變數、函式以及 Lifecycle 的方式</div>
        <hr />
        <div class="text">
          <div class="code-area">
            <div class="code">
              export default {
              <br />
              <Tab />data: () => ({ key: value }), <br /><Tab />computed: {
              <br />
              <Tab /><Tab />demo() { console.log('computed demo'); } <br /><Tab />},
              <br /><Tab />methods: {
              <br />
              <Tab /><Tab />demo2() { console.log('methods demo'); } <br /><Tab />},
              <br />
              <Tab />created() { this.demo; },
              <br />
              <Tab />mounted() { this.demo2(); } <br />};
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />
        </div>
        <div class="sub-header">Vue Lifecycle Hooks</div>
        <hr />
        <div class="text">
          <img src="../../../assets/images/vue_lifecycle.png" />
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
  data: () => ({ article: Cons.article.vueNotebook }),
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
#vue-notebook-container {
  img {
    border: 1px solid #dddddd;
  }
}
</style>
