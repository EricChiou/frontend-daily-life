<template>
  <div id="jenkins-container">
    <div class="article">
      <div class="title">{{ article.title }}</div>
      <BackToList></BackToList>
      <div class="date">{{ article.date }}</div>
      <div class="summary">{{ article.summary }}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="header">OS 環境</div>
        <hr />
        <div class="text">Ubuntu 18.04 LTS</div>
        <br />
        <div class="header">安裝 Nginx</div>
        <hr />
        <div class="code-area">
          <div class="code">sudo apt-get update</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <div class="code-area">
          <div class="code">sudo apt-get install nginx</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />
        <div class="header">Nginx 安裝路徑</div>
        <hr />
        <div class="sub-header">config 路徑</div>
        <div class="code-area">
          <div class="code">cd /etc/nginx/conf.d</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <div class="sub-header">預設 Nginx 網頁路徑</div>
        <div class="code-area">
          <div class="code">cd /usr/share/nginx/html</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />
        <div class="header">Nginx 相關設定</div>
        <hr />
        <div class="sub-header">SSL 設定</div>
        <div class="text">
          可使用 Certbot 自動更新 SSL 憑證：
          <a href="https://certbot.eff.org/instructions" target="_blank">
            https://certbot.eff.org/instructions
          </a>
        </div>
        <br />
        <div class="sub-header">範例 1：常用設定</div>
        <div class="code-area">
          <div class="code">
            server {<br />
            <Tab />listen<Tab />443 ssl; <span class="comment">// 監聽 https 443 port</span><br />
            <Tab />server_name<Tab />www.calicomoomoo.ml;
            <span class="comment">// server 名稱</span>
            <br />
            <br />
            <Tab /><span class="comment">// 設定 SSL key</span><br />
            <Tab />ssl_certificate<Tab />/path/to/your/key;<br />
            <Tab />ssl_certificate_key<Tab />/path/to/your/key;<br />
            <br />
            <Tab /><span class="comment">// location 設定 "/" 表示只要有 request 進來</span><br />
            <Tab /><span class="comment">// 就會試著讀取 /usr/share/nginx/website 底下的檔案</span>
            <br />
            <Tab /><span class="comment">// 沒特別設定的話就會讀取 index.html</span><br />
            <Tab />location / {<br />
            <Tab /><Tab />root<Tab />/usr/share/nginx/website; <br />
            <Tab />}<br />
            <br />
            <Tab /><span class="comment">// 當 url 的 domain name 之後帶有 /entrance/</span><br />
            <span class="comment">
              <Tab />// 就會去讀取 /usr/share/nginx/website/entrance/index.html
            </span>
            <br />
            <Tab />location ^~ /entrance/ {<br />
            <Tab /><Tab />root /usr/share/nginx/website;<br />
            <Tab /><Tab />try_files $uri /entrance/index.html;<br />
            <Tab />}<br />
            <br />
            <Tab /><span class="comment">// 當 url 的 domain name 之後帶有 /api/</span><br />
            <Tab /><span class="comment">// 就會轉址到 http://127.0.0.1:8080</span><br />
            <Tab />location ^~ /api/ {<br />
            <Tab /><Tab />proxy_pass http://127.0.0.1:8080;<br />
            <Tab />}<br />
            }
          </div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />
        <div class="sub-header">範例 2：http 轉 https</div>
        <div class="code-area">
          <div class="code">
            server {<br />
            <Tab />listen<Tab />80; <span class="comment">// 監聽 http 80 port</span><br />
            <Tab />server_name<Tab />www.calicomoomoo.ml;<br />
            <Tab />return 301<Tab />https://$host$request_uri;
            <span class="comment">// 自動轉到 https 並在後面帶一樣的 url</span><br />
            }
          </div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />
        <div class="sub-header">範例 3：讀取檔案，須謹慎使用</div>
        <div class="code-area">
          <div class="code">
            server {<br />
            <Tab />listen<Tab />8080 ssl; <span class="comment">// 監聽 https 8080 port</span><br />
            <Tab />server_name<Tab />www.calicomoomoo.ml;<br />
            <br />
            <Tab />ssl_certificate<Tab />/path/to/your/key;<br />
            <Tab />ssl_certificate_key<Tab />/path/to/your/key;<br />
            <br />
            <span class="comment">
              <Tab />// 讀取 /usr/share/nginx/file 底下跟 url 路徑一樣的檔案
            </span>
            <br />
            <span class="comment">
              <Tab />// 例如 url 為：https://www.calicomoomoo.com:8080/image/cat.jpg
            </span>
            <br />
            <Tab /><span class="comment">// 則會去讀取 /usr/share/nginx/file/image/cat.jpg</span>
            <br />
            <Tab />location / {<br />
            <Tab /><Tab />root /usr/share/nginx/file;<br />
            <Tab />}<br />
            }
          </div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />
        <div class="sub-header">其他注意事項</div>
        <div class="text">一個 port 同時只能有一個 server {} 監聽，多個 server {} 監聽會失效</div>
        <br />
        <div class="header">Nginx 指令</div>
        <hr />
        <div class="code-area">
          <div class="code">sudo service nginx start</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <div class="code-area">
          <div class="code">sudo service nginx reload</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <div class="code-area">
          <div class="code">sudo service nginx restart</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />
        <div class="sub-header">如果沒有 service</div>
        <div class="code-area">
          <div class="code">sudo /etc/init.d/nginx start</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <div class="code-area">
          <div class="code">sudo /etc/init.d/nginx reload</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <div class="code-area">
          <div class="code">sudo /etc/init.d/nginx restart</div>
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
import Tab from '../../../components/tab/Tab.vue';

export default {
  components: { BackToList, Tab },
  data: () => ({ article: Cons.article.nginx }),
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
