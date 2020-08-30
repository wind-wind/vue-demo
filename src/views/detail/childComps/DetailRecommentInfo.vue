<template>
  <div class="recomment-info">
    <div class="info-header">热门推荐</div>
    <grid-view>
      <goods-list-item v-for="(item, index) in recommendList" :key="index" :goods="item"></goods-list-item>
    </grid-view>
  </div>
</template>

<script>
  import GridView from 'components/common/gridview/GridView'
  import GoodsListItem from 'views/home/childComps/GoodsListItem'

	export default {
		name: "DetailRecommendInfo",
    components: {
		  GridView,
      GoodsListItem
    },
    props: {
		  recommendList: {
        type: Array,
        default() {
          return []
        }
      }
    }
	}
</script>

<style lang="less" scoped>
  .recomment-info {
    padding: 5px 0;
    .info-header {
      line-height: 40px;
      padding-left: 8px;
      font-size: 15px;
      color: #333;
    }
  }
</style>