<template>
  <div class="back-top" @click="backClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  methods: {
    backClick() {
      this.$emit('backtop')
    }
  }
}
</script>

<style scoped>
  .back-top img {
    width: 43px;
    height: 43px;
  }
</style>