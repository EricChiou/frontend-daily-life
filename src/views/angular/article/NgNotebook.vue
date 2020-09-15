<template>
  <div id="ng-notebook-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">CLI 常用指令</div>
        <hr>
        <div class="text">
          新增 Component 並 Import 到 module：
          <div class="code-area">
            <div class="code">ng g c path/component-name --module</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg">
            </div>
          </div>
          <br>新增 Service：
          <div class="code-area">
            <div class="code">ng g s path/service-name</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg">
            </div>
          </div>
          <br>新增 Module 以及該 Module 的 Router：
          <div class="code-area">
            <div class="code">ng g m module-name --routing</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg">
            </div>
          </div>
          <br>
        </div>
        <div class="sub-header">Angular 監聽事件寫法</div>
        <hr>
        <div class="text">
          滾動卷軸：
          <div class="code-area">
            <div class="code">
              @HostListener('window:scroll', [])
              <br>
              onScroll() {}
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg">
            </div>
          </div>
          <br>視窗大小發生變化：
          <div class="code-area">
            <div class="code">
              @HostListener('window:resize', [])
              <br>
              onResize() {}
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg">
            </div>
          </div>
          <br>點擊事件：
          <div class="code-area">
            <div class="code">
              @HostListener('window:click', ['$event.target'])
              <br>onClick(event: any) {
              <br>&nbsp;&nbsp;console.log('被點擊的元素為：', event);
              <br>}
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg">
            </div>
          </div>
          <br>
        </div>
        <div class="sub-header">常用到的 Code</div>
        <hr>
        <div class="text">
          在模板中加入 router 事件，routerLinkActive 為啟用 route 後要加入的 className：
          <div class="code-area">
            <div class="code">[routerLink]="path" routerLinkActive="active"</div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg">
            </div>
          </div>
          <br>使用 ElementRef 抓取模板元素時要用的 Function：
          <div class="code-area">
            <div class="code">
              constructor(
              <br>&nbsp;&nbsp;private ele: ElementRef
              <br>
              ) { }
              <br>
              <br>ngOnInit() {
              <br>&nbsp;&nbsp;this.ele.nativeElement.querySelector('#id');
              <br>&nbsp;&nbsp;this.ele.nativeElement.querySelectorAll('.className');
              <br>}
            </div>
            <div class="copy" @click="copy">
              <img src="../../../assets/images/copy_icon.svg">
            </div>
          </div>
          <br>
        </div>
        <div class="sub-header">Angular Lifecycle Hooks</div>
        <hr>
        <div class="text">
          <div class="text-left">
            <div class="table">
              <table>
                <tr>
                  <th>Hook</th>
                  <th>用途及觸發時機</th>
                </tr>
                <tr>
                  <td>ngOnChanges()</td>
                  <td>
                    當 Angular（重新）設置數據綁定輸入屬性時響應。該方法接受當前和上一屬性值的 SimpleChanges 對象。
                    <br>
                    <br>在 ngOnInit() 之前以及所綁定的一個或多個輸入屬性的值發生變化時都會調用。
                  </td>
                </tr>
                <tr>
                  <td>ngOnInit()</td>
                  <td>
                    在 Angular 第一次顯示數據綁定和設置指令/組件的輸入屬性之後，初始化指令/組件。
                    <br>
                    <br>在第一輪 ngOnChanges() 完成之後調用，只調用一次。
                  </td>
                </tr>
                <tr>
                  <td>ngDoCheck()</td>
                  <td>
                    檢測，並在發生 Angular 無法或不願意自己檢測的變化時作出反應。
                    <br>
                    <br>在每個變更檢測週期中，緊跟在 ngOnChanges() 和 ngOnInit() 後面調用。
                  </td>
                </tr>
                <tr>
                  <td>ngAfterContentInit()</td>
                  <td>
                    當 Angular 把外部內容投影進組件/指令的視圖之後調用。
                    <br>
                    <br>第一次 ngDoCheck() 之後調用，只調用一次。
                  </td>
                </tr>
                <tr>
                  <td>ngAfterContentChecked()</td>
                  <td>
                    每當 Angular 完成被投影組件內容的變更檢測之後調用。
                    <br>
                    <br>ngAfterContentInit() 和每次 ngDoCheck() 之後調用
                  </td>
                </tr>
                <tr>
                  <td>ngAfterViewInit()</td>
                  <td>
                    當 Angular 初始化完組件視圖及其子視圖之後調用。
                    <br>
                    <br>第一次 ngAfterContentChecked() 之後調用，只調用一次。
                  </td>
                </tr>
                <tr>
                  <td>ngAfterViewChecked()</td>
                  <td>
                    每當 Angular 做完組件視圖和子視圖的變更檢測之後調用。
                    <br>
                    <br>ngAfterViewInit() 和每次 ngAfterContentChecked() 之後調用。
                  </td>
                </tr>
                <tr>
                  <td>ngOnDestroy()</td>
                  <td>
                    當 Angular 每次銷毀指令/組件之前調用並清掃。在這反訂閱可觀察對象和分離事件處理器，以防記憶體洩漏。
                    <br>
                    <br>在 Angular 銷毀指令/組件之前調用。
                  </td>
                </tr>
              </table>
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

export default {
  data: () => ({ article: Cons.article.ngNotebook }),
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
    }
  }
};
</script>
