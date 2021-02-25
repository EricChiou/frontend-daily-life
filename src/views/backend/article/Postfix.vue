<template>
  <div id="article-name">
    <div class="article">
      <div class="title">{{ article.title }}</div>
      <BackToList></BackToList>
      <div class="date">{{ article.date }}</div>
      <div class="summary">{{ article.summary }}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="header">安裝 Postfix</div>
        <hr />
        <CodeBlock>sudo apt-get install postfix</CodeBlock>
        <br />
        <div class="sub-header">注意事項</div>
        <div class="text">
          安裝 Postfix 時可直接在安裝過程中設定一些事項，因此建議從本機安裝，不要使用遠端連線安裝。
        </div>
        <br />
        <div class="header">設定 Postfix</div>
        <hr />
        <div class="sub-header">General type of configuration</div>
        <CodeBlock :copy="false">選擇 Internet Site</CodeBlock>
        <br />
        <div class="sub-header">System mail name</div>
        <CodeBlock :copy="false">郵件伺服器名稱，就是 '@' 後面顯示的名稱</CodeBlock>
        <br />
        <div class="sub-header">Other destinations to accept mail for</div>
        <CodeBlock :copy="false">設定收到的信會轉給哪些 user</CodeBlock>
        <br />
        <div class="sub-header">Force synchronous updates on mail queue</div>
        <CodeBlock :copy="false">選 No</CodeBlock>
        <br />
        <div class="sub-header">Mailbox size limit</div>
        <CodeBlock :copy="false">郵件儲存數量上限，0 代表無上限</CodeBlock>
        <br />
        <div class="sub-header">Local address extension character</div>
        <CodeBlock :copy="false">預設使用 '+'</CodeBlock>
        <br />
        <div class="sub-header">Internet protocols to use</div>
        <CodeBlock :copy="false">選 all</CodeBlock>
        <br />
        <div class="header">本地測試</div>
        <hr />
        輸入 "telnet localhost 25" 與 Postfix 進行連線
        <CodeBlock>telnet localhost 25</CodeBlock>
        <br />
        設定寄件者信箱
        <CodeBlock>mail from: system@mail.com</CodeBlock>
        設定收件者信箱
        <CodeBlock>rcpt to: user@mail.com</CodeBlock>
        <br />
        輸入 "data" 開始寫入信件內容
        <CodeBlock>data</CodeBlock>
        信件標題
        <CodeBlock>Subject: Test send mail</CodeBlock>
        信件內容
        <CodeBlock>Hello, xxx.</CodeBlock>
        最後單獨一行輸入 "." 結束寫入信件
        <CodeBlock>.</CodeBlock>
        <br />
        成功之後會看到下面類似指令
        <CodeBlock>250 2.0.0 Ok: queued as DCF05E80063B</CodeBlock>
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../constants/constants';

import BackToList from '../../../components/backtolist/BackToList.vue';
import CodeBlock from '../../../components/code-block/CodeBlock.vue';
// import Comment from '../../../components/comment/Comment.vue';
// import Tab from '../../../components/tab/Tab.vue';

export default {
  components: {
    BackToList,
    CodeBlock,
    // Comment,
    // Tab,
  },
  data: () => ({
    article: Cons.article.postfix,
  }),
};
</script>

<style lang="scss" scoped>
</style>
