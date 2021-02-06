<template>
  <div id="jenkins-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <BackToList></BackToList>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="header">讓 Jenkins 在 Ubuntu 18.04 上取得 root 權限</div>
        <hr />
        <div class="text">
          修改 Sudoers 讓 Jenkins 取得 root 權限
          <br />
          <br />輸入：
          <div class="code-area">
            <div class="code">sudo visudo</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />新增一行 "jenkins ALL=(ALL) NOPASSWD: ALL"：
          <div class="code-area">
            <div class="code">
              # User privilege specification
              <br />root ALL=(ALL:ALL) ALL
              <br />jenkins ALL=(ALL) NOPASSWD: ALL
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />按 Ctrl + O 存檔，Ctrl + X 離開
          <br />
          <br />
        </div>
        <div class="header">設定 Jenkins 建置 Golang 專案</div>
        <hr />
        <div class="text">
          使用 Jenkins 執行 go 相關指令時會遇到下面這些問題：
          <br />
          <br />
        </div>
        <div class="sub-header">執行 go build 指令時出現權限不足錯誤</div>
        <hr />
        <div class="text">
          Jenkins 執行 go build 時會出現權限不足問題，且無法使用 sudo go build，會出現找不到指令的錯誤。
          <br />目前找到的解法是創建一個 shell script 檔去執行 go build，此時便可使用 sudo 權限去執行該 shell script 檔。
          <br />
          <br />
        </div>
        <div class="sub-header">執行 go build 時 PATH、GOPATH 和 GROOT 預設路徑錯誤</div>
        <hr />
        <div class="text">
          使用 Jenkins 執行 go build、go run 等指令時，
          會發現 PATH、GOPATH 或 GROOT 會被預設為 Jenkins 底下的資料夾，此時會抓不到之前所安裝的 package 及相關指令，
          因此需要另外設定 GOPATH 和 PATH，在執行 go 指令前加入這兩行：
          <div class="code-area">
            <div class="code">
              export GOPATH=/home/user_name/go
              <br />export PATH=$PATH:/usr/local/go/bin
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />
        </div>
        <div class="sub-header">完整 code</div>
        <hr />
        <div class="text">
          shell script 檔（檔名為 build.sh）：
          <div class="code-area">
            <div class="code">
              #!/bin/bash
              <br />export GOPATH=/home/user_name/go
              <br />export PATH=$PATH:/usr/local/go/bin
              <br />go build main.go
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />Jenkins 執行指令：
          <div class="code-area">
            <div class="code">sudo ./build.sh</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
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
  data: () => ({ article: Cons.article.jenkins }),
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
