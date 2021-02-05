<template>
  <div id="vue-props">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <BackToList></BackToList>
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
              <br /><span class="comment"><Tab />&lt;!-- 在 HTML 中，變數需使用 kebab-case 命名規則 --&gt;</span>
              <br /><Tab />&lt;ChildComponent @user-name="userName" @data="data" @likes="likes"
               @publish="publish"&gt;&lt;/ChildComponent&gt;
              <br />&lt;/template&gt;
              <br />
              <br />&lt;script&gt;
              <br /><Tab />export default {
              <br /><Tab /><Tab />data: () =&gt; ({
              <br /><Tab /><Tab /><Tab />userName: 'myName',
              <br /><Tab /><Tab /><Tab />data: {
              <br /><Tab /><Tab /><Tab /><Tab />key: 'value'
              <br /><Tab /><Tab /><Tab />},
              <br /><Tab /><Tab /><Tab />likes: 10,
              <br /><Tab /><Tab /><Tab />publish: true
              <br /><Tab /><Tab />})
              <br /><Tab />}
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
              <br /><Tab />&lt;div&gt;{{userName}}&lt;/div&gt;
              <br />&lt;/template&gt;
              <br />
              <br />&lt;script&gt;
              <br /><Tab />export default {
              <br /><Tab /><Tab />props: {
              <br /><Tab /><Tab /><Tab />userName: String,
              <br /><Tab /><Tab /><Tab />data: Object,
              <br /><Tab /><Tab /><Tab />likes: Number,
              <br /><Tab /><Tab /><Tab />publish: Boolean
              <br /><Tab /><Tab />}
              <br /><Tab />}
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
import Tab from '../../../components/tab/Tab.vue';

import BackToList from '../../../components/backtolist/BackToList.vue';

export default {
  components: { BackToList, Tab },
  data: () => ({
    article: Cons.article.vueProps,
    userName: '{{userName}}',
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
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
