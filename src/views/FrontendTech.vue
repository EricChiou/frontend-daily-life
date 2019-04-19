<template>
  <div id="frontend-tech-container">
    <div class="title">前端技術</div>
    <div class="sub-title">文章列表</div>
    <div class="article" v-for="content in article" :key="content.link">
      <h4>{{content.title}}</h4>
      <div class="date">{{content.date}}</div>
      <div class="summary">{{content.summary}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    article: [
      {
        title: '前端趨勢探討',
        date: '2019 / 04 / 19',
        summary:
          '討論前端發展趨勢，以及對目前主流的三大框架 React、Angular 及 Vue 之間做些簡單的對比和使用心得。',
        link: ''
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
#frontend-tech-container {
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
  .article {
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
      padding: 0 2px;
      color: #aaaaaa;
    }
    .summary {
      margin: 10px 0 20px 0;
      padding: 0 2px;
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
    .article {
      h4 {
        font-size: 20px;
      }
      .summary {
        margin: 5px 0 10px 0;
      }
    }
  }
}
</style>
