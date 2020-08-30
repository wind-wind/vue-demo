<template>
  <div v-if="list.lenght !== 0">
    <mu-carousel interval="3000" hide-controls class="carousel">
      <mu-carousel-item v-for="(item, index) in list" :key="index">
        <img :src="item.image">
      </mu-carousel-item>
    </mu-carousel>
  </div>
</template>

<script>
export default {
  name: 'HomeCarousel',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  .carousel {
    width: 100%;
    height: 195px;
    img {
      width: 100%;
    }
  }
</style>