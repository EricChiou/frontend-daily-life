<template>
  <div id="article-name">
    <div class="article">
      <div class="title">{{ article.title }}</div>
      <BackToList></BackToList>
      <div class="date">{{ article.date }}</div>
      <div class="summary">{{ article.summary }}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="header">Deep Copy</div>
        <hr />
        <div class="sub-header">JS 版本</div>
        <div class="code-area">
          <div class="code">
            function deepCopy(source) {<br />
            <Tab /><span class="comment">// check primitive data type</span><br />
            <Tab />if (source !== Object(source)) {<br />
            <Tab /><Tab />return source;<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Function) {<br />
            <Tab /><Tab />return source;<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Date) {<br />
            <Tab /><Tab />return new Date(source.getTime());<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Array) {<br />
            <Tab /><Tab />return source.map((data)=> deepCopy(data));<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Object) {<br />
            <Tab /><Tab />const result = {};<br />
            <Tab /><Tab />for (const [key, value] of Object.entries(source)) {<br />
            <Tab /><Tab /><Tab />result[key] = deepCopy(value);<br />
            <Tab /><Tab />}<br />
            <Tab /><Tab />return result;<br />
            <Tab />}<br />
            <br />
            <Tab />return source;<br />
            }
          </div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />
        <div class="sub-header">TS 版本</div>
        <div class="code-area">
          <div class="code">
            function deepCopy(source: any): any {<br />
            <Tab /><span class="comment">// check primitive data type</span><br />
            <Tab />if (source !== Object(source)) {<br />
            <Tab /><Tab />return source;<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Function) {<br />
            <Tab /><Tab />return source;<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Date) {<br />
            <Tab /><Tab />return new Date(source.getTime());<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Array) {<br />
            <Tab /><Tab />return source.map((data)=> deepCopy(data));<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Object) {<br />
            <Tab /><Tab />const result: any = {};<br />
            <Tab /><Tab />for (const [key, value] of Object.entries(source)) {<br />
            <Tab /><Tab /><Tab />result[key] = deepCopy(value);<br />
            <Tab /><Tab />}<br />
            <Tab /><Tab />return result;<br />
            <Tab />}<br />
            <br />
            <Tab />return source;<br />
            }
          </div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />
        <div class="header">Compare Data</div>
        <hr />
        <div class="sub-header">JS 版本</div>
        <div class="code-area">
          <div class="code">
            function compareData(source, target) {<br />
            <Tab />if (typeof source !== typeof target) {<br />
            <Tab /><Tab />return false;<br />
            <Tab />}<br />
            <br />
            <Tab /><span class="comment">// primitive data type</span><br />
            <Tab />if (source !== Object(source) && target !== Object(target)) {<br />
            <Tab /><Tab />return source === target;<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Function && target instanceof Function) {<br />
            <Tab /><Tab />return source === target;<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Date && target instanceof Date) {<br />
            <Tab /><Tab />return source.getTime() === target.getTime();<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Array && target instanceof Array) {<br />
            <Tab /><Tab />if (source.length !== target.length) { return false; }<br />
            <br />
            <Tab /><Tab />for (let i = 0; i &lt; source.length; i++) {<br />
            <Tab /><Tab /><Tab />if (!compareData(source[i], target[i])) { return false; }<br />
            <Tab /><Tab />}<br />
            <Tab /><Tab />return true;<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Object && target instanceof Object) {<br />
            <Tab /><Tab />for (const key of Object.keys(source)) { if (!(key in target)) { return false; } }<br />
            <Tab /><Tab />for (const key of Object.keys(target)) { if (!(key in source)) { return false; } }<br />
            <br />
            <Tab /><Tab />for (const key of Object.keys(source)) {<br />
            <Tab /><Tab /><Tab />if (!compareData(source[key], target[key])) { return false; }<br />
            <Tab /><Tab />}<br />
            <Tab /><Tab />return true;<br />
            <Tab />}<br />
            <br />
            <Tab />return false;<br />
            }
          </div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />
        <div class="sub-header">TS 版本</div>
        <div class="code-area">
          <div class="code">
            function compareData(source: any, target: any): boolean {<br />
            <Tab />if (typeof source !== typeof target) {<br />
            <Tab /><Tab />return false;<br />
            <Tab />}<br />
            <br />
            <Tab /><span class="comment">// primitive data type</span><br />
            <Tab />if (source !== Object(source) && target !== Object(target)) {<br />
            <Tab /><Tab />return source === target;<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Function && target instanceof Function) {<br />
            <Tab /><Tab />return source === target;<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Date && target instanceof Date) {<br />
            <Tab /><Tab />return source.getTime() === target.getTime();<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Array && target instanceof Array) {<br />
            <Tab /><Tab />if (source.length !== target.length) { return false; }<br />
            <br />
            <Tab /><Tab />for (let i = 0; i &lt; source.length; i++) {<br />
            <Tab /><Tab /><Tab />if (!compareData(source[i], target[i])) { return false; }<br />
            <Tab /><Tab />}<br />
            <Tab /><Tab />return true;<br />
            <Tab />}<br />
            <br />
            <Tab />if (source instanceof Object && target instanceof Object) {<br />
            <Tab /><Tab />for (const key of Object.keys(source)) { if (!(key in target)) { return false; } }<br />
            <Tab /><Tab />for (const key of Object.keys(target)) { if (!(key in source)) { return false; } }<br />
            <br />
            <Tab /><Tab />for (const key of Object.keys(source)) {<br />
            <Tab /><Tab /><Tab />if (!compareData(source[key], target[key])) { return false; }<br />
            <Tab /><Tab />}<br />
            <Tab /><Tab />return true;<br />
            <Tab />}<br />
            <br />
            <Tab />return false;<br />
            }
          </div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
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
    article: Cons.article.deepCopyAndCompareData,
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
