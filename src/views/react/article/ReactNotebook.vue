<template>
  <div id="ng-notebook-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <BackToList></BackToList>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">React 基本 Component</div>
        <hr>
        <div class="text">
          <div class="code-area">
            import React, { Component } from 'react';
            <br>
            <br>class Component extends Component {
            <br>&nbsp;&nbsp;render() {
            <br>&nbsp;&nbsp;&nbsp;&nbsp;return (
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;);
            <br>&nbsp;&nbsp;}
            <br>}
            <br>
            <br>export default Component;
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg">
            </div>
          </div>
          <br>
        </div>
        <div class="sub-header">React Lifecycle Hooks</div>
        <hr>
        <div class="text">
          <img src="../../../assets/images/react_lifecycle.png">
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
  data: () => ({ article: Cons.article.reactNotebook }),
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
