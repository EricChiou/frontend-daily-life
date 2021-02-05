<template>
  <div id="article-name">
    <div class="article">
      <div class="title">{{ article.title }}</div>
      <BackToList></BackToList>
      <div class="date">{{ article.date }}</div>
      <div class="summary">{{ article.summary }}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="header">安裝 Supervisor</div>
        <hr />
        <div class="code-area">
          <div class="code">sudo apt-get update</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <div class="code-area">
          <div class="code">sudo apt-get install supervisor</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />
        <div class="header">Supervisor 安裝路徑</div>
        <hr />
        <div class="sub-header">config 路徑</div>
        <div class="code-area">
          <div class="code">cd /etc/supervisor/</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <div class="text">可將自己的設定檔放進 /etc/supervisor/conf.d/</div>
        <br />
        <div class="header">Supervisor 相關設定</div>
        <hr />
        <div class="sub-header">前端管理網頁設定</div>
        <div class="code-area">
          <div class="code">
            [inet_http_server]<br />
            port=0.0.0.0:9001 <span class="comment">// 前端管理網頁的 port</span><br />
            username=user <span class="comment">// 登入帳號</span><br />
            password=123456 <span class="comment">// 登入密碼</span><br />
          </div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />
        <div class="sub-header">程序管理設定</div>
        <div class="code-area">
          <div class="code">
            [program:program_name]<br />
            directory=/path/to/folder/ <span class="comment">// 要執行指令的目錄路徑</span><br />
            command=sudo ./program
            <span class="comment">// 要執行的指令，也可以寫一個 shell script</span><br />
            autostart=true <span class="comment">// Supervisor 啟動後自動啟動</span><br />
            startsecs=10
            <span class="comment">// 啟動後 x 秒內沒有異常表示正常啟動，預設為 1 秒</span><br />
            user=root <span class="comment">// 使用哪個使用者啟動，預設為 root</span><br />
            priority=999
            <span class="comment">// 啟動優先順序，值越小越優先，預設為 999</span><br />
            autorestart=true <span class="comment">// 程序中斷後，自動重啟</span><br />
            startretries=3 <span class="comment">// 啟動失敗後自動重啟次數，預設為 3 次</span><br />
            redirect_stderr=false
            <span class="comment">
              // 將錯誤 log (stderr) 合併到一般 log (stdout)，預設為 false
            </span>
            <br />
            stdout_logfile=/path/to/log/out.log
            <span class="comment">// 一般 log 檔案位置</span><br />
            stdout_logfile_maxbytes=50MB
            <span class="comment">// 一般 log 單檔大小，預設為 50MB</span><br />
            stdout_logfile_backups=10
            <span class="comment">// 一般 log 檔案備份數量，預設為 10 個</span><br />
            stderr_logfile=/path/to/log/err.log
            <span class="comment">// 錯誤 log 檔案位置</span><br />
            stderr_logfile_maxbytes=50MB
            <span class="comment">// 錯誤 log 單檔大小，預設為 50MB</span><br />
            stderr_logfile_backups=10
            <span class="comment">// 錯誤 log 檔案備份數量，預設為 10 個</span><br />
            stopasgroup=false
            <span class="comment"> // 程序停止後，該程序組包括子程序也都停止，預設為 false</span>
            <br />
            killasgroup=false
            <span class="comment">
              // 向程序發送 kill 訊號後，向該程序組包括子程序也都發送 kill 訊號，預設為 false
            </span>
          </div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />
        <div class="header">Supervisor 相關指令</div>
        <hr />
        <div class="code-area">
          <div class="code">
            supervisorctl start program_name
            <span class="comment">// 啟動 program_name 程序</span><br />
            supervisorctl stop program_name
            <span class="comment">// 停止 program_name 程序</span><br />
            supervisorctl restart program_name
            <span class="comment">// 重啟 program_name 程序</span><br />
            supervisorctl stop all
            <span class="comment">// 停止全部程序</span><br />
            supervisorctl reload
            <span class="comment">// 重新載入配置，停止原有程序並照新的配置啟動</span><br />
            supervisorctl update
            <span class="comment">// 重啟配置有改動的程序，配置沒有改變的程序不受影響</span><br />
          </div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
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
    article: Cons.article.supervisor,
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
