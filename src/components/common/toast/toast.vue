<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      message: '',
      show: false
    }
  },
  methods: {
    isshowtime(msg, timer) {
      this.show = true
      this.message = msg

      setTimeout(() => {
        this.show = false
        this.message = ''
      }, timer)
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    border-radius: 5px;

    color: #fff;
    background-color: rgba(0,0,0, .75);
  }
</style>