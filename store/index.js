
export const state = () => ({
  deployed: true,
  drawerright: false,

  bch_price: null,
  showleagues: false,
  showcups: false,
  showteams: false,
  showcountries: false,
  info: [],
  leagues: [],
  countries: [],
  teams: []
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
  bchprice(state, data) {
    state.bch_price = data.price.toFixed(2)
  },
  drawer1(state, data) {
    console.log(data)
    state.drawerright = data
  },
  getleagues(state, data) {
    var leagues = []
    var cups = []
    // console.log('data1', data)
    for(var x in data.leagues){
      // console.log('data2', data.leagues[x].type)
      if(data.leagues[x].type == 'League'){
        leagues.push(data.leagues[x])
      } else if(data.leagues[x].type == 'Cup') {
        cups.push(data.leagues[x])
      }
    }
    leagues = leagues.sort((a, b) => a.country.name.localeCompare(b.country.name))
    state.leagues = leagues
    state.cups = cups
  },
  getcountries(state, data) {
    state.countries = data.countries
  },
  getteams(state, data) {
    state.teams = data.teams
  },
  setshowleagues(state, value){
    state.showleagues = value
  },
  setshowcups(state, value){
    state.showcups = value
  },
  setshowteams(state, value){
    state.showteams = value
  },
  setshowcountries(state, value){
    state.showcountries = value
  },
  deploying(state, value){
    state.deployed = value
  },
  leaveOver(state, x){
    if(x == 0){
      state.showleagues == false
      state.showcups == false
      state.showteams == false
      state.showcountries == false
    }
    if(x == 1){
      if (state.showleagues == true){
        state.showleagues = false;
        document.getElementById("tab1").style.background = ""
      }
    }
    else if (x == 2) {
      if (state.showcups == true){
        state.showcups = false;
        document.getElementById("tab2").style.background = ""
      }
    }
    else if (x == 3) {
      if (state.showteams == true){
        state.showteams = false;
        document.getElementById("tab3").style.background = ""
      }
    }
    else if (x == 4) {
      if (state.showcountries == true){
        state.showcountries = false;
        document.getElementById("tab4").style.background = ""
      }
    }
  },
  mouseOver(state, x){
    if(x == 1){
      if (state.showleagues == true){
        document.getElementById("tab1").style.background = "rgba(255,255,255,.05)"
      } else {
        state.showleagues = !state.showleagues;
      }
    }
    else if (x == 2) {
      if (state.showcups == true){
        document.getElementById("tab2").style.background = "rgba(255,255,255,.05)"
      } else {
        state.showcups = !state.showcups;
      }
    }
    else if (x == 3) {
      if (state.showteams == true){
        document.getElementById("tab3").style.background = "rgba(255,255,255,.05)"
      } else {
        state.showteams = !state.showteams;
      }
    }
    else if (x == 4) {
      if (state.showcountries == true){
        document.getElementById("tab4").style.background = "rgba(255,255,255,.05)"
      } else {
        state.showcountries = !state.showcountries;
      }
    }
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
