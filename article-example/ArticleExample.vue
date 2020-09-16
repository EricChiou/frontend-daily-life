<template>
  <div id="article-name">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <BackToList></BackToList>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">Title</div>
        <hr />
        <div class="text">
          <div class="code-area">
            <div class="code">code</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../constants/constants';
import Clipboard from '../../../util/clipboard';

import BackToList from '../../../components/backtolist/BackToList.vue';

export default {
  components: { BackToList },
  data: () => ({
    article: Cons.article.ArticleName
  }),
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
