<template>
  <div class="tab-control">
    <div class="tab-control-item"
     :class="{active: currentindex === index}"
     @click="itemClick(index)"
     v-for="(item, index) in titles" :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentindex: 0
    }
  },
  methods: {
    itemClick(index) {
      // console.log(index)
      this.currentindex = index
      this.$emit('itemClick', index)
    }
  }
}
</script>

<style lang="less" scoped>
  .tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
    .tab-control-item {
      flex: 1;
      span {
        padding: 5px;
      }
    }
  }
  .active {
    color: var(--color-high-text);
    span {
      border-bottom: 2px solid var(--color-high-text);
    }
  }
</style>