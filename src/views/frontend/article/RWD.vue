<template>
  <div id="rwd-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="header">何謂 RWD</div>
        <hr>
        <div class="text">
          由於行動裝置及網路的興起，越來越多人是從手機、平板等行動裝置瀏覽網頁，而當初以有較大螢幕的桌面電腦為目標而設計的網站，面臨到一旦將畫面縮小到行動裝置上時，會變得非常難以操作，許多公司被迫另外開發專門為行動裝置而設計的網站，這提高了開發及維護成本。
          <br>
          <br>RWD 就是在此情境下誕生的設計模式，整個網站的樣式設計(css)，必須隨著當下畫面的寬度而做動態的改變，如此一來就只須要維護一個網站，大大降低了開發及維護成本，也隨之產生了一些 RWD 的基本設計規則。
          <br>
          <br>
        </div>
        <div class="header">RWD 基本設計規則</div>
        <hr>
        <div class="text">
          RWD 就是 UI 設計要隨著畫面的寬度做動態調整，但是實際上到底是多寬的時候要做變化呢？其實是有基本規則的，如下圖：
          <br>
          <br>
          <div class="text-center">
            <img src="../../../assets/images/RWD.jpg">
            <br>【RWD 設計基本規則】
          </div>
          <br>RWD 設計最重要的就是 480px、768px、1024px 這三個寬度。
          <br>當畫面寬度是 1024px 以上時，我們就視為桌面電腦，會以使用者是操作電腦的前提下去設計 UI。
          <br>而介於 768px ~ 1024px 之間是視為平板，480px ~ 768px 是大尺寸手機或小型平板。
          <br>一般常見的手機則是介於 320px ~ 480px 之間。
          <br>還有一些比較不常見的寬度分野，像是 720px、900px、1200px 等，可以視情況決定要不要針對這些寬度做設計。
          <br>
          <br>
        </div>
        <div class="header">RWD 重要寬度的 css</div>
        <hr>
        <div class="text">
          這邊貼上 RWD 重要寬度所使用的 css，方便使用。
          <br>
          <br>~ 480px
          <div class="code-area">@media only screen and (max-width: 479px)</div>
          <br>480px ~ 768px
          <div class="code-area">
            @media only screen and (min-width: 480px)
            <br>@media only screen and (max-width: 767px)
          </div>
          <br>768px ~ 1024px
          <div class="code-area">
            @media only screen and (min-width: 768px)
            <br>@media only screen and (max-width: 1023px)
          </div>
          <br>1024px ~
          <div class="code-area">@media only screen and (min-width: 1024px)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../util/constants';

export default {
  data: () => ({ article: Cons.article.rwd })
};
</script>

<style lang="scss" scoped>
</style>
