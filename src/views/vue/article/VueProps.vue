<template>
  <div id="vue-props">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">Vue Porps</div>
        <hr />
        <div class="text">
          通常每個 components 之間是互相獨立的。在 Vue 中，當父元件想要傳遞資料給子元件時，就需要通過使用 Props 來傳遞。
          <br />
          <br />首先父元件的寫法：
          <div class="code-area">
            <div class="code">
              &lt;template&gt;
              <br /><span class="comment">&nbsp;&nbsp;&lt;!-- 在 HTML 中，變數需使用 kebab-case 命名規則 --&gt;</span>
              <br />&nbsp;&nbsp;&lt;ChildComponent @user-name="userName" @data="data" @likes="likes" @publish="publish"&gt;&lt;/ChildComponent&gt;
              <br />&lt;/template&gt;
              <br />
              <br />&lt;script&gt;
              <br />&nbsp;&nbsp;export default {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;data: () =&gt; ({
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;userName: 'myName',
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data: {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: 'value'
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;likes: 10,
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;publish: true
              <br />&nbsp;&nbsp;&nbsp;&nbsp;})
              <br />&nbsp;&nbsp;}
              <br />&lt;/script&gt;
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />注意在 HTML 中必須使用 kebab-case 的命名規則，在 javascript 中則是使用 camelCase。
          <br />
          <br />接下來子元件：
          <div class="code-area">
            <div class="code">
              &lt;template&gt;
              <br />&nbsp;&nbsp;&lt;div&gt;{{userName}}&lt;/div&gt;
              <br />&lt;/template&gt;
              <br />
              <br />&lt;script&gt;
              <br />&nbsp;&nbsp;export default {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;props: {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;userName: String,
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data: Object,
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;likes: Number,
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;publish: Boolean
              <br />&nbsp;&nbsp;&nbsp;&nbsp;}
              <br />&nbsp;&nbsp;}
              <br />&lt;/script&gt;
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />這樣的寫法是在將每個 props 中的變數都指定類型，這不僅可以當作文檔，且當傳送錯誤的資料類型時，Vue 會提示錯誤，相當方便。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../constants/constants';
import Clipboard from '../../../util/clipboard';

export default {
  data: () => ({
    article: Cons.article.vueProps,
    userName: '{{userName}}'
  }),
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
