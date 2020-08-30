const getters = {
  goodsList(state) {
    return state.cartList
  },
  cartCount(state, getters) {
    return getters.goodsList.length
  }
}

export default getters