<template>
  <div id="article-name">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">Rules</div>
        <hr />
        <div class="text">
          <div class="code-area">
            <div class="code">
              <span class="comment">// 關閉斷行規則，在 windows 及 unix 中開發會有不同的斷行符號，因此關閉此規則</span>
              <br />'linebreak-style': ['off'],
              <br />
              <br />
              <span class="comment">// 關閉最末行逗號規則，看情況決定是否增加最末行逗號</span>
              <br />'comma-dangle': ['off'],
              <br />
              <br />
              <span class="comment">// code 單行最大長度建議為 140 個字</span>
              <br />
              'max-len': ['error', { 'code': 140 }],
              <br />
              <br />
              <span class="comment">// 關閉箭頭函式規則，看情況決定如何使用</span>
              <br />'arrow-parens': ['off'],
              <br />
              <br />
              <span class="comment">// 禁止對函式參數再賦予值，但是對 object 內的資料可以再賦予值</span>
              <br />
              'no-param-reassign': ['error', { 'props': false }],
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
              <br />'quotes': ['error', 'single']
              <br />
              <br />
              <span class="comment">// Function 後的括號不要有空格</span>
              <br />'space-before-function-paren': ['error', 'never']
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
import Cons from '../../../util/constants';
import Clipboard from '../../../util/clipboard';

export default {
  data: () => ({
    article: Cons.article.esLint
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
