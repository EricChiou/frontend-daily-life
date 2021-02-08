<template>
  <div id="article-name">
    <div class="article">
      <div class="title">{{ article.title }}</div>
      <BackToList></BackToList>
      <div class="date">{{ article.date }}</div>
      <div class="summary">{{ article.summary }}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="header">各種常用指令</div>
        <hr />
        <div class="sub-header">查看有被監聽的 port</div>
        <CodeBlock>sudo lsof -i -P -n | grep LISTEN</CodeBlock>
        <br />
        <div class="header">完整移除 apache2</div>
        <hr />
        <CodeBlock>
          sudo systemctl stop apache2
          <Comment>// 停止 apache2 服務</Comment>
        </CodeBlock>
        <CodeBlock>
          sudo systemctl status apache2
          <Comment>// 確認 apache2 運行狀態</Comment>
        </CodeBlock>
        <CodeBlock>
          sudo apt-get purge apache2 apache2-utils
          <Comment>// 清除所有 apache2 packages</Comment>
        </CodeBlock>
        <CodeBlock>
          sudo apt-get autoremove
          <Comment>// 檢查並清除所有 apache2 相關 packages</Comment>
        </CodeBlock>
        <br />
        <div class="header">更新 package</div>
        <hr />
        <CodeBlock>sudo apt-get update</CodeBlock>
        <br />
        <div class="header">vim</div>
        <hr />
        <div class="sub-header">安裝指令</div>
        <CodeBlock>sudo apt-get install vim</CodeBlock>
        <br />
        <div class="header">SSH service</div>
        <hr />
        <div class="sub-header">安裝指令</div>
        <CodeBlock>sudo apt-get install ssh</CodeBlock>
        <CodeBlock>sudo apt-get install openssh-server</CodeBlock>
        <br />
        <div class="sub-header">設定檔位置：/etc/ssh/sshd_config</div>
        <CodeBlock>
          Port 22 <Comment>// SSH 服務要使用的 port</Comment><br />
          PasswordAuthentication yes
          <Comment>// 是否同意使用輸入帳密進行連線</Comment><br />
          PermitRootLogin no
          <Comment>// 是否同意使用 root 身分進行連線</Comment>
        </CodeBlock>
        <br />
        <div class="sub-header">重啟服務</div>
        <CodeBlock>sudo /etc/init.d/ssh restart</CodeBlock>
        <br />
        <div class="header">Git</div>
        <hr />
        <div class="sub-header">安裝 Git</div>
        <CodeBlock>sudo apt-get install git-all</CodeBlock>
        <br />
        <div class="header">Nginx</div>
        <hr />
        <div class="sub-header">安裝 Nginx</div>
        <CodeBlock>sudo apt-get install nginx</CodeBlock>
        <br />
        <div class="sub-header">設定檔位置</div>
        <CodeBlock>
          cd /etc/nginx/
          <Comment>// 自己的設定檔可放在 /etc/nginx/conf.d/</Comment>
        </CodeBlock>
        <div class="sub-header">預設網頁放置路徑</div>
        <CodeBlock>cd /usr/share/nginx/html</CodeBlock>
        <br />
        <div class="header">Node.js & NPM</div>
        <hr />
        <div class="sub-header">安裝 Node.js</div>
        <CodeBlock>sudo apt-get install -y nodejs</CodeBlock>
        <CodeBlock> node -v <Comment>// 裝完後輸入 node -v 確認安裝成功及版本</Comment> </CodeBlock>
        <br />
        <div class="sub-header">安裝 NPM</div>
        <CodeBlock>sudo apt-get install npm</CodeBlock>
        <CodeBlock> npm -v <Comment>// 裝完後輸入 npm -v 確認安裝成功及版本</Comment> </CodeBlock>
        <br />
        <div class="header">Go</div>
        <hr />
        <div class="text">
          先下載 Go：<a :href="goUrl" target="_blank">{{ goUrl }}</a>
        </div>
        <br />
        <div class="text">將下載的壓縮檔解壓縮至 /usr/local</div>
        <CodeBlock> sudo tar -C /usr/local -xzf go1.15.8.linux-amd64.tar.gz </CodeBlock>
        <br />
        <div class="text">新增環境變數</div>
        <CodeBlock>sudo vim $HOME/.profile</CodeBlock>
        <CodeBlock>
          export PATH=$PATH:/usr/local/go/bin
          <Comment>// 添加此行到 $HOME/.profile</Comment>
        </CodeBlock>
        <CodeBlock>
          sudo source $HOME/.profile
          <Comment>// 重新讀取環境變數</Comment>
        </CodeBlock>
        <CodeBlock>
          go version
          <Comment>// 確認安裝成功</Comment>
        </CodeBlock>
        <br />
        <div class="header">Java</div>
        <hr />
        <div class="sub-header">安裝 openjdk</div>
        <CodeBlock>sudo apt-get install openjdk-11-jdk</CodeBlock>
        <CodeBlock>java -version <Comment>// 確認安裝</Comment></CodeBlock>
        <br />
        <div class="header">MySQL</div>
        <hr />
        <div class="sub-header">安裝 MySQL</div>
        <CodeBlock>sudo apt-get install mysql-server</CodeBlock>
        <br />
        <div class="sub-header">設定權限</div>
        <CodeBlock>sudo mysql_secure_installation</CodeBlock>
        <br />
        <div class="sub-header">新增外部連線許可</div>
        <CodeBlock>sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf</CodeBlock>
        <CodeBlock>
          bind-address = 0.0.0.0
          <Comment>// 從任何 ip 都可以連進來</Comment>
        </CodeBlock>
        <CodeBlock>
          sudo su
          <Comment>// 進入 root 才能下重讀設定指令</Comment>
        </CodeBlock>
        <CodeBlock>service mysql restart</CodeBlock>
        <br />
        <div class="sub-header">建立新使用者</div>
        <CodeBlock>sudo mysql -u root -p</CodeBlock>
        <CodeBlock>
          CREATE USER 'username'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
          <Comment>// 新增使用者，'%' 表示可以從任何 ip 連進來</Comment>
        </CodeBlock>
        <CodeBlock>
          GRANT ALL PRIVILEGES ON *.* TO 'username'@'%';
          <Comment>// 給予使用者 DB 權限</Comment>
        </CodeBlock>
        <CodeBlock>
          FLUSH PRIVILEGES;
          <Comment>// 重新讀取權限</Comment>
        </CodeBlock>
        <br />
        <div class="header">Jenkins</div>
        <hr />
        <div class="sub-header">安裝 Jenkins</div>
        <CodeBlock>
          wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
        </CodeBlock>
        <CodeBlock>
          sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > \
          <br />
          /etc/apt/sources.list.d/jenkins.list'
        </CodeBlock>
        <CodeBlock>sudo apt-get update</CodeBlock>
        <CodeBlock>sudo apt-get install jenkins</CodeBlock>
        <br />
        <div class="sub-header">新增 Jenkins 權限</div>
        <CodeBlock>sudo visudo</CodeBlock>
        <br />
        <div class="text">新增一行 "jenkins ALL=(ALL) NOPASSWD: ALL"：</div>
        <CodeBlock>
          # User privilege specification<br />
          root ALL=(ALL:ALL) ALL<br />
          jenkins ALL=(ALL) NOPASSWD: ALL
        </CodeBlock>
        <div class="text">按 Ctrl + O 存檔，Ctrl + X 離開</div>
        <br />
        <div class="header">Supervisor</div>
        <hr />
        <div class="sub-header">安裝 Supervisor</div>
        <CodeBlock>sudo apt-get install supervisor</CodeBlock>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../constants/constants';

import BackToList from '../../../components/backtolist/BackToList.vue';
import CodeBlock from '../../../components/code-block/CodeBlock.vue';
import Comment from '../../../components/comment/Comment.vue';

export default {
  components: { BackToList, CodeBlock, Comment },
  data: () => ({
    article: Cons.article.ubuntu,
    goUrl: 'https://golang.org/doc/install#install',
  }),
};
</script>

<style lang="scss" scoped>
</style>
