import Vue from 'vue';
import Router from 'vue-router';

import Cons from './constants/constants';

import Home from './views/Home.vue';
import About from './views/about/About.vue';
import Recommend from './views/recommend/Recommend.vue';

// article list
import Frontend from './views/frontend/Frontend.vue';
import Angular from './views/angular/Angular.vue';
import React from './views/react/React.vue';
import VueView from './views/vue/Vue.vue';
import Other from './views/other/Other.vue';
// article
// frontend
const FrontendTrend = () => import(/* webpackChunkName: "frontend" */ './views/frontend/article/FrontendTrend.vue');
const HtmlSetting = () => import(/* webpackChunkName: "frontend" */ './views/frontend/article/HtmlSetting.vue');
const RWD = () => import(/* webpackChunkName: "frontend" */ './views/frontend/article/RWD.vue');
const FrontendNotebook = () => import(/* webpackChunkName: "frontend" */ './views/frontend/article/FrontendNotebook.vue');
const ESLint = () => import(/* webpackChunkName: "frontend" */ './views/frontend/article/ESLint.vue');
const SEO = () => import(/* webpackChunkName: "frontend" */ './views/frontend/article/SEO.vue');
const FrontendSharing = () => import(/* webpackChunkName: "frontend" */ './views/frontend/article/FrontendSharing.vue');
const CheckVariableType = () => import(/* webpackChunkName: "frontend" */ './views/frontend/article/CheckVariableType.vue');
// angular
const NgNotebook = () => import(/* webpackChunkName: "angular" */ './views/angular/article/NgNotebook.vue');
const NgLazyLoading = () => import(/* webpackChunkName: "angular" */ './views/angular/article/NgLazyLoading.vue');
// react
const ReactNotebook = () => import(/* webpackChunkName: "react" */ './views/react/article/ReactNotebook.vue');
const ReactPropsAndState = () => import(/* webpackChunkName: "react" */ './views/react/article/ReactPropsAndState.vue');
// vue
const VueNotebook = () => import(/* webpackChunkName: "vue" */ './views/vue/article/VueNotebook.vue');
const VueLazyLoading = () => import(/* webpackChunkName: "vue" */ './views/vue/article/VueLazyLoading.vue');
const VueProps = () => import(/* webpackChunkName: "vue" */ './views/vue/article/VueProps.vue');
// other
const Jenkins = () => import(/* webpackChunkName: "other" */ './views/other/article/Jenkins.vue');
const RSA = () => import(/* webpackChunkName: "other" */ './views/other/article/RSA.vue');
const Screen = () => import(/* webpackChunkName: "other" */ './views/other/article/Screen.vue');

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
    {
      path: Cons.article.frontendNotebook.link,
      name: Cons.article.frontendNotebook.name,
      component: FrontendNotebook
    },
    {
      path: Cons.article.esLint.link,
      name: Cons.article.esLint.name,
      component: ESLint
    },
    {
      path: Cons.article.seo.link,
      name: Cons.article.seo.name,
      component: SEO
    },
    {
      path: Cons.article.frontendSharing.link,
      name: Cons.article.frontendSharing.name,
      component: FrontendSharing
    },
    {
      path: Cons.article.checkVariableType.link,
      name: Cons.article.checkVariableType.name,
      component: CheckVariableType
    },
    // angular
    {
      path: Cons.article.ngNotebook.link,
      name: Cons.article.ngNotebook.name,
      component: NgNotebook
    },
    {
      path: Cons.article.ngLazLoading.link,
      name: Cons.article.ngLazLoading.name,
      component: NgLazyLoading
    },
    // react
    {
      path: Cons.article.reactNotebook.link,
      name: Cons.article.reactNotebook.name,
      component: ReactNotebook
    },
    {
      path: Cons.article.reactPropsAndState.link,
      name: Cons.article.reactPropsAndState.name,
      component: ReactPropsAndState
    },
    // vue
    {
      path: Cons.article.vueNotebook.link,
      name: Cons.article.vueNotebook.name,
      component: VueNotebook
    },
    {
      path: Cons.article.vueLazyLoading.link,
      name: Cons.article.vueLazyLoading.name,
      component: VueLazyLoading
    },
    {
      path: Cons.article.vueProps.link,
      name: Cons.article.vueProps.name,
      component: VueProps
    },
    // other
    {
      path: Cons.article.jenkins.link,
      name: Cons.article.jenkins.name,
      component: Jenkins
    },
    {
      path: Cons.article.rsa.link,
      name: Cons.article.rsa.name,
      component: RSA
    },
    {
      path: Cons.article.screen.link,
      name: Cons.article.screen.name,
      component: Screen
    }
  ]
});
