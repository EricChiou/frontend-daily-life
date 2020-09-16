<template>
  <div id="rsa">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <BackToList></BackToList>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        個人使用 openssl 來產生 RSA 金鑰，使用的作業系統為 Ubuntu 18.04。
        <br />
        <br />
        <div class="sub-header">安裝 openssl</div>
        <hr />
        <div class="text">
          安裝指令：
          <div class="code-area">
            <div class="code">sudo apt install openssl</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
        </div>
        <br />
        <div class="sub-header">產生 Private Key</div>
        <hr />
        <div class="text">
          輸入指令：
          <div class="code-area">
            <div class="code">openssl genrsa -out private.pem 2048</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />上面指令中 private.pem 為產出私鑰的檔案名稱，2048 為私鑰的 bit 數。
        </div>
        <br />
        <div class="sub-header">產生 Public Key</div>
        <hr />
        <div class="text">
          再來使用剛剛產出的私鑰來產生公鑰。
          <br />
          <br />輸入指令：
          <div class="code-area">
            <div class="code">openssl rsa -pubout -in private.pem -out public.pem</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />指令中 public.pem 為產出公鑰的檔案名稱。
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
  data: () => ({
    article: Cons.article.rsa,
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
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
