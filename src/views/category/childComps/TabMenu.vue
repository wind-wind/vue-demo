<template>
  <scroll class="tab-menu">
    <div class="item" v-for="(item, index) in categories" :key="index" :class="{'active': index === currentIndex}" @click="itemClick(index)">
      {{item.title}}
    </div>
  </scroll>
</template>

<script>
import scroll from 'components/common/scroll/scroll'
export default {
  name: 'TabMenu',
  components: {scroll},
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabclick', index)
    }
  }
}
</script>

<style lang="less" scoped>
.tab-menu {
  // position: fixed;
  // top: 44px;
  // left: 0;
  // bottom: 49px;
  // overflow: hidden;
  background-color: #f6f6f6;
  width: 100px;
  height: 100%;
  box-sizing: border-box;     //内容区宽度=设置宽度-边框-内边距
  .item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  };
  .active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
}
</style>