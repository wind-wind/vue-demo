<template>
  <div class="detail">
    <detail-nav @itemClick="titleClick" :cindex="currentIndex"></detail-nav>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll" :data="[imglist, goods, shop, info, paramInfo, commentInfo, recommendList]">
      <detail-swiper ref="base" :list="imglist"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :info="info"></detail-goods-info>
      <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <detail-recomment-info ref="recommend" :recommend-list="recommendList"></detail-recomment-info>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @backtop="backtop" class="bt" v-show="showBackTop">
      <img src="~assets/img/common/top.png" alt="">
    </back-top>
  </div>
</template>

<script>
import DetailNav from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailRecommentInfo from './childComps/DetailRecommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from 'components/content/backTop/BackTop'
import scroll from 'components/common/scroll/scroll'

import { getDetail, getRecommend, Goods, Shop, GoodsParam } from 'network/detail'
import {backTopMixin} from "../../common/mixin"

export default {
  name: 'Detail',
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommentInfo,
    DetailBottomBar,
    BackTop,
    scroll
  },
  data() {
    return {
      iid: '',
      imglist: [],
      goods: {},
      shop: {},
      info: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      themeTops: [],
      currentIndex: 0
    }
  },
  mixins: [backTopMixin],
  created() {
    this.getData()
    this.recommend()
  },
  updated() {
    // this.$event.$on('isload', this.getoffsettops())
    // this.$nextTick(() => {
    //   this.getoffsettops()
    // })
    this.isload()
  },
  methods: {
    getData() {
      let iid = this.$route.query.iid
      getDetail(iid).then(({ data: { result: data } }) => {
        // console.log(data)
        this.imglist = data.itemInfo.topImages

        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        this.shop = new Shop(data.shopInfo)

        this.info = data.detailInfo

        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        if (data.rate.list) {
          this.commentInfo = data.rate.list[0]
        }
      })
    },
    recommend() {
      getRecommend().then((res, error) => {
        if (error) return
        // console.log(res)
        this.recommendList = res.data.data.list
      })
    },


    isload() {
      this.themeTops = []
      this.themeTops.push(this.$refs.base.$el.offsetTop)
      this.themeTops.push(this.$refs.param.$el.offsetTop)
      this.themeTops.push(this.$refs.comment.$el.offsetTop)
      this.themeTops.push(this.$refs.recommend.$el.offsetTop)
      this.themeTops.push(Number.MAX_VALUE)
      // console.log(this.themeTops)
    },
    titleClick(index) {
      // console.log(index)
      // console.log(this.themeTops)
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 500)
    },
    scroll(position) {
      this.showBackTop = position.y < -1000
      this.api(-position.y)
    },
    api(position) {
      for(let i=0; i<this.themeTops.length; i++) {
        //比前一个大后一个小，锁定目标，避开复杂逻辑算法，一针见血
        if(position >= this.themeTops[i] && position < this.themeTops[i+1]) {
          this.currentIndex = i
          break
        }
      }
    },

    addToCart() {
      let obj = {}

      obj.iid = this.$route.query.iid
      obj.imgURL = this.imglist[0]
      obj.title = this.goods.title
      obj.desc = this.goods.desc
      obj.newPrice = this.goods.nowPrice

      this.$store.commit('addCart', obj)
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  // height: 100vh;
  .content {
    // height: calc(100% - 44px);
    position: fixed;
    top: 44px;
    bottom: 58px;
    left: 0;
    right: 0;
    overflow: hidden;

    // position: absolute;
    // top: 44px;
    // bottom: 60px;
  };
  .bt {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
}
</style>