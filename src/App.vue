<template>
  <div id="app">
    <Menu></Menu>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from './views/Menu.vue';

export default {
  components: {
    Menu
  }
};
</script>


<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.text-center {
  text-align: center;
}
.article {
  margin-bottom: 100px;
  .title {
    margin: 10px 15px 0 15px;
    font-size: 32px;
    font-weight: bold;
    color: #3a4750;
  }
  .date {
    margin: 0 17px;
    font-size: 16px;
    color: #aaaaaa;
  }
  .summary {
    margin: 0 15px;
    font-size: 16px;
    color: #3a4750;
  }
  .under-line {
    margin: 5px 15px 10px 15px;
    border-bottom: 1px dashed #cccccc;
  }
  .content {
    margin: 5px 15px 5px 15px;
    font-size: 18px;
    line-height: 24px;
    color: #303841;
    .header,
    .sub-header {
      font-weight: bold;
      color: #3a4750;
    }
    .header {
      font-size: 22px;
    }
    .sub-header {
      font-size: 20px;
    }
    .name {
      text-decoration: underline;
    }
    .text {
      margin: 0 5px;
    }
    .code-area {
      padding: 5px 8px;
      font-size: 16px;
      background-color: #eeeeee;
      border-radius: 4px;
    }
    img {
      max-width: 100%;
    }
    ul {
      margin: 0;
    }
    table {
      border-collapse: collapse;
      th {
        color: #eeeeee;
        background-color: #3a4750;
      }
      th,
      td {
        border: 1px solid #cccccc;
        text-align: center;
        padding: 8px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .title {
      font-size: 28px;
    }
    .summary {
      display: none;
    }
    .content {
      .text {
        margin: 0;
      }
    }
  }
}
#app {
  font-family: Helvetica, Arial, Sans-Serif, Microsoft JhengHei;
  .main {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 400px;
    overflow: auto;
    @media only screen and (max-width: 767px) {
      position: initial;
    }
  }
}
</style>
