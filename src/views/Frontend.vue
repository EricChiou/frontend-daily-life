<template>
  <div id="frontend-container">
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
</template>

<script>
import Cons from '../util/constants';

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
#frontend-container {
  .title,
  .sub-title {
    color: #3a4750;
    font-weight: bold;
  }
  .title {
    margin: 10px 15px 5px 15px;
    font-size: 32px;
  }
  .sub-title {
    margin: 0px 15px 5px 15px;
    padding: 0 2px;
    font-size: 26px;
    border-bottom: 1px dashed #cccccc;
  }
  .article-list {
    margin: 10px 15px;
    padding: 0 2px;
    color: #3a4750;
    border-bottom: 1px solid #cccccc;
    cursor: pointer;
    h4 {
      margin: 0;
      padding: 0;
      font-size: 24px;
    }
    .date {
      margin: 0 2px;
      color: #aaaaaa;
    }
    .summary {
      margin: 10px 2px 20px 2px;
      color: #303841;
    }
    &:hover {
      h4,
      .summary {
        text-decoration: underline;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .title {
      font-size: 28px;
    }
    .sub-title {
      margin: 0px 15px 5px 15px;
      padding: 0 2px;
      font-size: 22px;
      border-bottom: 1px dashed #cccccc;
    }
    .article-list {
      h4 {
        font-size: 20px;
      }
      .date {
        font-size: 14px;
      }
      .summary {
        margin: 5px 0 10px 0;
      }
    }
  }
}
</style>
