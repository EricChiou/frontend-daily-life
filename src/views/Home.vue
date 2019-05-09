<template>
  <div id="home-container">
    <div class="article-list-container">
      <div class="title">全部文章列表</div>
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
import Cons from '../util/constants';

export default {
  data: () => ({
    article: []
  }),
  created() {
    Object.keys(Cons.article).forEach(key => {
      this.article.unshift({
        title: Cons.article[key].title,
        date: Cons.article[key].date,
        summary: Cons.article[key].summary,
        link: Cons.article[key].link
      });
    });
  }
};
</script>

<style lang="scss" scoped>
#home-container {
  .article-list-container {
    .title {
      padding-bottom: 5px;
      border-bottom: 1px dashed #cccccc;
    }
  }
}
</style>
