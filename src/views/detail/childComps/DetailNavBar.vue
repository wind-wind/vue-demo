<template>
  <nav-bar class="detail-nav">
    <img slot="left" src="~assets/img/common/back.svg" alt="" @click="back" class="back">
    <div slot="center" class="title">
      <span class="title-item" v-for="(item, index) in titleInfos" :key="index" @click="titleClick(index)" :class="{'active': cindex === index}">{{item}}</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'common/navbar/navBar'

export default {
  name: 'DetailNavBar',
  props: {
	  titleInfos: {
	    type: Array,
      default: () => {
        return ['商品', '参数', '评论', '推荐']
      }
    },
    cindex: {   //由外部传入，子组件里不做修改（父组件滚动事件会设置其改变）
	    type: Number,
      default: 0
    }
  },
  methods: {
    titleClick(index) {
      this.$emit('itemClick', index)
    },

    back() {
      this.$router.back()
    }
  },
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>
.detail-nav {
  background-color: #fff;
  font-weight: normal;
  .back {
    margin-top: 12px;
  };
  .title {
    padding: 0 20px;
    font-size: 14px;
    display: flex;
    .title-item {
      flex: 1;
    }
  }
}

.active {
  color: var(--color-high-text);
}
</style>