<template>
  <div id="react-props-state-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <BackToList></BackToList>
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
            <br><Tab />render() {
            <br><Tab /><Tab />return (
            <br><Tab /><Tab /><Tab />&lt;Child name="dataName"/&gt;
            <br><Tab /><Tab />);
            <br><Tab />}
            <br>}
            <br>
            <br>export default App;
          </div>
          <br>子元件接收資料：
          <div class="code-area">
            import React, { Component } from 'react';
            <br>
            <br>class Child extends Component {
            <br><Tab />constructor(props) {
            <br><Tab /><Tab />super(props);
            <br><Tab />}
            <br>
            <br><Tab />render() {
            <br><Tab /><Tab />return (
            <br>
            <Tab /><Tab /><Tab />&lt;div&gt;{this.props.name}&lt;/div&gt;
            <br><Tab /><Tab />);
            <br><Tab />}
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
            <br><Tab />constructor() {
            <br><Tab /><Tab />super();
            <br><Tab /><Tab />this.state = {
            <br><Tab /><Tab /><Tab />number: 'one'
            <br><Tab /><Tab />};
            <br><Tab />}
            <br>
            <br><Tab />clickMe(n) {
            <br>
            <Tab /><Tab />this.setState({number: n});
            <br><Tab />}
            <br>
            <br><Tab />render() {
            <br><Tab /><Tab />return (
            <br>
            <Tab /><Tab /><Tab />&lt;h1&gt;{this.state.number}&lt;/h1&gt;
            <br>
            <br>
            <Tab /><Tab /><Tab />&lt;button onClick={()=>{ clickMe('one'); }}&gt;one&lt;/button&gt;
            <br>
            <Tab /><Tab /><Tab />&lt;button onClick={()=>{ clickMe('two'); }}&gt;two&lt;/button&gt;
            <br><Tab /><Tab />);
            <br><Tab />}
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
import Cons from '../../../constants/constants';
import Clipboard from '../../../util/clipboard';
import Tab from '../../../components/tab/Tab.vue';

import BackToList from '../../../components/backtolist/BackToList.vue';

export default {
  components: { BackToList, Tab },
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
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
