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
      style=""
      :class="{ 'shrinked': !deployed }"
      :dense="!deployed"
    >
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
      <v-row
        class="ma-0 pa-0"
        style="width:100%;height:100%"
      >
        <v-col
          class="ma-0 pa-0 col-3"
          :class="{ 'shrinked': !deployed }"
          style="height:64px"
        >
          <!-- LOGO HERE! -->
          <v-img
            max-height="65"

            src="logo.png"
            class="ma-0 ml-16 pa-0"
            :max-width= "deployed ? '180' : '150'"

            :class="{ 'mt-n3': !deployed }"
          ></v-img>
        </v-col>
        <v-col
          class="ma-0 pa-0 col-9"
          style=""
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%; height:40%"
            :class="{ 'd-none': !deployed }"
          >
            <v-row
              class="ma-0 pa-0"
              style="margin-left:25% !important"
              align="center"
            >
              <v-img
                max-height="19"
                max-width="19"
                src="bitcoin-cash-circle.png"
                class="ma-0 pa-0"
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
                class="mx-2 mr-5 appbar0"
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
                hide-slider
                fluid
              >
                <v-spacer></v-spacer>

                <v-tab
                  class="ma-0 mx-5 pa-0"
                  id="tab1"
                  style="color:white"
                  @mouseover="$store.commit('mouseOver', 1)"
                  @mouseleave="$store.commit('leaveOver', 1)"
                >Leagues</v-tab>

                <v-tab
                  class="ma-0 mx-5 pa-0"
                  id="tab2"
                  style="color:white"
                  @mouseover="$store.commit('mouseOver', 2)"
                  @mouseleave="$store.commit('leaveOver', 2)"
                >Tournaments</v-tab>

                <v-tab
                  class="ma-0 mx-5 pa-0"
                  id="tab3"
                  style="color:white"
                  @mouseover="$store.commit('mouseOver', 3)"
                  @mouseleave="$store.commit('leaveOver', 3)"
                >Teams</v-tab>

                <v-tab
                  class="ma-0 mx-5 pa-0"
                  id="tab4"
                  style="color:white"
                  @mouseover="$store.commit('mouseOver', 4)"
                  @mouseleave="$store.commit('leaveOver', 4)"
                >Countries</v-tab>
                <v-spacer></v-spacer>

              </v-tabs>
            </v-row>
            <v-row
              class="ma-0 pa-0"
              style="max-height:100% !important;margin-top:6px !important"
              align="center"
            >
              <v-spacer/>
              <v-row
                class="ma-0 pa-0"
                style="height:100% !important;height:30px"

              >
                <v-text-field
                  class="ma-0 pa-0"
                  solo
                  dense
                  append-icon="mdi-magnify"
                  style="width:10vw,margin-top:10px !important"
                  flat
                  clearable
                ></v-text-field>
              </v-row>
              <v-spacer/>
              <v-btn
                class="ma-0 mt-n1 mr-7 pa-0"
                icon
                small
                @click.stop="drawerright = !drawerright"
              >
                <v-icon style="transform:rotate(180deg)">mdi-{{ `${drawerright ? 'menu-open' : 'menu'}` }}</v-icon>
              </v-btn>
            </v-row>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>

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
      deployed: true,
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
  computed: {
    // product() {
    //   return this.store.getters['getProductById(this.$route.params.id)']
    // },
    //   works with:
    //   {{ $route.params.(name of .vue file on pages>products>_id.vue) }}
    // },
    current_bch_price() {
      return this.$store.getters['getCurrentPrice']
    }
  },
  mounted () {
      window.addEventListener('scroll', this.onScroll)
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
    async initdata() {
      const info = await this.$axios.$get('http://localhost:3000/bch')
      var data = info.info[0]
      this.$store.commit('initdata', data);
    },
    getMessage() {
      this.socket.emit('getMessage', { id: 'abc123' }, (resp) => {
        this.messageRxd = resp
      })
    },
    onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition > 0) {
          this.deployed = false
          console.log(this.deployed)
        } else {
          this.deployed = true
          console.log(this.deployed)
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
html
  overflow: auto

::-webkit-scrollbar
  border-radius: 0 3px 3px 0
  background: #272727
  width: 8px
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


</style>
