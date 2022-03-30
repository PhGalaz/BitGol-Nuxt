import axios from 'axios'

export const state = () => ({
  min_bet: 36000,
  currency: true,

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
  teams: [],
  lives: [],
  bets: [],
  fixtures: []
})

export const mutations = {
  switch_units(state) {
    state.currency = !state.currency
  },
  SOCKET_ONOPEN(state, chatMessage) {

  },
  SOCKET_ONMESSAGE(state, cont) {
    cont = JSON.parse(cont.data)
    if(cont[0].event == "bchinfo") {
      // state.bch_price = cont[0].data.price.toFixed(2)
    }
    if(cont[0].event == "lives") {
      // state.lives = cont[0].data
    }
  },
  SET_FIXTURES(state, fixtures) {
    state.fixtures = fixtures;
  },
  bchprice(state, data) {
    state.bch_price = data.price.toFixed(2)
  },
  drawer1(state, data) {
    state.drawerright = data
  },
  getleagues(state, data) {
    var leagues = []
    var cups = []
    for(var x in data.leagues){
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
  getbets(state, data) {
    state.bets = data.bets
    console.log('1',state.bets['0'])
    console.log('2',state.bets['0'].bet_id)
  },
  getteams(state, data) {
    state.teams = data.teams
  },
  getlives(state, data) {
    state.lives = data.livegames
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
  },
  async loadFixtures({ commit }) {
    let response = await axios.get('http://localhost:3000/fixtures');
    commit('SET_FIXTURES', response.data.fixtures);
  }
}

export const getters = {
  // getProductById: (state) => (id) => {
  //   return state.products.find(product => product.id == id)
  // },
  getCurrentPrice(state){
    return state.bch_price
  }
  // allFixtures: (state) => state.fixtures
 //  fixturesById: state => {
 //   return _.keyBy(state.fixtures, "id")
 // }
}
