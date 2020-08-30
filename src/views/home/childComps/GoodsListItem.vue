<template>
  <div class="goods" @click="gotodetail">
    <img v-lazy="getimg" :key="getimg" alt="" @load="imgload">
    <div class="goods-info">
      <p>{{goods.title}}</p>
      <span class="price">¥{{goods.price}}</span>
      <span class="collect">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  methods: {
    gotodetail() {
      let iid = this.goods.iid
      this.$router.push({
        path: '/detail',
        query: {
          iid,
        }
      })
    },
    imgload() {
      // this.$event.$emit('isload')
    }
  },
  computed: {
    getimg() {
      return this.goods.img || this.goods.image || this.goods.show.img
    }
  }
}
</script>

<style lang="less" scoped>
  .goods {
    padding-bottom: 40px;
    position: relative;
    img {
      width: 100%;
    };
    .goods-info {
      font-size: 12px;
      position: absolute;
      bottom: 5px;
      left: 0;
      right: 0;
      overflow: hidden;
      text-align: center;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
      };
      .price {
        color: var(--color-high-text);
        margin-right: 20px;
      };
      .collect {
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: -15px;
          top: 0;
          width: 14px;
          height: 14px;
          background: url("~assets/img/common/collect.svg") 0 0;
          background-size: 14px 14px;
        }
      }
    }
  }
</style>