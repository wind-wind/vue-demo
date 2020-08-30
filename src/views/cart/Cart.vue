<template>
  <div class="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartCount}})</div></nav-bar>
    <cart-list :cart-list="cartList"></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navBar'
import CartList from './childComps/CartList'
import BottomBar from './childComps/BottomBar'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    BottomBar
  },
  computed: {
    cartList() {
      return this.$store.getters.goodsList
    },
    cartCount() {
      return this.$store.getters.cartCount
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  height: 100vh;
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
}
</style>