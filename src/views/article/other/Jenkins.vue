<template>
  <div id="jenkins-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        修改 Sudoers 讓 Jenkins 取得 root 權限
        <br>
        <br>輸入：
        <div class="code-area">sudo visudo</div>
        <br>新增一行 "jenkins ALL=(ALL) NOPASSWD: ALL"：
        <div class="code-area">
          # User privilege specification
          <br>root ALL=(ALL:ALL) ALL
          <br>jenkins ALL=(ALL) NOPASSWD: ALL
        </div>
        <br>按 Ctrl+O 存檔, Ctrl+X 離開
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../util/constants';

export default {
  data: () => ({ article: Cons.article.jenkins })
};
</script>

<style lang="scss" scoped>
</style>
