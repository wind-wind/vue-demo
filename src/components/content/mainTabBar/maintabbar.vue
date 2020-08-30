<template>
  <div>
    <tab-bar>
      <tab-bar-item link="/home" bgc=''>
        <img slot="old" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category" bgc=''>
        <img slot="old" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart" bgc=''>
        <img slot="old" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="active" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile" bgc=''>
        <img slot="old" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from '../../common/tabbar/tabBar'
import tabBarItem from '../../common/tabbar/tabBarItem'

export default {
  name: 'maintabbar',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style>

</style>