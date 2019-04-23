<template>
  <div id="html-head-container">
    <div class="title">HTML 內的 &lt;head&gt;</div>
    <div class="date">2019 / 04 / 23</div>
    <div class="under-line"></div>
    <div class="content">
      <br>
      <div class="header">html 的語系設定</div>
      <hr>在 html 中可以看到這樣的語系設定：
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#html-head-container {
  .title {
    margin: 10px 15px 0 15px;
    font-size: 32px;
    font-weight: bold;
    color: #3a4750;
  }
  .date {
    margin: 0 17px 5px 17px;
    font-size: 16px;
    color: #aaaaaa;
  }
  .under-line {
    margin: 0 15px;
    border-bottom: 1px dashed #cccccc;
  }
  .content {
    margin: 5px 15px 10px 15px;
    font-size: 18px;
    line-height: 24px;
    color: #303841;
    .name {
      text-decoration: underline;
    }
    .header {
      font-size: 22px;
      font-weight: bold;
      color: #3a4750;
    }
    .sub-header {
      font-size: 20px;
      font-weight: bold;
      color: #3a4750;
    }
    .text-center {
      text-align: center;
    }
    img {
      max-width: 100%;
    }
    ul {
      margin: 0;
    }
    .code-area {
      padding: 5px 8px;
      font-size: 16px;
      background-color: #eeeeee;
      border-radius: 4px;
    }
    table {
      border-collapse: collapse;
      th {
        color: #eeeeee;
        background-color: #3a4750;
      }
      th,
      td {
        width: 25%;
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px 5px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .title {
      font-size: 28px;
    }
  }
}
</style>
