<template>
  <div id="frontend-container">
    <div class="article-list-container">
      <div class="title">React</div>
      <div class="sub-title">文章列表</div>
      <router-link v-for="content in article" :key="content.link" :to="content.link">
        <div class="article-list">
          <h4>{{content.title}}</h4>
          <div class="date">{{content.date}}</div>
          <div class="summary">{{content.summary}}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Cons from '../../util/constants';

export default {
  data: () => ({
    article: []
  }),
  created() {
    Object.keys(Cons.article).forEach(key => {
      if (Cons.article[key].category === 'react') {
        this.article.push(Cons.article[key]);
      }
    });
  }
};
</script>
