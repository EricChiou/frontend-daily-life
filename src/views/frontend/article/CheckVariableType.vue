<template>
  <div id="article-name">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <BackToList></BackToList>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">typeof</div>
        <hr />
        <div class="text">
          判斷變數屬於哪種原生型別的實例，回傳值為該型別字串。
          <div class="code-area">
            <div class="code">
              <span class="comment">// 8 種原生型別</span>
              <br />'undefined', 'boolean', 'number', 'bigint', 'string', 'object', 'symbol', 'function'
            </div>
          </div>
          <br />使用方式及回傳結果：
          <div class="code-area">
            <div class="code">
              <span class="comment">// 回傳 'undefined'</span>
              <br />typeof undefined;
              <br />
              <br />
              <span class="comment">// 回傳 'boolean'</span>
              <br />typeof true;
              <br />typeof !0;
              <br />typeof !null;
              <br />typeof !undefined;
              <br />
              <br />
              <span class="comment">// 回傳 'number'</span>
              <br />typeof 0;
              <br />typeof Number('123456');
              <br />typeof NaN;
              <br />
              <br />
              <span class="comment">// 回傳 'bigint'</span>
              <br />typeof 123456n;
              <br />
              <br />
              <span class="comment">// 回傳 'string'</span>
              <br />typeof '';
              <br />typeof 'abc';
              <br />
              <br />
              <span class="comment">// 回傳 'object'</span>
              <br />typeof [];
              <br />
              typeof {};
              <br />typeof new Uint16Array();
              <br />typeof null;
              <br />
              <br />
              <span class="comment">// 回傳 'symbol'</span>
              <br />typeof Symbol('hello');
              <br />
              <br />
              <span class="comment">// 回傳 'function'</span>
              <br />
              typeof function() {};
              <br />
              <br />
            </div>
          </div>
        </div>
        <br />
        <div class="sub-header">instanceof</div>
        <hr />
        <div class="text">
          判斷 A 是否屬於或繼承 B 的類別(prototype)，回傳值為布林值。
          <br />
          <br />使用方式及回傳結果：
          <div class="code-area">
            <div class="code">
              null instanceof Object;
              <span class="comment">// false</span>
              <br />undefined instanceof Object;
              <span class="comment">// false</span>
              <br />
              <br />
              ({}) instanceof Object;
              <span class="comment">// true</span>
              <br />[] instanceof Array;
              <span class="comment">// true</span>
              <br />[] instanceof Object;
              <span class="comment">// true</span>
              <br />
              <br />new Blob() instanceof Blob;
              <span class="comment">// true</span>
              <br />new Blob() instanceof Object;
              <span class="comment">// true</span>
              <br />
              <br />123 instanceof Number;
              <span class="comment">// false</span>
              <br />NaN instanceof Number;
              <span class="comment">// false</span>
              <br />
              <br />new Date() instanceof Date;
              <span class="comment">// true</span>
              <br />new Date() instanceof Object;
              <span class="comment">// true</span>
              <br />
              <br />
              let func = () => {};
              <br />func instanceof Function
              <span class="comment">// true</span>
              <br />func instanceof Object
              <span class="comment">// true</span>
              <br />
            </div>
          </div>
          <br />
          <div class="sub-header">結論</div>
          <hr />
          <div class="text">
            在使用 typeof 要多注意 object 型別，許多直覺上應該判斷結果不是 object 的變數實際上都是 object，例如陣列、null，
            <br />因此建議使用 instanceof 來做判斷，當然如果是陣列的話也可以使用 Array.isArray() 來判斷。
          </div>
        </div>
        <br />參考資料：
        <br />&nbsp;&nbsp;
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"
          target="_blank"
        >https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures</a>
        <br />&nbsp;&nbsp;
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof"
          target="_blank"
        >https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof</a>
        <br />&nbsp;&nbsp;
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof"
          target="_blank"
        >https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof</a>
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../constants/constants';
import Clipboard from '../../../util/clipboard';

import BackToList from '../../../components/backtolist/BackToList.vue';

export default {
  components: { BackToList },
  data: () => ({
    article: Cons.article.checkVariableType,
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
a {
  &:hover {
    text-decoration: underline;
  }
}
</style>
