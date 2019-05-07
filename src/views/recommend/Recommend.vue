<template>
  <div id="frontend-container">
    <div class="article-list-container">
      <div class="title">推薦網站</div>
      <div class="sub-title">圖標、圖形製作</div>
      <div class="web-list">
        <div class="web">
          <a href="https://cooltext.com/" target="_blank">
            Cool Text
            <img src="../../assets/images/link_icon.png" height="12">
          </a>
          將文字加上各種顏色、特效，並製作成圖檔
        </div>
      </div>
      <div class="sub-title">配色、調色盤</div>
      <div class="web-list">
        <div class="web">
          <a href="https://toolskk.com/color" target="_blank">
            ToolKK
            <img src="../../assets/images/link_icon.png" height="12">
          </a>
          讓你方便獲得各種顏色的色碼
        </div>
        <div class="web">
          <a href="https://colorhunt.co/" target="_blank">
            Color Hunt
            <img src="../../assets/images/link_icon.png" height="12">
          </a>
          <a href="https://www.webdesignrankings.com/resources/lolcolors" target="_blank">
            LOL Colors
            <img src="../../assets/images/link_icon.png" height="12">
          </a>
          提供各種好看的配色
        </div>
        <div class="web">
          <a href="https://brandcolors.net/" target="_blank">
            Brand Colors
            <img src="../../assets/images/link_icon.png" height="12">
          </a>
          查看各大品牌 LOGO 的配色
        </div>
        <div class="web">
          <a href="https://coolors.co/" target="_blank">
            Coolors
            <img src="../../assets/images/link_icon.png" height="12">
          </a>
          調色盤，調出自己的配色
        </div>
      </div>
      <!-- <div class="sub-title">版面設計</div>
      <div class="sub-title">畫面、UI設計</div>
      <div class="sub-title">ICONS</div>
      <div class="sub-title">無版權圖片</div>
      <div class="sub-title">免費 DNS 申請</div>
      <div class="sub-title">免費 SSL 申請</div>-->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.web-list {
  margin: 0 15px;
  padding: 0 2px;
  .web {
    margin: 5px 0 15px 0;
    a {
      display: block;
      margin-top: 3px;
      font-weight: bold;
      color: #3a4750;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
