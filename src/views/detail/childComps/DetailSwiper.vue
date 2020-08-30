<template>
  <div v-if="list.lenght !== 0">
    <mu-carousel interval="3000" hide-controls class="carousel">
      <mu-carousel-item v-for="(item, index) in list" :key="index">
        <img :src="item">
      </mu-carousel-item>
    </mu-carousel>
  </div>
</template>

<script>
export default {
  name: 'DetailSwiper',
  props: {
    list: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="less" scoped>
  .carousel {
    height: 300px;
    img {
      width: 100%;
    }
  }
</style>