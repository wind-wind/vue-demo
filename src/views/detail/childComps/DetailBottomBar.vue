<template>
  <div class="bottom-bar">
    <div class="item left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="item right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCart() {
      this.$emit('addToCart')
      this.$toast.isshowtime('已加入购物车' ,1500)
    }
  }
}
</script>

<style lang="less" scoped>
  .bottom-bar {
    height: 58px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    display: flex;
    text-align: center;
    z-index: 99;
    .item {
      flex: 1;
      display: flex;
      div {
        flex: 1;
      }
    };
    .left {
      .text {
        font-size: 13px;
      };
      .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 10px auto 3px;
        background: url("~assets/img/detail/detail_bottom.png") 0 0;
        background-size: 100%;
      };
      .service {
        background-position:0 -53px;
      };
      .shop {
        background-position:0 -98px;
      }
    };
    .right {
      font-size: 15px;
      color: #fff;
      line-height: 58px;
      .cart {
        background-color: #ffe817;
        color: #333;
      };
      .buy {
        background-color: #f69;
      }
    }
  }
</style>