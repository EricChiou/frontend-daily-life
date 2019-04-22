<template>
  <div id="frontend-trend-container">
    <div class="title">前端發展</div>
    <div class="date">2019 / 04 / 19</div>
    <div class="under-line"></div>
    <div class="content">
      前端發展的速度之快，讓許多前端工程師招架不住，各種新的框架、函式庫、技術不斷出現，讓人應接不暇，而近幾年，在框架（或函式庫）的部分更是分別以
      Facebook 的 React、Google 的 Angular2 以及 獨立開發者
      <span
        class="name"
      >尤雨溪</span>
      的 Vue 三家獨大，形成三國鼎立的局面。
      <br>
      <div class="text-center">
        <img src="../../../assets/images/three_kingdoms.jpg">
        <br>(做這張圖的時候才發現連配色都一樣XD)
      </div>
      <br>
      <div class="header">淺談三大框架</div>
      <hr>目前 React 仍延續其統治地位，Angular2 繼續保持著眾多的擁護者，Vue 則是後勢看漲，甚至在 Github 的星星數力壓 React，而這三大框架都是基於組件的，網頁組件化已經是前端的主流趨勢。下圖為在 npm 及 Github 上的數據統計：
      <br>
      <br>
      <div class="text-center">
        <img src="../../../assets/images/npm_trend.png">
        <br>【npm 下載數】
        <br>
        <br>
        <img src="../../../assets/images/github_stars.png">
        <br>【Github 星星數】
      </div>
      <br>
      <span class="sub-header">React：</span>
      <hr>嚴格說起來 React 並不是框架，而是一個函式庫，你可以使用它所提供的各種方便的功能來完成你的專案，它並不限制你要遵照某種格式來寫或者必須使用什麼套件，因此彈性很高。
      <br>
      <br>React 屬於 MVC（Model-View-Controller）架構，它是基於 Javascript 的，也就是你需要在 Javascript 中完成所有的事情，這也是與其他兩個框架最大的不同點。
      <br>
      <br>特性：
      <ul>
        <li>MVC架構：React 基本上只負責「view」層，代表它與業務邏輯是完全解耦的。</li>
        <li>jsx：React 是基於 Javascript 的，任何事都必須在 Javascript 裡完成，因此提供一種 jsx 的語法來幫助你處理 html，但這也同時提升了學習難度，當然你也可以選擇不使用它。</li>
        <li>虛擬 DOM：擁有虛擬 DOM，因此在畫面的渲染上效能很高。</li>
        <li>並非大而全的框架：嚴格來說 React 並不是一個框架，而是函式庫，這同時是優點也是缺點，你可以彈性的挑選任何你想使用的工具，但同時也要花更多時間來確認工具的可靠性。</li>
        <li>單向數據綁定：React 的數據是單向綁定的，這讓程式更利於理解與維護，但同時在實現某些功能時會更為麻煩。</li>
      </ul>
      <br>優點：
      <ul>
        <li>龐大且活耀的社群：作為現階段最多人使用的框架，React 擁有最龐大且活躍的社群，意味著有豐富的資源，同時幾乎任何問題都能找到解決方法。</li>
        <li>高度的靈活性：並非大而全的框架，因此可以靈活的挑選你想使用的工具，並根據自己的需求決定專案的架構。</li>
        <li>輕量級：打包起來的專案是相對輕量的。</li>
      </ul>
      <br>缺點：
      <ul>
        <li>缺乏官方文檔：React 發展速度太快，導致官方文檔的缺乏，這使得新手學習更困難，且欠缺開發 React 一個系統性的思路。</li>
        <li>太過靈活：要花更多時間在驗證工具的可靠性上。</li>
        <li>學習曲線：需要長時間去掌握它，且如果要用 jsx，要花更多時間在了解 jsx 的使用上。</li>
      </ul>
      <br>
      <span class="sub-header">Angular2：</span>
      <hr>一般提到 Angular 指的就是 Angular2，Angular1 則為 AngularJs，Angular 目前已經出到第 7 版，也會直接稱為 Angular 7，Angular 是一個大而全的框架，與 React 不同，它嚴格規定了程式該怎麼寫，且提供了幾乎所有可能使用到的工具。
      <br>
      <br>Angular 使用 Typescript 來撰寫，這意味著你必須學習一個新的語言才能使用它。Typescript 係由微軟開發，是 Javascript 的超集合語言，這代表你可以直接在 Typescript 中寫任何 Javascript，Typescript 同時具備了強型別、Interface 等優點。
      <br>
      <br>特性：
      <ul>
        <li>MVW架構：在 MVC、MVP、MVVM、... 吵了這麼久之後，Angular 提出了 MVW（Model-View-Whatever），不再執著於由誰來控制 View 與 Model 之間的溝通，轉而花更多心力在程式的關注點分離。</li>
        <li>大而全的框架：Angular 是一個完整的框架，提供了幾乎所有可能使用到的工具，同時失去了靈活度。</li>
        <li>雙向數據綁定：數據屬於雙向綁定，這讓程式複雜度增加，但在資料同步上較不容易出錯，有利於某些功能的實現。</li>
        <li>依賴注入：這是 Angular 的一大特點，這使得模組化的組件更容易被引入。</li>
      </ul>
      <br>優點：
      <ul>
        <li>大而全的框架：不必花時間找各種工具，官方幾乎都提供了，用就對了。</li>
        <li>Typescript：Typescript 提供了很多 Javascript 被詬病的缺點，譬如強型別，這使得開發大型專案更加容易。</li>
        <li>官方文檔：官方文檔寫得非常齊全，只是數量龐大，要全部看完必須花費不少時間。</li>
        <li>利於團隊合作：規定了程式寫法更有利於團隊合作，每個人寫出來的程式有著差不多的質量。</li>
      </ul>
      <br>缺點：
      <ul>
        <li>缺乏彈性：強制規定了程式寫法，無法視專案需求動態調整架構。</li>
        <li>遷移問題：由於使用 Typescript，某些 Javascript 組件無法順利地直接使用在 Angular 上。</li>
        <li>厚重：因為包含了所有功能，因此打包後的專案是最厚重的。</li>
        <li>學習曲線：需要學習 Typescript，這得花上不少時間，當然對於一個全新的開發者是沒差的。</li>
      </ul>
      <br>
      <span class="sub-header">Vue：</span>
      <br>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#frontend-trend-container {
  .title {
    margin: 10px 15px 0 15px;
    font-size: 32px;
    font-weight: bold;
    color: #3a4750;
  }
  .date {
    margin: 0 17px 5px 17px;
    font-size: 16px;
    color: #aaaaaa;
  }
  .under-line {
    margin: 0 15px;
    border-bottom: 1px dashed #cccccc;
  }
  .content {
    margin: 5px 15px 10px 15px;
    font-size: 18px;
    line-height: 24px;
    color: #303841;
    .name {
      text-decoration: underline;
    }
    .header {
      font-size: 22px;
      font-weight: bold;
      color: #3a4750;
    }
    .sub-header {
      font-size: 20px;
      font-weight: bold;
      color: #3a4750;
    }
    .text-center {
      text-align: center;
    }
    img {
      max-width: 100%;
    }
    ul {
      margin: 0;
    }
  }

  @media only screen and (max-width: 767px) {
    .title {
      font-size: 28px;
    }
  }
}
</style>
