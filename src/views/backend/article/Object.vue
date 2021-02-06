<template>
  <div id="article-name">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <BackToList></BackToList>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        接下來會以 Java 的 Spring 框架為基礎來講解 PO、BO、DTO、VO 之間的區別
        <br />
        <br />
        <br />
        <div class="header">PO（Persistent Object）持久物件</div>
        <hr />
        <div class="text">
          持久物件的內部資料會與資料庫的 Table 欄位一一對應，簡單來說一個 PO 就等於是 Table 的一列資料，
          <br />也就是 Hibernate 的 Entity，通常只會出現在 Dao 及 Service 裡面。
        </div>
        <br />
        <br />
        <div class="header">BO（Business Object）業務物件</div>
        <hr />
        <div class="text">
          拿來做資料處理或轉換的物件，通常不光是單純儲存資料，也包含複雜的業務邏輯，
          <br />一般由 Dao 回傳 PO 給 Service，之後在 Service 內進行處理。
        </div>
        <br />
        <br />
        <div class="header">DTO（Data Transfer Object）資料傳輸物件</div>
        <hr />
        <div class="text">當 Service 處理完資料後，如果還需要呼叫外部服務來進行處理的話，會再轉成 DTO 並傳送給外部 API。</div>
        <br />
        <br />
        <div class="header">VO（Value Object / View Object）表現層物件</div>
        <hr />
        <div class="text">前後端互相溝通用的資料物件，只出現在 Controller 和 Service，通常會轉成 json 格式再傳回給前端。</div>
        <br />
        <br />
        <div class="sub-header">關係圖</div>
        <hr />最後用一張簡單的圖來表達 PO、BO、DTO、VO 之間的關係：
        <br />
        <br />
        <img src="../../../assets/images/backend_object_relationship.png" />
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
    article: Cons.article.object,
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
