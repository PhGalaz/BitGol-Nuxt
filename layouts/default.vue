<template>
  <v-app
    dark
  >
    <v-navigation-drawer
      v-model="drawerleft"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      disable-resize-watcher
      width="10%"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      class="ma-0 pa-0"
      :clipped-left="clipped"
      fixed
      app
      :class="{ 'shrinked': !$store.state.deployed }"
      :dense="!$store.state.deployed"
      style="z-index:51"
    >
      <v-col
        class="ma-0 pa-0 col-3"
        :class="{ 'shrinked': !$store.state.deployed }"
        style="max-height:100%;overflow:hidden"
      >
        <v-img
          :width="!$store.state.deployed ? '170px' : '230px'"
          :position="!$store.state.deployed ? '0 -22px' : '-10px -25px'"
          height="80px"
          src="logo.png"
          class="ma-0 pa-0"
          style="margin-top:-5px !important"
        ></v-img>
      </v-col>
      <v-col
        class="ma-0 pa-0 col-9"
        style="height:100%"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%;height:40%"
          :class="{ 'd-none': !$store.state.deployed }"
        >
          <v-row
            class="ma-0 pa-0"
            style="margin-left:25% !important"
            align="center"
          >
            <v-img
              max-height="13"
              max-width="13"
              src="bitcoin-verde.png"
              class="ma-0 mr-1 pa-0"
            ></v-img>
            <p
              class="ma-1"
              style="color:white;font-size:13px"
            >
              BCH
            </p>
            <p
              class="font-weight-black ma-1 mt-1"
              style="color:white;font-size:13px"
            >
              ${{ $store.state.bch_price }}
            </p>
            <v-spacer></v-spacer>

            <v-btn
              style="text-transform: none;font-size:11px"
              text
              x-small
              dark
              class="mx-2 appbar0"
            >
              help
            </v-btn>
            <v-btn
              style="text-transform: none;font-size:11px"
              text
              x-small
              dark
              class="mx-2 appbar0"
            >
              cancel bet
            </v-btn>
            <v-btn
              style="text-transform: none;font-size:11px"
              text
              x-small
              dark
              class="mx-2 mr-2 appbar0"
            >
              sign in
            </v-btn>
          </v-row>
        </v-row>







        <v-row
          class="ma-0 pa-0"
          style="width:100%;height:60%"
        >
          <v-row
            class="ma-0 pa-0"
            style="height:100%;max-width:70%"
          >
            <v-tabs
              class="ma-0 pa-0"
              inactive
              background-color="transparent"
              centered
              optional
              height="38px"
              width="10%"
              hide-slider
              fluid
            >
              <v-spacer/>

              <v-tab
                class="ma-0 mx-2 pa-0"
                id="tab1"
                style="color:white"
                @mouseover="$store.commit('mouseOver', 1)"
                @mouseleave="$store.commit('leaveOver', 1)"
              >Leagues</v-tab>

              <v-tab
                class="ma-0 mx-2 pa-0"
                id="tab2"
                style="color:white"
                @mouseover="$store.commit('mouseOver', 2)"
                @mouseleave="$store.commit('leaveOver', 2)"
              >Cups</v-tab>

              <!-- <v-tab
                class="ma-0 mx-2 pa-0"
                id="tab3"
                style="color:white"
                @mouseover="$store.commit('mouseOver', 3)"
                @mouseleave="$store.commit('leaveOver', 3)"
              >Teams</v-tab> -->

              <v-tab
                class="ma-0 mx-2 pa-0"
                id="tab4"
                style="color:white;min-height:100%"
                @mouseover="$store.commit('mouseOver', 4)"
                @mouseleave="$store.commit('leaveOver', 4)"
              >Countries</v-tab>

              <v-spacer/>
            </v-tabs>
          </v-row>



          <v-row
            class="ma-0 pa-0"
            style="max-height:100% !important"
            align="center"
          >
            <v-spacer/>
            <v-row
              class="ma-0 pa-0"
              style="max-height:30px;z-index:0"

            >
              <v-text-field
                class="ma-0 pa-0"
                solo
                dense
                color="#272727"
                append-icon="mdi-magnify"
                style="z-index:100;overflow:hidden"
                :style="$store.state.deployed ? 'width:10vw;margin-top:0px !important' : 'width:10vw;margin-top:5px !important'"
                flat
                clearable
              ></v-text-field>
            </v-row>
            <v-spacer/>
            <v-btn
              class="ma-0 mr-3 pa-0"
              :class="$store.state.deployed ? 'mt-n1' : 'mt-1'"
              icon
              small
              @click.stop="drawer1"
            >
              <v-icon style="transform:rotate(180deg)">mdi-{{ `${drawerright ? 'menu-open' : 'menu'}` }}</v-icon>
            </v-btn>
          </v-row>
        </v-row>
      </v-col>




      <!-- <v-btn
        icon
        @click.stop="drawerleft = !drawerleft"
      >
        <v-icon>mdi-{{ `${drawerleft ? 'menu-open' : 'menu'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <!-- <v-toolbar-title v-text="title" /> -->



      <!-- <v-row
        class="ma-0 pa-0"
        style="width:100%;background-color:red"
        :class="{ 'shrinked': !$store.state.deployed }"
      >

      </v-row> -->
    </v-app-bar>
    <v-main
      style="background-color:#121212"
    >
      <Nuxt />
    </v-main>

    <v-navigation-drawer
      v-model="drawerright"
      :mini-variant="miniVariant"
      right
      fixed
      app
      disable-resize-watcher
      width="20%"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: true,
        drawerleft: false,
        drawerright: false,
        fixed: false,
        items: [
          {
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
    // async fetch() {
    //   this.currentbchprice = await fetch(
    //     'url'
    //   ).then(res => res.json())
    // },
    // computed: {
    //   product() {
    //     return this.store.getters['getProductById(this.$route.params.id)']
    //   },
    //     works with:
    //     {{ $route.params.(name of .vue file on pages>products>_id.vue) }}
    //   },
    //   current_bch_price() {
    //     return this.$store.getters['getCurrentPrice']
    //   }
    // },
    mounted () {
        window.addEventListener('scroll', this.onScroll),
        this.$options.sockets.onmessage = (data) => this.mess(data)
      },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    },
    created() {
      this.initdata()

      // let res = await this.$http.get('http://localhost:3000/leagues');
      // console.log(res)
      // this.$store.commit('leagues', res);


      // this.socket = this.$nuxtSocket({
      //   // nuxt-socket-io opts:
      //   name: 'home', // Use socket "home"
      //   channel: '/', // connect to '/index'
      //
      //   // socket.io-client opts:
      //   reconnection: false
      // })
    },
    methods: {
      mess(data){
        var event = JSON.parse(data.data)['0']['event']
        if (event == "bchinfo") {
          var price = parseFloat(JSON.parse(data.data)[0]['data']['price'].toFixed(2))
          var data = { price: price }
          this.$store.commit('bchprice', data)
        }
      },
      async initdata() {
        const info = await this.$axios.$get('http://localhost:3000/bch')
        var data = info.info[0]
        this.$store.commit('bchprice', data);
        const leagues = await this.$axios.$get('http://localhost:3000/leagues')
        this.$store.commit('getleagues', leagues);
        const countries = await this.$axios.$get('http://localhost:3000/countries')
        this.$store.commit('getcountries', countries);
        const teams = await this.$axios.$get('http://localhost:3000/teams')
        this.$store.commit('getteams', teams);
        const bets = await this.$axios.$get('http://localhost:3000/bets')
        this.$store.commit('getbets', bets);
      },
      getMessage() {
        this.socket.emit('getMessage', { id: 'abc123' }, (resp) => {
          this.messageRxd = resp
        })
      },
      drawer1() {
        this.drawerright = !this.drawerright,
        this.$store.commit('drawer1', this.drawerright)
      },
      onScroll () {
          const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
          if (currentScrollPosition > 0) {
            this.$store.commit('deploying', false);
          } else {
            this.$store.commit('deploying', true);
          }
          //   return
          // }
          // // Stop executing this function if the difference between
          // // current scroll position and last scroll position is less than some offset
          // if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
          //   return
          // }
          // this.showNavbar = currentScrollPosition < this.lastScrollPosition
          // this.lastScrollPosition = currentScrollPosition
      }
    }
  }
</script>

<style lang="sass">

  .v-btn:before
     opacity: 0 !important
  .v-ripple__container
    opacity: 0 !important

  html
    overflow: auto

  ::-webkit-scrollbar
    border-radius: 0 3px 3px 0
    background: #272727
    width: 12px
  ::-webkit-scrollbar-thumb
    background-color: white
    border: 2px solid #121212
    border-radius: 45px

  .v-toolbar__content, .v-toolbar__extension
    padding: 0px

  .v-text-field .v-input__control .v-input__slot
    min-height: auto !important
    display: flex !important
    align-items: center !important

  .shrinked
    max-height: 38px

  .ajust
    margin-top: 20px !important

  .v-toolbar__content
    max-height: 100%

  .v-input__control
    max-height: 0px

</style>
