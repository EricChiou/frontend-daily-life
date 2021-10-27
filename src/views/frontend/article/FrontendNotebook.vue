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
              <br /><Tab />&lt;meta charset="utf-8"&gt;
              <br /><Tab />&lt;meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"&gt;
              <br /><Tab />&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"&gt;
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
              @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
              <br />
              <br />html,
              <br />body {
              <br /><Tab />margin: 0;
              <br /><Tab />padding: 0;
              <br /><Tab />font-family: 'Inconsolata', 'Microsoft JhengHei', Arial, Helvetica, sans-serif, monospace;
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
              <br /><Tab />@if $width==l {
              <br /><Tab /><Tab />@media only screen and (max-width: 1440px) {
              <br /><Tab /><Tab /><Tab />@content;
              <br /><Tab /><Tab />}
              <br /><Tab />}
              <br />
              <br /><Tab />@else if $width==m {
              <br /><Tab /><Tab />@media only screen and (min-width: 1240px) and (max-width: 1439px) {
              <br /><Tab /><Tab /><Tab />@content;
              <br /><Tab /><Tab />}
              <br /><Tab />}
              <br />
              <br /><Tab />@else if $width==ms {
              <br /><Tab /><Tab />@media only screen and (min-width: 905px) and (max-width: 1239px) {
              <br /><Tab /><Tab /><Tab />@content;
              <br /><Tab /><Tab />}
              <br /><Tab />}
              <br />
              <br /><Tab />@else if $width==s {
              <br /><Tab /><Tab />@media only screen and (min-width: 600px) and (max-width: 904px) {
              <br /><Tab /><Tab /><Tab />@content;
              <br /><Tab /><Tab />}
              <br /><Tab />}
              <br />
              <br /><Tab />@else if $width==xs {
              <br /><Tab /><Tab />@media only screen and (max-width: 599px) {
              <br /><Tab /><Tab /><Tab />@content;
              <br /><Tab /><Tab />}
              <br /><Tab />}
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
              $colors: ( //
              <br /><Tab />black: (base: #000000, light: #454545),
              <br /><Tab />white: (base: #ffffff, dark: #dddddd),
              <br />);
              <br />
              <br />@function theme($color, $type: 'base', $map: $colors) {
              <br /><Tab />@if (map-has-key($map, $color)) {
              <br /><Tab /><Tab />$value: map-get($map, $color);
              <br />
              <br /><Tab /><Tab />@if type-of($value)==color {
              <br /><Tab /><Tab /><Tab />@return $value;
              <br /><Tab /><Tab />}
              <br />
              <br /><Tab /><Tab />@if (map-has-key($value, $type)) {
              <br /><Tab /><Tab /><Tab />$value: map-get($value, $type);
              <br />
              <br /><Tab /><Tab /><Tab />@if type-of($value)==color {
              <br /><Tab /><Tab /><Tab /><Tab />@return $value;
              <br /><Tab /><Tab /><Tab />}
              <br /><Tab /><Tab />}
              <br /><Tab />}
              <br />
              <br /><Tab />@return null;
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
import Tab from '../../../components/tab/Tab.vue';

import BackToList from '../../../components/backtolist/BackToList.vue';

export default {
  components: { BackToList, Tab },
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
