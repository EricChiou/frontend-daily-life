<template>
  <div id="frontend-container">
    <div class="article-list-container">
      <div class="title">前端</div>
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
    article: [
      {
        title: Cons.article.rwd.title,
        date: Cons.article.rwd.date,
        summary: Cons.article.rwd.summary,
        link: Cons.article.rwd.link
      },
      {
        title: Cons.article.htmlSetting.title,
        date: Cons.article.htmlSetting.date,
        summary: Cons.article.htmlSetting.summary,
        link: Cons.article.htmlSetting.link
      },
      {
        title: Cons.article.frontendTrend.title,
        date: Cons.article.frontendTrend.date,
        summary: Cons.article.frontendTrend.summary,
        link: Cons.article.frontendTrend.link
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
</style>
