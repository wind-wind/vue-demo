<template>
  <div class="goods-info">
    <div class="goods-selector">
      <check-button @checkBtnClick="checkedChange" v-model="info.checked"></check-button>
    </div>
    <div class="goods-img">
      <img :src="info.imgURL" alt="商品图片">
    </div>
    <div class="goods-detail">
      <div class="item-title">{{info.title}}</div>
      <div class="item-desc">商品描述: {{info.desc}}</div>
      <div class="item-bottom">
        <div class="left">¥{{info.newPrice}}</div>
        <div class="right">x{{info.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  props: {
    info: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkedChange() {
      this.info.checked = !this.info.checked
      console.log(this.$store.getters.goodsList)
    }
  }
}
</script>

<style lang="less" scoped>
.goods-info {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  justify-content: flex-start;
  .goods-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  };
  .goods-img {
    padding: 5px;
    img {
      width: 80px;
      height: 100px;
      display: block;
      border-radius: 5px;
    }
  };
  .goods-detail {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    // position: relative;
    overflow: hidden;
    .item-title, .item-desc {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    };
    .item-desc {
      font-size: 14px;
      color: #666;
      margin-top: 15px;
    };
    .item-bottom {
      margin-top: 25px;
      display: flex;
      justify-content: space-between;
      .left {
        color: orangered;
      }
    }
  }
}
</style>