<template>
  <div id="about-me-container">
    <div class="title">關於我</div>
    <div class="content">
      <div class="left-block">
        目前是個前端工程師，平常喜歡玩電腦、看電影、寫寫自己的網站、玩貓！(´ω`)
        <br>
        <br>主修 Angular2，對於 React、Vue 也略有涉略。
        <br>會一些後端，主要使用過 Golang 和 Nodejs，也碰過一點 Java 和 Python。
        <br>
        <br>可是其實本人以前在研究所寫的是 c (遮臉)。
        <br>
        <br>我的 Email：miatlab@gmail.com
      </div>
      <div class="right-block">
        <img src="../assets/images/play_cat.jpg">
        <br>(玩貓中)
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
    font-size: 18px;
    .left-block,
    .right-block {
      display: inline-block;
      margin-bottom: 5px;
      vertical-align: top;
    }
    .right-block {
      margin-left: 5px;
      width: 150px;
      text-align: center;
    }
    @media only screen and (max-width: 1200px) {
      .left-block,
      .right-block {
        display: block;
      }
      .right-block {
        margin-left: 0;
        width: 100%;
        img {
          display: inline-block;
        }
      }
    }
  }
}
</style>
