<template>
  <div id="frontend-notebook-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">常用到的 HTML 設定</div>
        <hr />
        <div class="text">
          <div class="code-area">
            <div class="code">
              &lt;!DOCTYPE html&gt;
              <br />&lt;html lang="zh"&gt;
              <br />
              <br />&lt;head&gt;
              <br />&nbsp;&nbsp;&lt;meta charset="utf-8"&gt;
              <br />&nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"&gt;
              <br />&nbsp;&nbsp;&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"&gt;
              <br />&lt;/head&gt;
              <br />
              <br />&lt;body&gt;
              <br />&lt;/body&gt;
              <br />
              <br />&lt;/html&gt;
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
          <br />
          <router-link :to="link">
            設定的詳細說明可以看這裡
            <img src="../../../assets/images/link_icon.png" height="12" />
          </router-link>
          <br />
          <br />
        </div>
        <div class="sub-header">個人愛用的 CSS 設定</div>
        <hr />
        <div class="text">
          <div class="code-area">
            <div class="code">
              @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
              <br />
              <br />html,
              <br />body {
              <br />&nbsp;&nbsp;margin: 0;
              <br />&nbsp;&nbsp;padding: 0;
              <br />&nbsp;&nbsp;font-family: 'Noto Sans TC', Helvetica, Arial, Sans-Serif, 'Microsoft JhengHei';
              <br />}
            </div>
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
import Cons from '../../../util/constants';
import Clipboard from '../../../util/clipboard';

export default {
  data: () => ({
    article: Cons.article.frontendNotebook,
    link: Cons.article.htmlSetting.link
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
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: #3a4750;
}
</style>
