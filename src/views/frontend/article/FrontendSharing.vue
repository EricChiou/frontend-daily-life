<template>
  <div id="article-name">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <BackToList></BackToList>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">Subject</div>
        <hr />
        <div class="text">
          RxJS 的 Subject 是一種特殊的 Observable 類型，它允許擁有多個 Observer 且能將資料廣播給這些 Observer。普通的 Observable 只能有一個 Observer。
          <br />
          <br />利用 subscribe 來成為一個 Subject 的 Observer，並使用 next 來觸發事件，傳遞資料給所有 Observer。
          <br />
          <br />
          <div class="sub-header">一. 建立一個 Subject</div>
          <hr />
          <div class="code-area">
            <div class="code">
              import { Subject } from 'rxjs';
              <br />
              <br />const subject = new Subject();
              <br />
              <br />export default {
              <br /><Tab /><Tab />emit: (data) => subject.next(data),
              <span
                class="comment"
              >// 呼叫此 function 觸發 Subject</span>
              <br /><Tab /><Tab />emitted: () => subject.asObservable()
              <span
                class="comment"
              >// 訂閱此 function 監聽 Subject</span>
              <br />};
            </div>
          </div>
          <br />
          <div class="sub-header">二. 監聽 Subject</div>
          <hr />
          <div class="code-area">
            <div class="code">
              import Sharing from 'path/to/sharing';
              <br />
              <br />
              Sharing.emitted().subscribe((data) => {});
              <span class="comment">// 訂閱 Subject</span>
            </div>
          </div>
          <br />
          <div class="sub-header">三. 觸發 Subject</div>
          <hr />
          <div class="code-area">
            <div class="code">
              import Sharing from 'path/to/sharing';
              <br />
              <br />Sharing.emit(data);
              <span class="comment">// 觸發 Subject</span>
            </div>
          </div>
          <br />
          <div class="sub-header">後記</div>
          <hr />
          雖然 Subject 很好用，但是由於在程式邏輯上會不斷跳到其他地方去，用太多的話容易造成程式維護上的困難，所以在使用上要盡量慎重。
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
  data: () => ({
    article: Cons.article.frontendSharing,
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
