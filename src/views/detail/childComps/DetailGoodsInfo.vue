<template>
  <div v-if="Object.keys(info).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{info.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{info.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in info.detailImage[0].list" :key="index" :src="item" alt="" @load="isok">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    info: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    isok() {
      // this.$emit('imgload')
    }
  }
}
</script>

<style lang="less" scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
    .info-desc {
      padding: 0 15px;
      .start, .end {
        width: 90px;
        height: 1px;
        background-color: #a3a3a5;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          background-color: #333;
          bottom: 0;
        }
      };
      .start {
        float: left;
        &::before {
          top: 0;
        }
      };
      .end {
        float: right;
        &::before {
          right: 0;
        }
      };
      .desc {
        padding: 15px 0;
        font-size: 14px;
      }
    };
    .info-key {
      margin: 10px 0 10px 15px;
      font-size: 15px;
      color: #333;
    };
    .info-list img {
      width: 100%;
    }
  }
</style>