<template>
  <div id="about-me-container">
    <div class="title">關於我</div>
    <div class="content">
      <iframe src="https://www.calicomoo.ml/about?color=#3a4750&fontSize=18px"></iframe>
      <!-- 前端工程師，平常喜歡玩電腦、看電影、寫寫自己的網站、玩貓！(´ω`)
      <div class="about-img">
        <img src="../../assets/images/play_cat.jpg">
      </div>主修 Angular2，對於 React、Vue 也略有涉略。
      <br>懂一些後端，主要使用過 Golang 和 Nodejs，也寫過 Java 和 Python。
      <br>
      <br>
      <br>我的 Email：
      <a :href="mailTo">miatlab@gmail.com</a>-->
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    mailTo: `mailto:miatlab@gmail.com?subject=${encodeURIComponent(
      'Calico & MooMoo'
    )}`
  })
};
</script>

<style lang="scss" scoped>
#about-me-container {
  color: #3a4750;
  .title {
    margin: 10px 15px;
    font-size: 32px;
    font-weight: bold;
  }
  .content {
    margin: 10px 15px;
    iframe {
      border: none;
      width: 640px;
      max-width: 100%;
      min-height: calc(100vh - 82px);
    }
  }
}
</style>
