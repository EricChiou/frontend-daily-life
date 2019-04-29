<template>
  <div id="html-head-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="header">html 的語系設定</div>
        <hr>
        <div class="text">
          在 html 中常常可以看到這樣的語系設定：
          <div class="code-area">&lt;html lang="en"&gt;</div>
          <br>然而到底為何要設定語系？
          <br>其實是為了讓 Google 等搜尋引擎能夠更好更快的理解你網站的內容，也就是說如果你的網站並沒有要做 SEO，語系的設定是可以忽略的。
          <br>
          <br>而要將自己的網站設定成繁體中文，並不是以往常見的 zh-tw，而是 zh-Hant，下表為各種中文的語系設定：
          <table>
            <tr>
              <td>zh</td>
              <td>中文</td>
            </tr>
            <tr>
              <td>zh-Hans</td>
              <td>簡體中文</td>
            </tr>
            <tr>
              <td>zh-Hans-CN</td>
              <td>大陸使用的簡體中文</td>
            </tr>
            <tr>
              <td>zh-Hans-HK</td>
              <td>香港使用的簡體中文</td>
            </tr>
            <tr>
              <td>zh-Hans-MO</td>
              <td>澳門使用的簡體中文</td>
            </tr>
            <tr>
              <td>zh-Hans-SG</td>
              <td>新加坡使用的簡體中文</td>
            </tr>
            <tr>
              <td>zh-Hans-TW</td>
              <td>臺灣使用的簡體中文</td>
            </tr>
            <tr>
              <td>zh-Hant</td>
              <td>繁體中文</td>
            </tr>
            <tr>
              <td>zh-Hant-CN</td>
              <td>大陸使用的繁體中文</td>
            </tr>
            <tr>
              <td>zh-Hant-HK</td>
              <td>香港使用的繁體中文</td>
            </tr>
            <tr>
              <td>zh-Hant-MO</td>
              <td>澳門使用的繁體中文</td>
            </tr>
            <tr>
              <td>zh-Hant-SG</td>
              <td>新加坡使用的繁體中文</td>
            </tr>
            <tr>
              <td>zh-Hant-TW</td>
              <td>臺灣使用的繁體中文</td>
            </tr>
          </table>
          <br>
        </div>
        <div class="header">head 中的各種設定</div>
        <hr>
        <div class="text">
          head 中有各種設定，這邊會挑選幾個比較重要或常見的來說明。
          <br>
          <br>
          <div class="sub-header">&lt;base href="/"&gt;</div>這個設定是在告訴瀏覽器，從這個網站取得的所有暫存資源，其路徑的根目錄為何。
          <br>
          <br>
          <div class="sub-header">&lt;meta charset="utf-8"&gt;</div>告訴瀏覽器這個 html 中的內文字串要用何種格式讀取。
          <br>
          <br>
          <div
            class="sub-header"
          >&lt;meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"&gt;</div>設定在移動裝置上，畫面的寬度及初始縮放倍率等。
          <br>width=device-width，設定畫面寬度等於螢幕寬度；
          <br>initial-scale=1，將畫面初始縮放倍率設為 1 倍；
          <br>minimum-scale=1，設定畫面縮放的最小倍率為 1 倍；
          <br>maximum-scale=1，設定畫面縮放的最大倍率為 1 倍；
          <br>user-scalable=no，不允許使用者使用縮放畫面。
          <br>
          <br>
          <div
            class="sub-header"
          >&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"&gt;</div>設定各個瀏覽器預設使用的版本。
          <br>IE=edge，設定 IE 使用 Edge 版本開啟網頁；
          <br>chrome=1，IE 有個模擬 Chrome 的兼容模式，這個設定就是開啟這個功能。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../util/constants';

export default {
  data: () => ({ article: Cons.article.htmlSetting })
};
</script>

<style lang="scss" scoped>
</style>
