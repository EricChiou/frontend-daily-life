<template>
  <div id="seo">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">如何做好 SEO</div>
        <hr />
        <div class="text">
          &emsp;&emsp;首先第一點，SPA（Single Page Application）架構的網站對於 SEO 非常不友善，原因在於 SPA 架構的 HTML 只會有一個 index.html，剩下的事情全部由 JS 處理，導致不管搜尋引擎如何進行爬蟲，總是只能爬到同一份 index.html 及同一份 tag 設定。因此如果需要有良好的 SEO 的話，就需要做 SSR（Server Side Render）來確保每個頁面都能有自己想要的 SEO 設定。
          <br />
          <br />&emsp;&emsp;第二點，雖然設定 tag 很重要，但是最重要的依然是把網站內容做好，現在的搜尋引擎越來越聰明，要想在 tag 設定騙過它越來越困難，因此把內容做好雖然聽起來像廢話，但卻是最有效的方法。例如每個頁面都要有能回到首頁的連結，這時搜尋引擎就能很清楚的知道哪一個是首頁，進而顯示在搜尋結果中。
        </div>
        <br />
        <div class="sub-header">各種 Tag 設定</div>
        <hr />
        <div class="text">
          <div class="code-area">
            <div class="code">&lt;title&gt;網頁標題&lt;/title&gt;</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>title 在設定上需要注意的有：
          <ul>
            <li>1. title 會顯示在瀏覽器的頁籤上，也會顯示在搜尋結果的標題。</li>
            <li>2. 比較理想的格式為："主要關鍵字 - 次要關鍵字 | 廠牌名稱"。</li>
            <li>3. 建議每個頁面都要有自己獨特的標題。</li>
            <li>4. 不要塞一堆關鍵字在 title 裡</li>
          </ul>
          <br />
          <div class="code-area">
            <div class="code">&lt;meta name="keywords" content="..."&gt;</div>
          </div>meta keyword 由於被過度濫用，目前搜尋引擎已經沒有在使用，甚至會被扣分，因此建議不要使用。
          <br />
          <br />
          <div class="code-area">
            <div class="code">&lt;meta name="description" content="網頁摘要..."&gt;</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>網頁摘要，就是搜尋結果標題底下的字，幫助使用者快速了解網頁內容，一般建議中文 80 字內，英文 160 字內。
          <br />
          <br />
          <div class="code-area">
            <div class="code">
              &lt;meta property="og:type" content="網站類型" /&gt;
              <br />&lt;meta property="og:title" content="網站標題" /&gt;
              <br />&lt;meta property="og:site_name" content="網站名稱" /&gt;
              <br />&lt;meta property="og:description" content="網站描述" /&gt;
              <br />&lt;meta property="og:url" content="網址" /&gt;
              <br />&lt;meta property="og:image" content="縮圖網址" /&gt;
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>社群類 tag 主要給 FB、LINE 等社群網站使用。
          <br />縮圖注意事項：
          <ul>
            <li>檔案大小不要超過 8 MB</li>
            <li>尺寸要大於 200 x 200</li>
            <li>大型縮圖建議最小尺寸 600 x 315（比例 1.91 : 1）</li>
            <li>小型縮圖建議最小尺寸 600 x 600（比例 1 : 1）</li>
          </ul>
          <br />詳細說明可以在 FB 的官方文件找到：
          <a
            href="https://developers.facebook.com/docs/sharing/best-practices"
            target="_blank"
          >連結在此</a>
          <br />
          <br />
          <div class="code-area">
            <div class="code">
              &lt;meta itemprop="name" content="網站名稱或標題" /&gt;
              <br />&lt;meta itemprop="image" content="縮圖網址" /&gt;
              <br />&lt;meta itemprop="description" content="網站描述" /&gt;
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>以上三行主要用於 Google Plus。
          <br />
          <br />
          <div class="code-area">
            <div class="code">
              &lt;meta name="twitter:card" content="卡片類型" /&gt;
              <br />&lt;meta name="twitter:site" content="卡片 footer 內容" /&gt;
              <br />&lt;meta name="twitter:creator" content="網站作者" /&gt;
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>以上主要使用於 Twitter Cards，卡片類型可以是 "summary", "summary_large_image", "app" 或 "player" 其中一種，其餘設定一樣可以使用 og 來完成。
          <br />
          <br />詳細說明可以在 Twitter 的官方文件找到：
          <a
            href="https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html"
            target="_blank"
          >連結在此</a>
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
    article: Cons.article.seo
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
