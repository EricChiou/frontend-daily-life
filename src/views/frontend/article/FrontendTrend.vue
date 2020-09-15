<template>
  <div id="frontend-trend-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="text">
          前端發展的速度之快，讓許多前端工程師招架不住，各種新的框架、函式庫、技術不斷出現，讓人應接不暇，而近幾年，在框架（或函式庫）的部分更是分別以
          Facebook 的 React、Google 的 Angular2 以及 獨立開發者
          <span
            class="name"
          >尤雨溪</span>
          的 Vue 三家獨大，形成三國鼎立的局面。
          <br />
          <br />
          <div class="text-center">
            <img src="../../../assets/images/three_kingdoms.jpg" />
            <br />(做這張圖的時候才發現連配色都一樣XD)
          </div>
          <br />
        </div>
        <div class="header">淺談三大框架</div>
        <hr />
        <div class="text">
          目前 React 仍延續其統治地位，Angular2 繼續保持著一群堅定的擁護者，Vue 則是後勢看漲，甚至在 Github 的星星數力壓 React，而這三大框架都是基於組件的，網頁組件化已經是前端的主流趨勢。而在效能部分，基本上三個框架的效能都已經夠好到讓你足以面對各種狀況，因此不會花太多時間在效能的討論上。下圖分別為在 npm 及 Github 上的統計數據：
          <br />
          <br />
          <div class="text-center">
            <img src="../../../assets/images/npm_trend.png" />
            <br />【npm 下載數】
            <br />
            <br />
            <img src="../../../assets/images/github_stars.png" />
            <br />【Github 星星數】
          </div>
          <br />
        </div>
        <span class="sub-header">React：</span>
        <hr />
        <div class="text">
          嚴格說起來 React 並不是一個框架，而是函式庫，你可以使用它所提供的各種方便的功能來完成你的專案，它並不嚴格限制你要遵照某種格式來寫或必須使用什麼套件，因此彈性很高。
          <br />
          <br />React 屬於 MVC（Model-View-Controller）架構，它是基於 JavaScript 的，也就是你需要在 JavaScript 中完成所有的事情，這也是與其他兩個框架最大的不同點。
          <br />
          <br />特性：
          <ul>
            <li>MVC 架構：React 屬於 MVC（Model-View-Controller）架構，基本上只負責「View」層，代表它與業務邏輯是完全解耦的。</li>
            <li>Jsx：React 是基於 JavaScript 的，任何事都必須在 JavaScript 裡完成，因此提供一種 Jsx 的語法來幫助你處理 html，但這也同時提升了學習難度，當然你也可以選擇不使用它。</li>
            <li>虛擬 DOM：擁有虛擬 DOM，因此在畫面的渲染上效能很高。</li>
            <li>並非大而全的框架：嚴格來說 React 並不是一個框架，而是函式庫，這同時是優點也是缺點，你可以彈性的挑選任何你想使用的工具，但同時也要花更多時間來確認工具的可靠性。</li>
            <li>單向數據綁定：React 的數據是單向綁定的，這讓程式更利於理解與維護，但同時在實現某些功能時會更為麻煩。</li>
          </ul>
          <br />優點：
          <ul>
            <li>龐大且活耀的社群：作為現階段最多人使用的框架，React 擁有最龐大且活躍的社群，意味著有豐富的資源，同時幾乎任何問題都能找到解決方法。</li>
            <li>高度的靈活性：並非大而全的框架，因此可以靈活的挑選你想使用的工具，並根據自己的需求決定專案的架構。</li>
            <li>輕量級：打包起來的專案是相對輕量的。</li>
          </ul>
          <br />缺點：
          <ul>
            <li>缺乏官方文檔：React 發展速度太快，導致官方文檔的缺乏，這使得新手學習更困難，且欠缺開發 React 一個系統性的思路。</li>
            <li>太過靈活：要花更多時間在驗證工具的可靠性上。</li>
            <li>學習曲線：需要長時間去掌握它，如果要用 Jsx，則要花更多時間在了解 Jsx 的使用上。</li>
          </ul>
          <br />
        </div>
        <span class="sub-header">Angular2：</span>
        <hr />
        <div class="text">
          一般提到 Angular 指的就是 Angular2，Angular1 則為 AngularJs，Angular 目前已經出到第 7 版，也會直接稱為 Angular 7，Angular 是一個大而全的框架，與 React 不同，它嚴格規定了程式該怎麼寫，且提供了幾乎所有可能使用到的工具。
          <br />
          <br />Angular 使用 TypeScript 來撰寫，這意味著你必須學習一個新的語言才能使用它。TypeScript 係由微軟開發，是 JavaScript 的超集合語言，這代表你可以直接在 TypeScript 中寫任何 JavaScript，TypeScript 同時具備了強型別、Interface 等優點。
          <br />
          <br />特性：
          <ul>
            <li>MVW 架構：在 MVC、MVP、MVVM、... 吵了這麼久之後，Angular 提出了 MVW（Model-View-Whatever），不再執著於由誰來控制 View 與 Model 之間的溝通，轉而花更多心力在程式的關注點分離。</li>
            <li>大而全的框架：Angular 是一個完整的框架，提供了幾乎所有可能使用到的工具，同時失去了靈活度。</li>
            <li>雙向數據綁定：數據是雙向綁定的，這讓程式複雜度增加，但在資料面上較不容易出錯，有利於某些功能的實現。</li>
            <li>依賴注入：這是 Angular 的一大特點，這使得模組化的組件更容易被引入。</li>
          </ul>
          <br />優點：
          <ul>
            <li>大而全的框架：不必花時間找各種工具，官方幾乎都提供了，用就對了。</li>
            <li>TypeScript：TypeScript 提供了很多 JavaScript 被詬病的缺點，譬如強型別，這使得開發大型專案更加容易。</li>
            <li>官方文檔：官方文檔寫得非常齊全，只是數量龐大，要全部看完必須花費不少時間。</li>
            <li>利於團隊合作：規定了程式寫法更有利於團隊合作，每個人寫出來的程式有著差不多的質量。</li>
          </ul>
          <br />缺點：
          <ul>
            <li>遷移問題：由於使用 TypeScript，某些 JavaScript 組件可能無法順利地直接使用在 Angular 上。</li>
            <li>厚重：因為包含了所有功能，因此打包後的專案是最厚重的。</li>
            <li>學習曲線：需要學習 TypeScript，這得花上不少時間，當然對於一個全新的開發者是沒差的。</li>
            <li>較小的社群：社群相對較小，你的問題可能無法找到有效的解決方案。</li>
          </ul>
          <br />
        </div>
        <span class="sub-header">Vue：</span>
        <hr />
        <div class="text">
          Vue 誕生於 2013 年，由獨立開源開發者
          <span class="name">尤雨溪</span>
          所開發，它同時參考了 React 和 Angular，因此兼具兩者的優點，目前 Vue 已經出到 2.x 版，在程式上寫法更偏向是 Angular。Vue 目前受到眾多開發者的歡迎，在 Github 上的星星數甚至已經超越 React。
          <br />
          <br />Vue 同樣只是一個函式庫，並不強制你程式的寫法，在彈性上保有如 React 的靈活度，在數據流上更是單/雙向數據流都支持，端看你想使用哪一種，一般要使用單向數據流的話會建議使用 Vuex，Vuex 是基於 Flux 單向資料流的設計模式，也就是 Vue + Flux = Vuex。
          <br />
          <br />特性：
          <ul>
            <li>MVVM 架構：Vue 屬於 MVVM（Model-View-ViewModel）架構，同樣只負責處理「View」層。</li>
            <li>虛擬 DOM：擁有虛擬 DOM，因此無須擔心效能的問題。</li>
            <li>單/雙向數據綁定：單/雙向數據綁定都支持，這讓程式的靈活度大大提升。</li>
            <li>並非大而全的框架：Vue 同樣算是函式庫而不是框架，因此也需要花時間驗證你所使用的工具的可靠性，但 Vue 提供了比 React 更多的官方工具可以使用。</li>
          </ul>
          <br />優點：
          <ul>
            <li>適用性：從小型到大型專案都能很好的支持，並且能很快的從其他框架轉移到 Vue。</li>
            <li>官方文檔：擁有詳細且友好的官方文檔，使開發者能迅速學會，這能節省很多時間。</li>
            <li>學習曲線：易於學習，即使是全新的開發者也能很快的學會並開始使用。</li>
            <li>輕量級：Vue 是絕對輕量的，甚至比 React 還輕。</li>
          </ul>
          <br />缺點：
          <ul>
            <li>靈活帶來的風險：同樣需要花時間在驗證工具的可靠性上。</li>
            <li>年輕的社群：社群活躍但較年輕，這代表你能獲取的資源較少，以及問題可能無法找到解決方法。</li>
          </ul>
          <br />
        </div>
        <span class="sub-header">三大框架比較：</span>
        <hr />
        <div class="text">
          <div class="text-center">
            <div class="table">
              <table>
                <tr>
                  <th>項目</th>
                  <th>React</th>
                  <th>Angular</th>
                  <th>Vue</th>
                </tr>
                <tr>
                  <td>CLI 工具</td>
                  <td>非官方 CLI</td>
                  <td>有</td>
                  <td>有</td>
                </tr>
                <tr>
                  <td>開發彈性</td>
                  <td>極高</td>
                  <td>低</td>
                  <td>高</td>
                </tr>
                <tr>
                  <td>使用語言</td>
                  <td>Jsx</td>
                  <td>TypeScript</td>
                  <td>JavaScript</td>
                </tr>
                <tr>
                  <td>數據綁定</td>
                  <td>單向</td>
                  <td>雙向</td>
                  <td>單/雙向</td>
                </tr>
                <tr>
                  <td>學習曲線</td>
                  <td>難</td>
                  <td>難</td>
                  <td>簡單</td>
                </tr>
                <tr>
                  <td>資源量</td>
                  <td>多</td>
                  <td>多</td>
                  <td>中</td>
                </tr>
                <tr>
                  <td>SSR/SEO</td>
                  <td>Next.js</td>
                  <td>Angular Universal</td>
                  <td>Nuxt.js</td>
                </tr>
                <tr>
                  <td>狀態管理</td>
                  <td>Redux, Hooks</td>
                  <td>Service</td>
                  <td>Vuex</td>
                </tr>
              </table>
            </div>
          </div>
          <br />
        </div>
        <span class="sub-header">結論：</span>
        <hr />
        <div class="text">
          最後仍要說那句話：「沒有最好的框架，只有最適合你專案的框架。」
          <br />如果想要最豐富的資源，可以使用 React。
          <br />如果會使用到許多自己的組件，可以使用 React 或 Vue。
          <br />如果是個人開發，可以使用 React 或 Vue。
          <br />如果是多人開發團隊，可以使用 Angular。
          <br />如果喜歡 TypeScript 的優點，可以使用 Angular。
          <br />如果無法花太多時間在驗證工具的可靠性上，可以使用 Angular。
          <br />如果是大型專案，可以使用 Angular 或 Vue。
          <br />如果需要快速的上手並開發，可以使用 Vue。
          <br />
          <br />各大神提供的三大框架學習地圖：
          <br />React：
          <a
            class="road-map"
            href="https://github.com/adam-golab/react-developer-roadmap"
            target="_blank"
          >https://github.com/adam-golab/react-developer-roadmap</a>
          <br />Angular：
          <a
            class="road-map"
            href="https://github.com/sulco/angular-developer-roadmap"
            target="_blank"
          >https://github.com/sulco/angular-developer-roadmap</a>
          <br />Vue：
          <a
            class="road-map"
            href="https://github.com/flaviocopes/vue-developer-roadmap"
            target="_blank"
          >https://github.com/flaviocopes/vue-developer-roadmap</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cons from '../../../constants/constants';

export default {
  data: () => ({ article: Cons.article.frontendTrend })
};
</script>

<style lang="scss" scoped>
#frontend-trend-container {
  .road-map {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
