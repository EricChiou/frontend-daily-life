<template>
  <div id="article-name">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <BackToList></BackToList>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">Rules</div>
        <hr />
        <div class="text">
          <div class="code-area">
            <div class="code">
              <span class="comment">// 關閉斷行規則，在 windows 及 linux 中開發會有不同的斷行符號，因此關閉此規則</span>
              <br />'linebreak-style': ['off'],
              <br />
              <br />
              <span class="comment">// 開啟多行末尾逗號規則</span>
              <br />'comma-dangle': ['error', 'always-multiline'],
              <br />
              <br />
              <span class="comment">// code 單行最大長度建議為 120 個字</span>
              <br />'max-len': ['error', { 'code': 120 }],
              <br />
              <br />
              <span class="comment">// 單檔最大行數限制為 500 行，建議範圍為 100 ~ 500</span>
              <br />'max-lines': ['error', 300],
              <br />
              <br />
              <span class="comment">// 箭頭函式規則，使用 'always' 規則</span>
              <br />'arrow-parens': ['error', 'always'],
              <br />
              <br />
              <span class="comment">// 禁止對函式參數再賦予值，但是對 object 內的資料可以再賦予值</span>
              <br />'no-param-reassign': ['error', { 'props': false }],
              <br />
              <br />
              <span class="comment">// 換行時將操作符放在行末</span>
              <br />'operator-linebreak': ['error', 'after'],
              <br />
              <br />
              <span class="comment">// 行末加上分號</span>
              <br />'semi': ['error', 'always'],
              <br />
              <br />
              <span class="comment">// 不要有多餘的分號</span>
              <br />'no-extra-semi': 'error',
              <br />
              <br />
              <span class="comment">// 字串使用單引號</span>
              <br />'quotes': ['error', 'single'],
              <br />
              <br />
              <span class="comment">// Function 後的括號是否要有空格</span>
              <br />'space-before-function-paren': ['error', {
              <br /><Tab />anonymous: 'never',
              <br /><Tab />named: 'never',
              <br /><Tab />asyncArrow: 'always',
              <br />}],
              <br />
              <br />
              <span class="comment">// 不要有 tab, 用空格取代 tab</span>
              <br />'no-tabs': ['error'],
              <br />
              <br />
              <span class="comment">// 行末不要出現空格</span>
              <br />'no-trailing-spaces': 'error',
              <br />
              <br />
              <span class="comment">// 巢狀 code 不要超過 4 層</span>
              <br />'max-depth': ['error', 4],
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
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
  data: () => ({
    article: Cons.article.esLint,
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
