<template>
  <div class="grid-view" ref="grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridView',
  props: {
    cols: {
      type: Number,
      default: 2
    },
    wMargin: {
      type: Number,
      default: 8
    },
    hMargin: {
      type: Number,
      default: 8
    },
    itemSpace: {
      type: Number,
      default: 8
    },
    lineSpace: {
      type: Number,
      default: 8
    }
  },
  mounted() {
    setTimeout(this.mainLayout, 20)
  },
  updated() {
    this.mainLayout()
  },
  methods: {
    mainLayout() {
      let gridEl = this.$refs.grid
      let children = gridEl.children

      gridEl.style.padding = `${this.hMargin}px ${this.wMargin}px`

      let itemWidth = (gridEl.clientWidth - 2 * this.wMargin - (this.cols - 1) * this.itemSpace) / this.cols

      for(let i=0; i < children.length; i++) {
        let item = children[i]
        item.style.width = itemWidth + 'px'
        if((i+1) % this.cols !== 0) {
          item.style.marginRight = this.itemSpace + 'px'
        }
        if((i+1) > this.cols) {
          item.style.marginTop = this.lineSpace + 'px'
        }
      }
    }
  }
}
</script>

<style scoped>
  .grid-view {
    display: flex;
    flex-wrap: wrap;
    /* width: 100%; */
  }
</style>