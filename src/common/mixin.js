export const backTopMixin = {
  data: function () {
    return {
      showBackTop: false
    }
  },
  methods: {
    backtop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}
