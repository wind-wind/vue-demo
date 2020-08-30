import toast from './toast.vue'

const obj = {}

obj.install = function (Vue) {
  // document.body.appendChild(toast.$el)    //可能还未挂载，这时的toast.$el是undefined
  const toastConstructor = Vue.extend(toast)
  const toastt = new toastConstructor()

  toastt.$mount(document.createElement('div'))
  document.body.appendChild(toastt.$el) 

  Vue.prototype.$toast = toastt
}

export default obj