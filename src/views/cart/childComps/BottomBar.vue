<template>
  <div class="bottom-menu">
    <div class="binfo">
      <check-button class="select-all" @checkBtnClick="checkBtnClick" v-model="light"></check-button>
      <div class="sel">全选</div>
      <div class="total-price">合计: ¥{{totalPrice}}</div>
    </div>
    <div class="buy-product">
      <span>去计算({{$store.getters.cartCount}})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
  name: 'BottomBar',
  components: {
    CheckButton
  },
  computed: {
    light() {
      return this.$store.getters.goodsList.find(item => item.checked === false) === undefined
    },
    totalPrice() {
      let cartList = this.$store.getters.goodsList
      return cartList.filter(item => item.checked).reduce((total, item) => {
        return total + item.count*item.newPrice
      }, 0).toFixed(2)
    }
  },
  methods: {
    checkBtnClick() {
      let select = this.$store.getters.goodsList.find(item => !item.checked)

      if(select) {
        this.$store.state.cartList.forEach(item => {      //这里不选择this.$store.getters.goodsList.forEach(...), getters类似计算属性，不作修改
          item.checked = true
        })
      }else {
        this.$store.state.cartList.forEach(item => {
          item.checked = false
        })
      }
    }
  }
}
</script>

<style lang="less" scped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 15px;
  box-sizing: border-box;
  display: flex;
  // align-items: center;
  justify-content: space-between;
  .binfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .sel {
      padding-left: 5px
    }
  };
  .select-all {
    display: flex;
    align-items: center;
    justify-content: center
  };
  .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  };
  .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    // float: right;
  }
}
</style>