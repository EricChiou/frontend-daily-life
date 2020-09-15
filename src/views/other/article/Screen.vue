<template>
  <div id="rsa">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        使用的作業系統為 Ubuntu 18.04。
        <br />
        <br />
        <div class="header">安裝 Screen</div>
        <hr />
        <div class="text">
          安裝指令：
          <div class="code-area">
            <div class="code">sudo apt-get install screen</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
        </div>
        <br />
        <div class="header">開啟一個新的終端機</div>
        <hr />
        <div class="text">
          安裝好 screen 後輸入指令：
          <div class="code-area">
            <div class="code">screen</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />輸入完上面指令後就會進入 screen 環境，此時會看到一個全新的 shell 畫面，
          <br />這就是已經開啟了一個可以在背景執行的 shell。
        </div>
        <br />
        <br />
        <div class="header">分離（Detach）當前 screen</div>
        <hr />
        <div class="text">
          在執行完要做的事之後，按下 ctrl + a + d，此時就會離開當前的 screen 環境，
          <br />且 shell 會在背景繼續執行。
        </div>
        <br />
        <br />
        <div class="header">重連（Re-attach）screen</div>
        <hr />
        <div class="text">
          輸入指令列出所有正在執行的 screen
          <div class="code-area">
            <div class="code">screen -ls</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />此時會看到以下類似畫面
          <div class="code-area">
            <div class="code">
              There are screens on:
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30788.pts-0.eric&nbsp;&nbsp;&nbsp;(08/17/2020 05:12:01 PM)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Detached)
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22930.pts-0.eric&nbsp;&nbsp;&nbsp;(08/07/2020 05:51:47 PM)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Detached)
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3695.pts-0.eric&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(08/04/2020 09:50:32 AM)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Detached)
              <br />3 Sockets in /run/screen/S-eric.
            </div>
          </div>
          <br />選擇要重連的 screen 的號碼並輸入下列指令：
          <div class="code-area">
            <div class="code">screen -r 30788</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />輸入完後就會回到先前執行的 shell 畫面。
        </div>
        <br />
        <br />
        <div class="header">刪除 screen</div>
        <hr />選擇要刪除的 screen 的號碼並輸入下列指令：
        <div class="code-area">
          <div class="code">screen kill 30788</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />再次輸入 screen -ls，就會發現該 screen 已被刪除：
        <div class="code-area">
          <div class="code">
            There are screens on:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22930.pts-0.eric&nbsp;&nbsp;&nbsp;(08/07/2020 05:51:47 PM)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Detached)
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3695.pts-0.eric&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(08/04/2020 09:50:32 AM)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Detached)
            <br />3 Sockets in /run/screen/S-eric.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../constants/constants';
import Clipboard from '../../../util/clipboard';

export default {
  data: () => ({
    article: Cons.article.screen,
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
