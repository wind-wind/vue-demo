<template>
  <div class="feature">
    <div class="feature-item" v-for="(item, index) in list" :key="index">
      <a href="">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  props: {
    list: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="less" scoped>
  .feature {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
    .feature-item {
      flex: 1;
      text-align: center;
    };
    a img {
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
    }
  }
</style>