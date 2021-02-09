<template>
  <div class="code-area">
    <div class="code"><slot></slot></div>
    <div v-if="copy" class="copy" @click="doCopy">
      <img src="../../assets/images/copy_icon.svg" />
    </div>
  </div>
</template>

<script>
import Clipboard from '../../util/clipboard';

export default {
  props: {
    copy: { type: Boolean, default: true },
  },
  methods: {
    doCopy(event) {
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
