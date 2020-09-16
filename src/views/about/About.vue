<template>
  <div id="about-me-container">
    <div class="title">關於我</div>
    <div class="content">
      <iframe src="https://www.calicomoomoo.ml/about?color=#3a4750&fontSize=18px"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    mailTo: `mailto:miatlab@gmail.com?subject=${encodeURIComponent('Calico & MooMoo')}`,
  }),
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

      @media only screen and (max-width: 767px) {
        min-height: 100vh;
      }
    }
  }
}
</style>
