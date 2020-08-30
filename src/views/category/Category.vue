<template>
  <div class="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @tabclick="tab"></tab-menu>
      <tab-control :titles="['综合', '新品', '销量']" @itemClick="tabClick" ref="tabcon01" class="isfixed" v-show="isShow"></tab-control>
      <scroll ref="scroll" class="tab-content" :data="[categories, list, goodsList]" :probe-type="3" @scroll="scroll">
        <tab-content-category :subcategories="list"></tab-content-category>
        <tab-control :titles="['综合', '新品', '销量']" @itemClick="tabClick" ref="tabcon"></tab-control>
        <tab-content-detail :category-detail="datalist"></tab-content-detail>
      </scroll>
      <back-top @backtop="backtop" class="bt" v-show="showBackTop">
        <img src="~assets/img/common/top.png" alt="">
      </back-top>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navBar'
import scroll from 'components/common/scroll/scroll'
import BackTop from 'components/content/backTop/BackTop'
import TabControl from 'content/tabControl/TabControl'

import TabMenu from './childComps/TabMenu'
import TabContentCategory from './childComps/TabContentCategory'
import TabContentDetail from './childComps/TabContentDetail'

import {getCategory, getSubcategory, getCategoryDetail} from "network/category"
import { POP, NEW, SELL } from '../../common/const'
import {backTopMixin} from "../../common/mixin"

export default {
  name: 'Category',
  components: {
    NavBar,
    scroll,
    BackTop,
    TabMenu,
    TabContentCategory,
    TabControl,
    TabContentDetail
  },
  data() {
    return {
      categories: [],
      currentIndex: -1,
      list: {},
      goodsList: {
        'pop': [],
        'new': [],
        'sell': []
      },
      currentType: POP,
      isShow: false,
      Otop: 0
    }
  },
  mixins: [backTopMixin],
  computed: {
    datalist() {
      return this.goodsList[this.currentType]
    }
  },
  created() {
    this.getmenu()
    // this.getsub(0)
  },
  updated() {
    this.Otop = this.$refs.tabcon.$el.offsetTop
  },
  methods: {
    getmenu() {
      getCategory().then(({ data: {data: {category: { list }}} }) => {
        // console.log(list)
        this.categories = list

        this.getsub(0)
      })
    },
    getsub(index) {
      this.currentIndex = index
      let key = this.categories[index].maitKey
      getSubcategory(key).then(({data: {data}}) => {
        // console.log(data)
        this.list = data
        this.getdetail(POP)
        this.getdetail(SELL)
        this.getdetail(NEW)
      })
    },
    getdetail(type) {
      let key = this.categories[this.currentIndex].miniWallkey
      getCategoryDetail(key, type).then(({data}) => {
        // console.log(data)
        this.currentType = type
        this.goodsList[type] = data
      })
    },

    tab(index) {
      this.getsub(index)
      this.$refs.scroll.scrollTo(0, 0, 20)
      // this.isShow = false
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
    }
  }
}
</script>

<style lang="less" scoped>
  .category {
    height: 100vh;
    .nav-bar {
      background-color: var(--color-tint);
      font-weight: 700;
      color: #fff;
    };
    .content {
      position: fixed;
      top: 44px;
      left: 0;
      right: 0;
      bottom: 49px;
      display: flex;
      .tab-content {
        // height: 100%;
        flex: 1;
      };
      .isfixed {
        position: fixed;
        top: 44px;
        left: 100px;
        right: 0;
      };
      .bt {
        position: fixed;
        right: 10px;
        bottom: 60px;
      }
    }
  }
</style>