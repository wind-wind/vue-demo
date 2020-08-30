import { Button, Carousel } from 'muse-ui'
// import 'muse-ui/lib/styles/base.less'

export function mu(Vue) {
  // Vue.component('MuButton', Button)
  // Vue.component('MuCarousel', Carousel)
  // Vue.component('MuCarouselItem', CarouselItem)
  Vue.use(Button)
  Vue.use(Carousel)
}