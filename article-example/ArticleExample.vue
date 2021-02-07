<template>
  <div id="article-name">
    <div class="article">
      <div class="title">{{ article.title }}</div>
      <BackToList></BackToList>
      <div class="date">{{ article.date }}</div>
      <div class="summary">{{ article.summary }}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="header">Title</div>
        <hr />
        <div class="sub-header">Sub Title</div>
        <div class="text">text</div>
        <CodeBlock @copy="true">
          {<br />
          <Tab />code <Comment>// comment</Comment><br />
          }<br />
        </CodeBlock>
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../constants/constants';

import BackToList from '../../../components/backtolist/BackToList.vue';
import CodeBlock from '../../../components/code-block/CodeBlock.vue';
import Comment from '../../../components/comment/Comment.vue';
import Tab from '../../../components/tab/Tab.vue';

export default {
  components: {
    BackToList,
    CodeBlock,
    Comment,
    Tab,
  },
  data: () => ({
    article: Cons.article.ArticleName,
  }),
};
</script>

<style lang="scss" scoped>
</style>
