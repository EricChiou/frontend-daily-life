<template>
  <div id="ng-notebook-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
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
import Cons from '../../../util/constants';

export default {
  data: () => ({ article: Cons.article.reactNotebook })
};
</script>
