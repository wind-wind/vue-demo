<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(item, index) in paramInfo.sizes" :key="index" class="info-size">
      <tr v-for="(tr, indey) in item" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item, index) in paramInfo.infos" :key="index">
        <td class="key">{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
    .info-param {
      border-top: 1px solid rgba(0,0,0,.1);
    };
    .info-img {
      img {
        width: 100%;
      }
    };
    table {
      width: 100%;
      border-collapse: collapse;
      tr {
        height: 42px;
        td {
          border-bottom: 1px solid rgba(100,100,100,.1);
        };
        .key {
          width: 95px;
        };
        .value {
          color: #eb4868
        }
      }
    }
  }
</style>