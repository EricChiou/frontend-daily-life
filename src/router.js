import Vue from 'vue';
import Router from 'vue-router';

import Cons from './util/constants';

import Home from './views/Home.vue';
import About from './views/About.vue';
import Frontend from './views/Frontend.vue';
import Other from './views/Other.vue';

// frontend
import FrontendTrend from './views/article/frontend/FrontendTrend.vue';
import HtmlSetting from './views/article/frontend/HtmlSetting.vue';
import RWD from './views/article/frontend/RWD.vue';

// other
import Jenkins from './views/article/other/Jenkins.vue';

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
      path: '/other',
      name: 'other',
      component: Other
    },
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
    // other
    {
      path: Cons.article.jenkins.link,
      name: Cons.article.jenkins.name,
      component: Jenkins
    }
  ]
});
