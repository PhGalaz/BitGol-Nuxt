
export const state = () => ({
  bch_price: null,
  info: []
})

export const mutations = {
  SOCKET_ONOPEN(state, chatMessage) {

  },
  SOCKET_ONMESSAGE(state, cont) {
    cont = JSON.parse(cont.data)
    if(cont[0].event == "bchinfo") {
      state.bch_price = cont[0].data.price.toFixed(2)
    }
  },
  initdata(state, data) {
    state.bch_price = data.price.toFixed(2)
  }
}

export const actions = {
  FORMAT_MESSAGE({ commit }, chatMessage){
    const chatMessageFmt = `$(new Date().toLocaleString()}: ${chatMessage}\r\n`
    commit('SET_MESSAGE', chatMessageFmt)
  }
}

export const getters = {
  // getProductById: (state) => (id) => {
  //   return state.products.find(product => product.id == id)
  // },
  getCurrentPrice(state){
    return state.bch_price
  }
}
