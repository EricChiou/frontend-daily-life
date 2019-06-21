<template>
  <div id="react-props-state-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">Props</div>
        <hr>
        <div class="text">
          props 是從父元件傳遞資料至子元件的方法，props 是唯讀的。
          <br>
          <br>父元件傳遞資料 dataName 給子元件並命名為 name
          <div class="code-area">
            import React, { Component } from 'react';
            <br>import Child from './Child'
            <br>
            <br>class App extends Component {
            <br>&nbsp;&nbsp;render() {
            <br>&nbsp;&nbsp;&nbsp;&nbsp;return (
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Child name="dataName"/&gt;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;);
            <br>&nbsp;&nbsp;}
            <br>}
            <br>
            <br>export default App;
          </div>
          <br>子元件接收資料：
          <div class="code-area">
            import React, { Component } from 'react';
            <br>
            <br>class Child extends Component {
            <br>&nbsp;&nbsp;constructor(props) {
            <br>&nbsp;&nbsp;&nbsp;&nbsp;super(props);
            <br>&nbsp;&nbsp;}
            <br>
            <br>&nbsp;&nbsp;render() {
            <br>&nbsp;&nbsp;&nbsp;&nbsp;return (
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;{this.props.name}&lt;/div&gt;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;);
            <br>&nbsp;&nbsp;}
            <br>}
            <br>
            <br>export default Child;
          </div>
        </div>
        <br>
        <div class="sub-header">State</div>
        <hr>
        <div class="text">
          state 是儲存元件自己的資料或狀態，當 state 改變時才會觸發 render。
          <br>
          <br>使用 setState() 修改 state：
          <div class="code-area">
            import React, { Component } from 'react';
            <br>
            <br>class App extends Component {
            <br>&nbsp;&nbsp;constructor() {
            <br>&nbsp;&nbsp;&nbsp;&nbsp;super();
            <br>&nbsp;&nbsp;&nbsp;&nbsp;this.state = {
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;number: 'one'
            <br>&nbsp;&nbsp;&nbsp;&nbsp;};
            <br>&nbsp;&nbsp;}
            <br>
            <br>&nbsp;&nbsp;clickMe(n) {
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;this.setState({number: n});
            <br>&nbsp;&nbsp;}
            <br>
            <br>&nbsp;&nbsp;render() {
            <br>&nbsp;&nbsp;&nbsp;&nbsp;return (
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;{this.state.number}&lt;/h1&gt;
            <br>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={()=>{ clickMe('one'); }}&gt;one&lt;/button&gt;
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={()=>{ clickMe('two'); }}&gt;two&lt;/button&gt;
            <br>&nbsp;&nbsp;&nbsp;&nbsp;);
            <br>&nbsp;&nbsp;}
            <br>}
            <br>
            <br>export default App;
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
  data: () => ({ article: Cons.article.reactPropsAndState }),
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
</style>