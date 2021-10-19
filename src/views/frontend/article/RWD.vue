<template>
  <div id="rwd-container">
    <div class="article">
      <div class="title">{{ article.title }}</div>
      <BackToList></BackToList>
      <div class="date">{{ article.date }}</div>
      <div class="summary">{{ article.summary }}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="header">何謂 RWD</div>
        <hr />
        <div class="text">
          由於行動裝置及網路的興起，越來越多人是從手機、平板等行動裝置瀏覽網頁，而當初以有較大螢幕的桌面電腦為目標而設計的網站，面臨到一旦將畫面縮小到行動裝置上時，
          會變得非常難以操作，許多公司被迫另外開發專門為行動裝置而設計的網站，這提高了開發及維護成本。
          <br />
          <br />RWD 就是在此情境下誕生的設計模式，整個網站的樣式設計(css)，必須隨著當下畫面的寬度而做動態的改變，如此一來就只須要維護一個網站，大大降低了開發及維護成本，
          也隨之產生了一些 RWD 的基本設計規則。
          <br />
          <br />
        </div>
        <div class="header">RWD 基本設計規則</div>
        <hr />
        <div class="text">
          RWD 就是 UI/UX 設計要隨著畫面的寬度做動態調整，但是實際上到底是多寬的時候要做變化呢？其實是有基本規則的，如下圖：
          <br />
          <br />
          <div class="text-center">
            <img src="../../../assets/images/RWD.png" />
            <br />
            <a
              href="https://material.io/design/layout/responsive-layout-grid.html#breakpoints"
              target="_blank"
            >【Google 建議的 RWD 設計規則】</a>
          </div>
          <br />RWD 設計最主要以 600px、1240px、1440px 這三個寬度為主。
          <br />當畫面寬度是 1440px 以上時，我們就視為桌面電腦，會以使用者是操作桌電的前提下去設計 UI/UX。
          <br />而介於 1240px ~ 1439px 之間則視為筆電，600px ~ 1239px 則視為平板。
          <br />一般常見的手機則是介於 0px ~ 599px 之間。
          <br />還有一些比較不常見的寬度分野，如 905px，可以視情況決定要不要針對這些寬度做設計。
          <br />
          <br />
        </div>
        <div class="header">RWD 重要寬度的 css</div>
        <hr />
        <div class="text">
          這邊貼上 RWD 重要寬度所使用的 css，方便使用。
          <br />
          <br />~ 599px
          <div class="code-area">
            <div class="code">@media only screen and (max-width: 599px)</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />600px ~ 1239px
          <div class="code-area">
            <div class="code">@media only screen and (min-width: 600px) and (max-width: 1239px)</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />1240px ~ 1439px
          <div class="code-area">
            <div class="code">@media only screen and (min-width: 1240px) and (max-width: 1439px)</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />1440px ~
          <div class="code-area">
            <div class="code">@media only screen and (min-width: 1440px)</div>
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

import BackToList from '../../../components/backtolist/BackToList.vue';

export default {
  components: { BackToList },
  data: () => ({ article: Cons.article.rwd }),
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
