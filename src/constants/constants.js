const articleCategory = {
  frontend: 'frontend',
  angular: 'angular',
  react: 'react',
  vue: 'vue',
  other: 'other', // backend
};

export default {
  // If add a new article, remember to add the new router path in router.js too.
  article: {
    nginx: {
      category: articleCategory.other,
      title: '使用 Nginx 架設 http server',
      date: '2021 / 02 / 05',
      summary:
        '在 Ubuntu 18.04 上安裝 Nginx 建立 http server，並使用轉址、Certbot 自動更新 SSL 憑證等功能',
      link: '/other/nginx',
      name: 'nginx',
    },
    object: {
      category: articleCategory.other,
      title: '何謂 PO、BO、DTO、VO',
      date: '2020 / 09 / 08',
      summary:
        '後端在開發的時候常常會聽到 PO、BO、DTO、VO 這些物件類型，一次搞清楚他們之間的區別是什麼',
      link: '/other/object',
      name: 'object',
    },
    screen: {
      category: articleCategory.other,
      title: '使用 Screen 在背景執行終端機',
      date: '2020 / 08 / 15',
      summary:
        '介紹如何在 Linux 中安裝 Screen，以及各種指令操作',
      link: '/other/screen',
      name: 'screen',
    },
    checkVariableType: {
      category: articleCategory.frontend,
      title: '使用 typeof 及 instanceof 判斷變數型別',
      date: '2020 / 07 / 28',
      summary:
        '在判斷變數型別時常常會使用到 typeof 及 instanceof，因此在這說明 typeof 及 instanceof 的差別以及使用方法',
      link: '/frontend/checkVariableType',
      name: 'checkVariableType',
    },
    frontendSharing: {
      category: articleCategory.frontend,
      title: '利用 RxJS 的 Subject 在各元件之間進行溝通',
      date: '2019 / 06 / 22',
      summary:
        '有時會發生需要在非父子關係的元件之間進行溝通或數據交換，這時使用 Subject 來進行溝通會較方便',
      link: '/frontend/frontend-sharing',
      name: 'frontend-sharing',
    },
    rsa: {
      category: articleCategory.other,
      title: 'RSA 金鑰',
      date: '2019 / 05 / 16',
      summary:
        '在 Ubuntu 18.04 上使用 openssl 產生 RSA 金鑰',
      link: '/other/rsa',
      name: 'seo',
    },
    seo: {
      category: articleCategory.frontend,
      title: 'SEO 設定',
      date: '2019 / 05 / 12',
      summary:
        '講解設定 SEO 時的各種注意事項，以及 SEO 的各種 tag',
      link: '/frontend/seo',
      name: 'seo',
    },
    vueProps: {
      category: articleCategory.vue,
      title: 'Vue Props',
      date: '2019 / 05 / 09',
      summary:
        '介紹 Vue Props 用途及使用方法',
      link: '/vue/vue-props',
      name: 'vueProps',
    },
    esLint: {
      category: articleCategory.frontend,
      title: 'ESLint 筆記本',
      date: '2019 / 05 / 07',
      summary:
        '記錄個人愛用的 ESLint 規則',
      link: '/frontend/eslint',
      name: 'eslint',
    },
    ngLazLoading: {
      category: articleCategory.angular,
      title: 'Angular 的 Lazy Loading',
      date: '2019 / 05 / 05',
      summary:
        '介紹 Angular 的 Lazy Loading 使用方法',
      link: '/angular/lazy-loading',
      name: 'ng-lazy-loading',
    },
    vueLazyLoading: {
      category: articleCategory.vue,
      title: 'Vue 的 Lazy Loading',
      date: '2019 / 05 / 01',
      summary:
        '利用 Vue 的異步組件功能及 Webpack 的分割程式碼功能達成 Vue 的 Lazy Loading',
      link: '/vue/lazy-loading',
      name: 'vue-lazy-loading',
    },
    reactPropsAndState: {
      category: articleCategory.react,
      title: 'React 的 props 與 state',
      date: '2019 / 04 / 29',
      summary:
        '介紹 React 中的 props 與 state，以及使用方法',
      link: '/react/props-state',
      name: 'react-props-state',
    },
    rwd: {
      category: articleCategory.frontend,
      title: '響應式網頁設計 RWD',
      date: '2019 / 04 / 24',
      summary:
        '解釋何謂響應式網頁設計(Responsive Web Design, RWD)，該怎麼設計 RWD，一般常見的規則是什麼',
      link: '/frontend/rwd',
      name: 'rwd',
    },
    htmlSetting: {
      category: articleCategory.frontend,
      title: 'HTML 內的各種設定',
      date: '2019 / 04 / 23',
      summary:
        '記錄一些 html 中的設定，包括 <html> 及 <head> 內的 <base>、<meta> 等等',
      link: '/frontend/html-setting',
      name: 'html-setting',
    },
    frontendTrend: {
      category: articleCategory.frontend,
      title: '前端發展',
      date: '2019 / 04 / 19',
      summary:
        '討論前端發展趨勢，以及對目前主流的三大框架 React、Angular2 及 Vue 之間做些簡單的對比和使用心得',
      link: '/frontend/frontend-trend',
      name: 'frontend-trend',
    },
    jenkins: {
      category: articleCategory.other,
      title: 'Jenkins 各種相關設定',
      date: '2019 / 04 / 18',
      summary:
        '如何讓 Jenkins 在 Ubuntu 18.04 上取得 root 權限，如何讓 Jenkins 建置 Golang 專案',
      link: '/other/jenkins',
      name: 'jenkins',
    },
    vueNotebook: {
      category: articleCategory.vue,
      title: 'Vue 筆記本',
      date: '2019 / 04 / 09',
      summary:
        '記錄一些 Vue 常用到的指令及基本設定和寫法',
      link: '/vue/notebook',
      name: 'vueNotebook',
    },
    reactNotebook: {
      category: articleCategory.react,
      title: 'React 筆記本',
      date: '2019 / 04 / 09',
      summary:
        '記錄一些 React 常用到的指令及基本設定和寫法',
      link: '/react/notebook',
      name: 'reactNotebook',
    },
    ngNotebook: {
      category: articleCategory.angular,
      title: 'Angular 筆記本',
      date: '2019 / 04 / 09',
      summary:
        '記錄一些 Angular 常用到的指令及基本設定和寫法',
      link: '/angular/notebook',
      name: 'ngNotebook',
    },
    frontendNotebook: {
      category: articleCategory.frontend,
      title: '前端筆記本',
      date: '2019 / 04 / 09',
      summary:
        '記錄一些常用或個人愛用的 HTML 及 CSS 設定',
      link: '/frontend/notebook',
      name: 'frontendNotebook',
    },
  },
};
