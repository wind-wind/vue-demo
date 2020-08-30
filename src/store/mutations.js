const mutations = {
  addCart(state, info) {
    // console.log(info)
    const goodsinfo = state.cartList.find(item => item.iid === info.iid)

    if(goodsinfo) {
      goodsinfo.count += 1    //引用赋值；这里改变，cartList里面对应的info.count跟着改变
    }else {
      info.count = 1
      info.checked = true
      state.cartList.push(info)
    }
  }
}

export default mutations