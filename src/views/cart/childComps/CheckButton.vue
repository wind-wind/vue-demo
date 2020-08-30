<template>
  <div class="icon-selector" :class="{'selector-active': check}" @click="selectItem">
    <img src="~/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      check: this.value
    }
  },
  methods: {
    selectItem() {
      this.check = !this.check
      this.$emit('checkBtnClick')
      // console.log(this.$store.getters.goodsList)
    }
  },
  watch: {
	  value(newValue) {
      this.check = newValue
    }
  }
}
</script>

<style lang="less" scoped>
.icon-selector {
  // position: relative;
  // margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}
.selector-active {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>