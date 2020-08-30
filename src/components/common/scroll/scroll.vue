<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'scroll',
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    pullUpLoad: {
		  type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    setTimeout(this.__initScroll, 20)
  },
  methods: {
    __initScroll() {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      })

      this.scroll.on('scroll', pos => {
        this.$emit('scroll', pos)
      })

      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
        console.log('加载更多')
      })
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    finish() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    },
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    }
  },
  computed: {
    gscrollY() {
      return this.scroll ? this.scroll.y : 0 
    }
  },
  watch: {
    // 不断刷新滚动区域，用以将来获得准确的offsetTop; ps:由于这些数据是异步获得的，不用此法获得的offsetTop将偏小
	  data() {
      setTimeout(this.refresh, 20)
    }
  }
}
</script>

<style>

</style>