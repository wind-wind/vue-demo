<template>
  <div class="navbar">
    <div class="nleft"><slot name="left"></slot></div>
    <div class="ncenter"><slot name="center"></slot></div>
    <div class="nright"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style lang="less" scoped>
  .navbar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    height: 44px;
    line-height: 44px;
    text-align: center;
    .nleft {
      width: 60px;
    };
    .nright {
      width: 60px;
    };
    .ncenter {
      flex: 1;
    }
  }
</style>