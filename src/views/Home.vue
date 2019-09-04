<template>
  <div id="home-container">
    <div class="article-list-container">
      <div class="title">
        全部文章列表
        <div class="quick-search">
          快速搜尋：
          <span class="keyword" @click="quickSearch('All')">All</span>、
          <span class="keyword" @click="quickSearch('筆記本')">筆記本</span>、
          <span class="keyword" @click="quickSearch('RWD')">RWD</span>、
          <span class="keyword" @click="quickSearch('Angular')">Angular</span>、
          <span class="keyword" @click="quickSearch('React')">React</span>、
          <span class="keyword" @click="quickSearch('Vue')">Vue</span>、
          <span class="keyword" @click="quickSearch('HTML')">HTML</span>
        </div>
        <div class="search">
          <input ref="search" type="text" placeholder="搜尋文章標題、摘要" @change="search" />
        </div>
      </div>
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
  methods: {
    search(e) {
      this.filterArticle(e.target.value);
    },
    quickSearch(keyword) {
      if (keyword === 'All') {
        this.$refs.search.value = '';
        this.filterArticle();
      } else {
        this.$refs.search.value = keyword;
        this.filterArticle(keyword);
      }
    },
    filterArticle(keyword) {
      this.article = [];
      if (keyword) {
        const word = keyword.toLowerCase();
        Object.keys(Cons.article).forEach(key => {
          if (
            Cons.article[key].title.toLowerCase().indexOf(word) > -1 ||
            Cons.article[key].title.toLowerCase().indexOf(word) > -1
          ) {
            this.article.push(Cons.article[key]);
          }
        });
        this.setUrl(keyword);
      } else {
        Object.keys(Cons.article).forEach(key => {
          this.article.push(Cons.article[key]);
        });
        this.setUrl();
      }
    },
    setUrl(keyword) {
      const search = keyword ? `?keyword=${keyword}` : '';
      window.history.replaceState(
        null,
        null,
        `${window.location.href.split('?')[0]}${search}`
      );
    }
  },
  mounted() {
    const search = window.location.href.split('?')[1];
    if (search) {
      const params = search.split('&');
      params.forEach(param => {
        const data = param.split('=');
        if (data.length === 2) {
          if (data[0] === 'keyword') {
            const keyword = decodeURIComponent(data[1]);
            this.$refs.search.value = keyword;
            this.filterArticle(keyword);
          }
        }
      });
    } else {
      this.filterArticle();
    }
  }
};
</script>

<style lang="scss" scoped>
#home-container {
  .article-list-container {
    .title {
      padding-bottom: 5px;
      border-bottom: 1px dashed #cccccc;

      .search {
        font-size: 18px;

        input {
          padding: 2px 3px 0px 3px;
          font-size: 18px;
          color: #555555;
        }
      }

      .quick-search {
        font-size: 16px;
        font-weight: normal;
        color: #888888;

        .keyword {
          cursor: pointer;
          font-style: italic;
          text-decoration: underline;

          &:hover {
            font-weight: bold;
          }

          &:active {
            color: #666666;
          }
        }
      }
    }
  }
}
</style>
