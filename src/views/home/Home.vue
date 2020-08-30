<template>
  <div class="home">
    <nav-bar class="nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" @itemClick="tabClick" v-show="isShow" class="isfixed" ref="tabcon01"></tab-control>
    <scroll 
      ref="scroll"
      class="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="scroll"
      @pullingUp="loading"
      :data="datalist"
    >
      <home-carousel :list="banners"></home-carousel>
      <feature-view :list="recommends"></feature-view>
      <recommend-view></recommend-view>
      <tab-control :titles="['流行', '新款', '精选']" @itemClick="tabClick" ref="tabcon"></tab-control>
      <goods-list :list="datalist" class="glist"></goods-list>
    </scroll>
    <!-- <el-backtop target=".scroll"></el-backtop> -->
    <back-top class="bt" @backtop="backtop" v-show="showBackTop">
      <img src="~assets/img/common/top.png" alt="">
    </back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navBar'
import scroll from 'components/common/scroll/scroll'
import HomeCarousel from './childComps/HomeCarousel'
import FeatureView from './childComps/FeatureView'
import RecommendView from './childComps/RecommendView'
import TabControl from 'content/tabControl/TabControl'
import GoodsList from './childComps/GoodsList'
import BackTop from 'content/backTop/BackTop'

import { getHomeMultidata, getHomeData } from 'network/home'
import { POP, NEW, SELL } from '../../common/const'

// import { Loading } from 'element-ui'

export default {
  name: 'Home',
  components: {
    NavBar,
    scroll,
    HomeCarousel,
    FeatureView,
    RecommendView,
    TabControl,
    GoodsList,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        'pop': {page: 1, list: []},
        'new': {page: 1, list: []},
        'sell': {page: 1, list: []}
      },
      currentType: POP,
      isShow: false,
      Otop: 0,
      showBackTop: false
    }
  },
  computed: {
    datalist() {
      return this.goodsList[this.currentType].list
    }
  },
  created() {
    this.getMultidata()
    this.getHome(POP)
    this.getHome(NEW)
    this.getHome(SELL)
  },
  updated() {
    this.Otop = this.$refs.tabcon.$el.offsetTop
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.Otop, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.Otop = this.$refs.scroll.gscrollY
  },
  methods: {
    getMultidata() {
      getHomeMultidata().then(({ data: { data }}) => {
        // console.log(data)
        this.banners = data.banner.list
        this.recommends = data.recommend.list
      })
    },
    getHome(type) {
      getHomeData(type, this.goodsList[type].page).then(({ data: { data }}) => {
        // console.log(data)
        this.goodsList[type].list.push(...data.list)
        this.goodsList[type].page += 1
        this.$refs.scroll.finish()
      })
    },

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      this.$refs.tabcon.currentindex = index
      this.$refs.tabcon01.currentindex = index
    },

    scroll(pos) {
      this.isShow = this.Otop < -pos.y
      this.showBackTop = pos.y < -1000
      // let loading = Loading.service({
      //   target: this.$refs.glist
      // })
      // setTimeout(loading.close(), 1000)
    },

    loading() {
      this.getHome(this.currentType)
    },

    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    background-color: #fff;
    .isfixed {
      position: fixed;
      top: 44px;
      left: 0;
      right: 0;
    };
    .nav {
      background-color: var(--color-tint);
      font-weight: 700;
      color: #fff;
    };
    .scroll {
      position: fixed;
      top: 43px;
      bottom: 49px;
      left: 0;
      right: 0;
      overflow: hidden;
    };
    .bt {
      position: fixed;
      right: 10px;
      bottom: 60px;
    }
  }
</style>