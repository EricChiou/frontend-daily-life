<template>
  <div id="frontend-notebook-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <BackToList></BackToList>
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
              <br />&nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1,
              maximum-scale=1, user-scalable=no, viewport-fit=cover"&gt;
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
        </div>
        <br />
        <div class="sub-header">個人愛用的排版及字型設定</div>
        <hr />
        <div class="text">
          <div class="code-area">
            <div class="code">
              @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
              <br />
              <br />html,
              <br />body {
              <br />&nbsp;&nbsp;position: relative;
              <br />&nbsp;&nbsp;margin: 0;
              <br />&nbsp;&nbsp;padding: 0;
              <br />&nbsp;&nbsp;width: 100vw;
              <br />&nbsp;&nbsp;height: 100vh;
              <br />&nbsp;&nbsp;font-family: Helvetica, Arial, 'Noto Sans TC', 'Microsoft JhengHei', Sans-Serif;
              <br />&nbsp;&nbsp;overflow: auto;
              <br />}
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
        </div>
        <br />
        <div class="sub-header">RWD 用的 SCSS 設定</div>
        <hr />
        <div class="text">
          <div class="code-area">
            <div class="code">
              @mixin breakpoint($width) {
              <br />&nbsp;&nbsp;@if $width==xl {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;@media only screen and (max-width: 1200px) {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@content;
              <br />&nbsp;&nbsp;&nbsp;&nbsp;}
              <br />&nbsp;&nbsp;}
              <br />
              <br />&nbsp;&nbsp;@else if $width==l {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;@media only screen and (max-width: 1023px) {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@content;
              <br />&nbsp;&nbsp;&nbsp;&nbsp;}
              <br />&nbsp;&nbsp;}
              <br />
              <br />&nbsp;&nbsp;@else if $width==m {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;@media only screen and (max-width: 767px) {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@content;
              <br />&nbsp;&nbsp;&nbsp;&nbsp;}
              <br />&nbsp;&nbsp;}
              <br />
              <br />&nbsp;&nbsp;@else if $width==s {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;@media only screen and (max-width: 479px) {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@content;
              <br />&nbsp;&nbsp;&nbsp;&nbsp;}
              <br />&nbsp;&nbsp;}
              <br />}
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
        </div>
        <br />
        <div class="sub-header">顏色設定用的 SCSS 設定</div>
        <hr />
        <div class="text">
          <div class="code-area">
            <div class="code">
              $colors: (black: (base:#000000, light:#454545),
              <br />&nbsp;&nbsp;white:(base:#ffffff, dark:#dddddd));
              <br />
              <br />@function theme($color, $type: 'base', $map: $colors) {
              <br />&nbsp;&nbsp;@if (map-has-key($map, $color)) {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;$value: map-get($map, $color);
              <br />
              <br />&nbsp;&nbsp;&nbsp;&nbsp;@if type-of($value)==color {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@return $value;
              <br />&nbsp;&nbsp;&nbsp;&nbsp;}
              <br />
              <br />&nbsp;&nbsp;&nbsp;&nbsp;@if (map-has-key($value, $type)) {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$value: map-get($value, $type);
              <br />
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@if type-of($value)==color {
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@return $value;
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
              <br />&nbsp;&nbsp;&nbsp;&nbsp;}
              <br />&nbsp;&nbsp;}
              <br />
              <br />&nbsp;&nbsp;@return null;
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
import Cons from '../../../constants/constants';
import Clipboard from '../../../util/clipboard';

import BackToList from '../../../components/backtolist/BackToList.vue';

export default {
  components: { BackToList },
  data: () => ({
    article: Cons.article.frontendNotebook,
    link: Cons.article.htmlSetting.link,
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
a {
  font-weight: bold;
  color: #3a4750;
}
</style>
