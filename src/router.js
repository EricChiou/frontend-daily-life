import Vue from 'vue';
import Router from 'vue-router';

import Cons from './util/constants';

import Home from './views/Home.vue';
import About from './views/about/About.vue';
import Recommend from './views/recommend/Recommend.vue';

// article list
import Frontend from './views/frontend/Frontend.vue';
import Angular from './views/angular/Angular.vue';
import React from './views/react/React.vue';
import VueView from './views/vue/Vue.vue';
import Other from './views/other/Other.vue';
// angular
import NgNotebook from './views/angular/article/NgNotebook.vue';
// vue
import VueNotebook from './views/vue/article/VueNotebook.vue';
// article
// frontend
import FrontendTrend from './views/frontend/article/FrontendTrend.vue';
import HtmlSetting from './views/frontend/article/HtmlSetting.vue';
import RWD from './views/frontend/article/RWD.vue';

// other
import Jenkins from './views/other/article/Jenkins.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/frontend',
      name: 'frontend',
      component: Frontend
    },
    {
      path: '/angular',
      name: 'angular',
      component: Angular
    },
    {
      path: '/react',
      name: 'react',
      component: React
    },
    {
      path: '/vue',
      name: 'vue',
      component: VueView
    },
    {
      path: '/other',
      name: 'other',
      component: Other
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    // article
    // frontend
    {
      path: Cons.article.frontendTrend.link,
      name: Cons.article.frontendTrend.name,
      component: FrontendTrend
    },
    {
      path: Cons.article.htmlSetting.link,
      name: Cons.article.htmlSetting.name,
      component: HtmlSetting
    },
    {
      path: Cons.article.rwd.link,
      name: Cons.article.rwd.name,
      component: RWD
    },
    // angular
    {
      path: Cons.article.ngNotebook.link,
      name: Cons.article.ngNotebook.name,
      component: NgNotebook
    },
    // react
    // vue
    {
      path: Cons.article.vueNotebook.link,
      name: Cons.article.vueNotebook.name,
      component: VueNotebook
    },
    // other
    {
      path: Cons.article.jenkins.link,
      name: Cons.article.jenkins.name,
      component: Jenkins
    }
  ]
});
