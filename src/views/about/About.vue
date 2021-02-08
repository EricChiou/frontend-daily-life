<template>
  <div id="about-me-container">
    <div class="title">關於我</div>
    <div class="content">
      <iframe ref="iframe" :src="iframeUrl"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    iframeUrl: `https://www.calicomoomoo.ml/about?color=${encodeURIComponent('#3a4750')}&fontSize=18px`,
  }),
  created() {
    window.onmessage = (event) => {
      if (event.data.id === 'about') {
        this.$refs.iframe.style.height = `${event.data.height}px`;
      }
    };
  },
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

      @media only screen and (max-width: 767px) {
        min-height: 100vh;
      }
    }
  }
}
</style>
