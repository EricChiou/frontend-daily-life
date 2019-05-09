<template>
  <div id="vue-notebook-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">建立一個基本的 vue component</div>
        <hr>
        <div class="text">
          <div class="code-area">
            &lt;template&gt;
            <br>&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;
            <br>&lt;/template&gt;
            <br>
            <br>&lt;script&gt;
            <br>
            export default {};
            <br>&lt;/script&gt;
            <br>
            <br>&lt;style lang="scss" scoped&gt;
            <br>&lt;/style&gt;
          </div>
        </div>
        <br>
        <div class="sub-header">寫入變數、函式以及 Lifecycle 的方式</div>
        <hr>
        <div class="text">
          <div class="code-area">
            export default {
            <br>
            &nbsp;&nbsp;data: () => ({ key: value }),
            <br>&nbsp;&nbsp;computed: {
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;demo: () => { console.log('computed demo'); }
            <br>&nbsp;&nbsp;},
            <br>&nbsp;&nbsp;methods: {
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;demo2: () => { console.log('methods demo'); }
            <br>&nbsp;&nbsp;},
            <br>
            &nbsp;&nbsp;created() { this.demo; },
            <br>
            &nbsp;&nbsp;mounted() { this.demo2(); }
            <br>};
          </div>
          <br>
        </div>
        <div class="sub-header">Vue Lifecycle Hooks</div>
        <hr>
        <div class="text">
          <img src="../../../assets/images/vue_lifecycle.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../util/constants';

export default {
  data: () => ({
    article: Cons.article.vueNotebook
  })
};
</script>

<style lang="scss" scoped>
#vue-notebook-container {
  img {
    border: 1px solid #dddddd;
  }
}
</style>
