<template>
  <div id="ng-lazy-loading-container">
    <div class="article">
      <div class="title">{{article.title}}</div>
      <BackToList></BackToList>
      <div class="date">{{article.date}}</div>
      <div class="summary">{{article.summary}}</div>
      <div class="under-line"></div>
      <div class="content">
        <div class="sub-header">Step 1. 新增 Lazy Loading Module 和 Lazy Loading Routing Module</div>
        <hr />CLI 指令：
        <div class="code-area">
          <div class="code">ng generate module lazy-loading --routing</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />Lazy Loading Module：
        <div class="code-area">
          <div class="code">
            import { NgModule } from '@angular/core';
            <br />
            import { CommonModule } from '@angular/common';
            <br />
            import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
            <br />
            <br />
            import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
            <br />
            <br />
            @NgModule({
            <br /><Tab />imports: [
            <br /><Tab /><Tab />CommonModule,
            <br /><Tab /><Tab />CustomersRoutingModule
            <br /><Tab />],
            <br /><Tab />declarations: [CustomerListComponent]
            <br />})
            <br />
            <br />export class LazyLoadingModule { }
          </div>
        </div>
        <br />Lazy Loading Routing Module：
        <div class="code-area">
          <div class="code">
            import { NgModule } from '@angular/core';
            <br />
            import { Routes, RouterModule } from '@angular/router';
            <br />
            <br />
            import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
            <br />
            <br />const routes: Routes = [
            <br /><Tab />{
            <br /><Tab /><Tab />path: '',
            <br /><Tab /><Tab />component: LazyLoadingComponent
            <br /><Tab />}
            <br />];
            <br />
            <br />@NgModule({
            <br /><Tab />imports: [RouterModule.forChild(routes)],
            <br /><Tab />exports: [RouterModule]
            <br />})
            <br />
            <br />export class LazyLoadingRoutingModule { }
          </div>
        </div>
        <br />
        <div class="sub-header">Step 2. 新增要 Lazy Loading 的 Component</div>
        <hr />
        在剛剛新增 lazy loading 的 module 底下新增 component。
        <br />
        <br />CLI 指令：
        <div class="code-area">
          <div class="code">ng generate component lazy-loading/lazy-loading</div>
          <div class="copy" @click="copy">
            <img src="../../../assets/images/copy_icon.svg" />
          </div>
        </div>
        <br />
        <div class="sub-header">Step 3. 在 root 的 Router 中設定要 Lazy Loading 的 Module</div>
        <hr />app-routing.module.ts：
        <div class="code-area">
          const routes: Routes = [
          <br /><Tab />...
          <br /><Tab />{
          <br /><Tab /><Tab />path: 'lazyloading',
          <br /><Tab /><Tab />
          loadChildren: () =>
          import('./lazy-loading/lazy-loading.module').then(mod => mod.LazyLoadingModule)
          <br /><Tab />},
          <br /><Tab />...
          <br />];
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
import Tab from '../../../components/tab/Tab.vue';

import BackToList from '../../../components/backtolist/BackToList.vue';

export default {
  components: { BackToList, Tab },
  data: () => ({ article: Cons.article.ngLazLoading }),
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
