<template>
  <div class="item" @click="itemClick">
    <div class="item-icon" v-show="!isActive"><slot name="old"></slot></div>
    <div class="item-icon" v-show="isActive"><slot name="active"></slot></div>
    <div class="item-text" :style="styleActive"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'tabBarItem',
  props: {
    link: {
      type: String,
      required: true
    },
    bgc: {
      type: String,
      default: 'deeppink'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    styleActive() {
      return this.isActive ? { color : this.bgc || 'deeppink' } : {}
    }
  },
  methods: {
		itemClick() {
			this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>
  .item {
    flex: 1;
  }
  .item-icon img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }
  .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
</style>