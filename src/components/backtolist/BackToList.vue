<template>
  <div>
    <router-link class="back-to-list" :to="backPageRoute">{{title}}</router-link>
  </div>
</template>
<script>
export default {
  name: '',
  data: () => ({
    title: '回文章列表',
    backPageRoute: '/home',
  }),
  mounted() {
    this.backPageRoute = this.$store.state.backPageRoute;
  },
};
</script>
<style lang="scss" scoped>
.back-to-list {
  margin: 0 15px 0 15px;
  font-size: 16px;
  font-weight: normal;
  text-decoration: underline;
  white-space: nowrap;
  color: #aaaaaa;
  cursor: pointer;
}
</style>
