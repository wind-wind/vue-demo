<template>
  <scroll class="scroll" :data="[cartList]">
    <cart-list-item v-for="(item, index) in cartList" :key="index" :info="item"></cart-list-item>
  </scroll>
</template>

<script>
import scroll from 'components/common/scroll/scroll'
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  components: {
    scroll,
    CartListItem
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.scroll {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>