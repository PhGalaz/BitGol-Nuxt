<template>
  <v-row
    class="ma-0 mb-1 pa-0 vet"
    justify="center"
    align="center"
    style="width:100%;height:60px;border-radius:2px;background-color:#272727"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <v-expand-transition>
      <v-card
        class="ma-0 pa-0"
        v-show="hover"
        height="20"
        style="background-color:transparent;border:0px solid #555;border-radius:2px;width:100%;max-width:100%;
          font-size:10px;color:#999"
        justify="center"
        flat
      >
        <v-row
          v-show="hover"
          class="ma-0 mt-1 pa-0"
          style="width:100%"
          align="center"
          justify="center"
        >
          <v-row
            class="ma-0 pa-0"
            style="max-width:80%;font-weight:bold"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:30%"
              align="center"
            >
              <v-img
                class="ma-0 pa-0 logos"
                max-height="10"
                max-width="13"
                :src="bet.fixture[0].league[0].flag"
                style="opacity:.7"
              ></v-img>
              <v-img
                class="ma-0 ml-1 pa-0 logos"
                max-height="10"
                max-width="13"
                :src="bet.fixture[0].league[0].logo"
                style="opacity:.7"
              ></v-img>
            </v-row>
            <v-spacer></v-spacer>
            <v-row
              class="ma-0 pa-0"
              align="center"
              style="width:40%"
              justify="center"
            >
              <p

                style="letter-spacing:0px"
                class="ma-0 pa-0 font-weight-black"
              >{{days}}</p>
              <p

                style="letter-spacing:0px"
                class="ma-0 pa-0 font-weight-medium"
              >D</p>
              <p

                style="letter-spacing:0px"
                class="ma-0 ml-1 pa-0 font-weight-black"
              >{{hours}}</p>
              <p

                style="letter-spacing:0px"
                class="ma-0 pa-0 font-weight-medium"
              >H</p>
              <p

                style="letter-spacing:0px"
                class="ma-0 ml-1 pa-0 font-weight-black"
              >{{minutes}}</p>
              <p

                style="letter-spacing:0px"
                class="ma-0 pa-0 font-weight-medium"
              >M</p>
              <p

                style="letter-spacing:0px"
                class="ma-0 ml-1 pa-0 font-weight-black"
              >{{seconds}}</p>
              <p

                style="letter-spacing:0px"
                class="ma-0 pa-0 font-weight-medium"
              >S</p>
            </v-row>
            <v-row
              class="ma-0 pa-0"
              style="width:30%"
            >
              <v-spacer></v-spacer>
              {{eventDate.toUpperCase().replace(/,/g, '')}}
            </v-row>
          </v-row>
        </v-row>
      </v-card>
    </v-expand-transition>

    <v-row
      class="ma-0 pa-0 main-line"
      style="width:100%;height:50px;background-color:transparent"
      align="center"
    >
      <!-- left -->
      <v-spacer></v-spacer>
      <v-row
        class="ma-0 ml-1 pa-0"
        style="width:20%;border-radius:45px"
        align="center"
        justify="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="height:100%"
        >
          <v-row
            class="ma-0 pa-0 text-right"
            style="width:100%"
            align="center"
          >
            <v-spacer></v-spacer>
            <h4 class="ma-0 mr-7 pa-0" style="color:#CCC;max-width:200px">{{ bet.fixture[0].homeTeam[0].name }}</h4>
            <v-img
              class="ma-0 mr-3 pa-0"
              max-height="30"
              max-width="30"
              :src="bet.fixture[0].homeTeam[0].logo"
            ></v-img>
          </v-row>
        </v-row>
      </v-row>



      <!-- center -->

      <v-row
        class="ma-0 pa-0"
        style="max-width:18%;height:100%;border-radius:2px;font-weight:bold"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%"
        >
          <v-row
            class="ma-0 pa-0"
            :style="factor_style(bet.home_factor.toFixed(2))"
            justify="center"
            align="center"
          >
            {{bet.home_factor.toFixed(2)}}
          </v-row>
          <v-row
            class="ma-0 pa-0"
            :style="factor_style(bet.draw_factor.toFixed(2))"
            justify="center"
            align="center"
          >
            {{bet.draw_factor.toFixed(2)}}
          </v-row>
          <v-row
            class="ma-0 pa-0"
            :style="factor_style(bet.away_factor.toFixed(2))"
            justify="center"
            align="center"
          >
            {{bet.away_factor.toFixed(2)}}
          </v-row>
        </v-row>
      </v-row>


      <!-- right -->
      <v-row
        class="ma-0 mr-1 pa-0"
        style="width:20%;height:50px;border-radius:45px"
        align="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%"
          align="center"
        >
          <v-img
            class="ma-0 ml-3 pa-0"
            max-height="30"
            max-width="30"
            :src="bet.fixture[0].awayTeam[0].logo"
          ></v-img>
          <h4 class="ma-0 ml-7 pa-0" style="color:#ccc;max-width:200px">{{ bet.fixture[0].awayTeam[0].name }}</h4>
          <v-spacer></v-spacer>
        </v-row>
      </v-row>
      <v-spacer></v-spacer>
    </v-row>





    <v-expand-transition>
      <v-card
        class="ma-0 mt-n1 mb-n1"
        v-show="hover"
        height="160"
        style="background-color:transparent;border:0px solid #555;border-radius:2px;width:100%;max-width:100%;
          font-size:12px;color:#555;overflow:hidden;height:190px"
          flat
      >
        <v-row
          v-show="hover"
          class="ma-0 pa-0"
          style="width:100%;overflow:hidden"
          justify="center"

        >
          <v-row
            class="ma-0 mt-3 pa-0"
            style="min-width:80%;max-width:80%"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:100%;height:100px"
            >
              <v-row
                class="ma-0 pa-0"
                style="width:25%;height:80px"
              >

                <v-row
                  class="ma-0 pa-0"
                  style="width:100%;max-height:20px"
                  @click="$store.commit('switch_units')"
                  align="center"
                >
                  <v-row
                    class="ma-0 pa-0"
                    style="width:100%;color:#999"
                  >
                    <span
                      class="ml-1 font-weight-bold align-end"
                      style="font-size:10px"
                    >TOTAL</span>
                  </v-row>
                  <v-row
                    class="ma-0 pa-0"
                    style="width:100%;color:#999;margin-top:-2px !important"
                  >
                    <span
                      class="ml-1 font-weight-bold"
                      style="font-size:10px;color:#ccc"
                      v-text="total"
                    ></span>
                    <span
                      class="font-weight-light ml-1"
                      style="font-size:10px"
                      v-text="large_units_display"
                    ></span>
                  </v-row>
                  <v-row
                    class="ma-0 mt-1 pa-0"
                    style="width:100%;color:#999"
                  >
                    <span
                      class="ml-1 font-weight-bold align-end"
                      style="font-size:10px"
                    >TAKEN</span>
                  </v-row>
                  <v-row
                    class="ma-0 pa-0"
                    style="width:100%;color:#999;margin-top:-2px !important"
                  >
                    <span
                      class="ml-1 font-weight-bold"
                      style="font-size:10px;color:#ccc"
                      v-text="taken.taken"
                    ></span>
                    <span
                      class="font-weight-light ml-1"
                      style="font-size:10px"
                      v-text="large_units_display"
                    ></span>
                    <span
                      class="ml-1 font-weight-bold"
                      style="font-size:10px;color:#ccc"
                      v-text="taken.porcentage + '%'"
                    ></span>
                  </v-row>
                  <v-row
                    class="ma-0 mt-1 pa-0"
                    style="width:100%;color:#999"
                  >
                    <span
                      class="ml-1 font-weight-bold align-end"
                      style="font-size:10px"
                    >AVAILABLE</span>
                  </v-row>
                  <v-row
                    class="ma-0 pa-0"
                    style="width:100%;color:#999;margin-top:-5px !important"
                  >
                    <span
                      class="ml-1 font-weight-bold"
                      style="font-size:15px;color:#ccc"
                      v-text="available.available.toLocaleString()"
                    ></span>
                    <span
                      class="font-weight-light ml-1"
                      style="font-size:10px;margin-top: 5px"
                      v-text="large_units_display"
                    ></span>
                    <span
                      class="ml-1 font-weight-bold"
                      style="font-size:10px;color:#ccc;margin-top:5px !important"
                      v-text="available.porcentage + '%'"
                    ></span>
                  </v-row>

                </v-row>
              </v-row>
              <v-row
                class="ma-0 pa-0"
                style="width:50%;height:80px"
                justify="center"
              >

                <v-row
                  class="ma-0 mx-8 pa-0"
                  style="width:100%;height:10px"
                  @click="$store.commit('switch_units')"
                >
                  <span
                    class="ml-1 text-h7 font-weight-light"
                    style=";color:#ccc"
                    v-text="small_amount_display"
                  ></span>
                  <span
                    class="text-h7 font-weight-light ml-1"
                    v-text="small_units_display"
                  ></span>
                </v-row>

                <v-row
                  class="ma-0 mt-1 mx-8 pa-0"
                  style="width:100%"
                  @click="$store.commit('switch_units')"
                >
                  <span
                    class="ml-1 text-h4 font-weight-light"
                    style="color:#ccc"
                    v-text="large_amount_display"
                  ></span>
                  <span
                    class="subheading font-weight-light ml-1 mt-3"
                    style="font-size:20px"
                    v-text="large_units_display"
                  ></span>
                </v-row>

                <v-row
                  class="ma-0 mt-2 mx-8 pa-0"
                  style="width:100%;height:10px"
                >
                  <v-slider
                    v-model="bpm"
                    min="0"
                    :max="max_bet"
                    style="width:100%"
                    color="#26D895"
                    track-color="#26D895"
                    track-fill-color="#333"
                    dense
                    @change="check_taken()"
                  >
                    <template v-slot:prepend>
                      <v-icon
                        :color="red"
                        @click="decrement"
                      >
                        mdi-minus
                      </v-icon>
                    </template>

                    <template v-slot:append>
                      <v-icon
                        :color="red"
                        @click="increment"
                      >
                        mdi-plus
                      </v-icon>
                    </template>
                  </v-slider>
                </v-row>
              </v-row>
              <v-row
                class="ma-0 pa-0"
                style="width:25%;height:80px"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="width:100%;color:#999"
                  justify="end"
                >
                  <span
                    class="ml-1 font-weight-bold"
                    style="font-size:10px"
                  >YOU BET</span>
                </v-row>
                <v-row
                  class="ma-0 mt-n1 pa-0"
                  style="width:100%;color:#999"
                  justify="end"
                >
                  <span
                    class="ml-1 font-weight-bold"
                    style="font-size:13px;color:#ccc"
                    v-text="large_amount_display"
                  ></span>
                  <span
                    class="font-weight-light ml-1"
                    style="font-size:10px;margin-top:3px"
                    v-text="large_units_display"
                  ></span>
                </v-row>
                <v-row
                  class="ma-0 mt-2 pa-0"
                  style="width:100%"
                  justify="end"
                >
                  <span
                    class="ml-10 font-weight-bold"
                    style="font-size:13px"
                  >HOME</span>
                  <v-spacer></v-spacer>
                  <span
                    class="ml-1 font-weight-bold"
                    :style="alt_style(bet.home_factor)"
                    v-text="home_amount_display"
                  ></span>
                  <span
                    class="font-weight-light ml-1"
                    style="font-size:10px;margin-top:3px"
                    v-text="large_units_display"
                  ></span>
                </v-row>
                <v-row
                  class="ma-0 pa-0"
                  style="width:100%"
                  justify="end"
                >
                  <span
                    class="ml-10 font-weight-bold"
                    style="font-size:13px"
                  >DRAW</span>
                  <v-spacer></v-spacer>
                  <span
                    class="ml-1 font-weight-bold"
                    :style="alt_style(bet.draw_factor)"
                    v-text="draw_amount_display"
                  ></span>
                  <span
                    class="font-weight-light ml-1"
                    style="font-size:10px;margin-top:3px"
                    v-text="large_units_display"
                  ></span>
                </v-row>
                <v-row
                  class="ma-0 pa-0"
                  style="width:100%"
                  justify="end"
                >
                  <span
                    class="ml-10 font-weight-bold"
                    style="font-size:13px"
                  >AWAY</span>
                  <v-spacer></v-spacer>
                  <span
                    class="ml-1 font-weight-bold"
                    :style="alt_style(bet.away_factor)"
                    v-text="away_amount_display"
                  ></span>
                  <span
                    class="font-weight-light ml-1"
                    style="font-size:10px;margin-top:3px"
                    v-text="large_units_display"
                  ></span>
                </v-row>
                <!-- <vue-qr
                  v-show="hover"
                  class="ma-0 pa-0"
                  backgroundColor="#222"
                  colorLight="#222"
                  colorDark="#ccc"
                  margin="0"
                  text="Hello world!"
                  :size="100">
                </vue-qr> -->
              </v-row>
            </v-row>
            <v-row
              class="ma-0 mt-3 pa-0"
              style="width:100%;height:35px"
            >
              <v-row
                class="ma-0 pa-0"
                style="width:30%"

              >
                <v-avatar
                  class="ma-0 pa-0"
                  size="35"
                  style="border:1px solid #444"
                >
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  >
                </v-avatar>
                <v-row
                  class="ma-0 pa-0"
                  style="height:35px"
                  align="center"
                >
                  <v-row
                    class="ma-0 pa-0"
                    style="height:80%"
                  >
                    <v-col
                      class="ma-0 pa-0"
                      style=""
                    >
                      <v-row
                        class="ma-0 pa-0"
                        style="width:100%;color:#999"
                      >
                        <span
                          class="ml-1 font-weight-bold align-end"
                          style="font-size:10px"
                        >OPEN BY</span>
                      </v-row>
                      <v-row
                        class="ma-0 pa-0"
                        style="width:100%;color:#999;margin-top:-2px !important"
                      >
                        <span
                          class="ml-1 font-weight-bold align-end"
                          style="font-size:10px"
                        >PhGalazHidalgo</span>
                      </v-row>
                    </v-col>
                    <v-col
                      class="ma-0 pa-0"
                      style=""
                    >
                      <v-row
                        class="ma-0 pa-0"
                        style="height:50%;width:100%;color:#999"
                      >
                        <v-img
                          class="ma-0 ml-1 pa-0"
                          max-height="10"
                          max-width="13"
                          :src="bet.fixture[0].homeTeam[0].logo"
                          style="opacity:.7"
                        ></v-img>
                      </v-row>
                      <v-row
                        class="ma-0 pa-0"
                        style="height:50%;width:100%;color:#999"
                      >
                        <v-img
                          class="ma-0 mt-1 ml-1 pa-0"
                          max-height="10"
                          max-width="13"
                          :src="bet.fixture[0].awayTeam[0].logo"
                          style="opacity:.7"
                        ></v-img>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-row>

              </v-row>
              <v-row
                class="ma-0 pa-0"
                style="width:40%"
              >

              </v-row>
              <v-row
                class="ma-0 pa-0"
                style="width:30%"
              >

              </v-row>
            </v-row>
          </v-row>
        </v-row>
      </v-card>
    </v-expand-transition>

  </v-row>
</template>

<script>
  import VueQr from 'vue-qr'
  export default {
    props: {
      bet: {
        type: Object,
        default: () => ({}),
      }
    },
    components: {
      VueQr
    },
    data () {
      return {
        value: 0,
        init_amount: this.bet.init_amount,
        taken_amount: this.bet.taken_amount,
        now: Math.trunc((new Date()).getTime() / 1000),
        bpm: null,
        hover: false,
        interval: null,
        isPlaying: false,
        home_style: "font-size:13px;color:#ccc",
        draw_style: "font-size:13px;color:#ccc",
        away_style: "font-size:13px;color:#ccc"
      }
    },
    computed: {
      factor() {
        var arr = [this.bet.home_factor, this.bet.draw_factor, this.bet.away_factor]
        var factor = Math.max(...arr)
        return factor
      },
      usds() {
        return (this.sats / 100000000 * this.$store.state.bch_price).toFixed(2)
      },
      sats() {
        return this.bpm - this.taken_equivalent
      },
      total() {
        if(this.$store.state.currency){
          return this.bet.init_amount.toLocaleString()
        }else{
          return (this.bet.init_amount / 100000000 * this.$store.state.bch_price).toFixed(2)
        }
      },
      available() {
        var porcentage = 100 - (this.bet.taken_amount * 100 / this.bet.init_amount)
        if(this.$store.state.currency){
          var available = {
            available: (this.bet.init_amount - this.bet.taken_amount),
            porcentage: porcentage.toFixed(1)
          }
          return available
        }else{
          var avai = this.bet.init_amount - this.bet.taken_amount
          var available = {
            available: (avai / 100000000 * this.$store.state.bch_price).toFixed(2),
            porcentage: porcentage.toFixed(1)
          }
          return available
        }
      },
      taken() {
        var porcentage = this.bet.taken_amount * 100 / this.bet.init_amount
        if(this.$store.state.currency){
          var taken = {
            taken: this.bet.taken_amount.toLocaleString(),
            porcentage: porcentage.toFixed(1)
          }
          return taken
        }else{
          var porcentage = this.bet.taken_amount * 100 / this.bet.init_amount
          var taken = {
            taken: (this.bet.taken_amount / 100000000 * this.$store.state.bch_price).toFixed(2),
            porcentage: porcentage.toFixed(1)
          }
          return taken
        }
      },
      small_amount_display() {
        if(this.$store.state.currency){
          return this.usds
        }else{
          return this.sats.toLocaleString()
        }
      },
      small_units_display() {
        if(this.$store.state.currency){
          return 'USD'
        }else{
          return 'SATS'
        }
      },
      large_amount_display() {
        if(this.$store.state.currency){
          return this.sats.toLocaleString()
        }else{
          return this.usds
        }
      },
      large_units_display() {
        if(this.$store.state.currency){
          return 'SATS'
        }else{
          return 'USD'
        }
      },
      home_amount_display() {
        if(this.$store.state.currency){
          var home = this.sats * this.bet.home_factor
          return home.toLocaleString(undefined, {'minimumFractionDigits':0,'maximumFractionDigits':0})
        }else{
          var home = this.usds * this.bet.home_factor
          return home.toFixed(2).toLocaleString()
        }
      },
      draw_amount_display() {
        if(this.$store.state.currency){
          var draw = this.sats * this.bet.draw_factor
          return draw.toLocaleString(undefined, {'minimumFractionDigits':0,'maximumFractionDigits':0})
        }else{
          var draw = this.usds * this.bet.draw_factor
          return draw.toFixed(2).toLocaleString()
        }
      },
      away_amount_display() {
        if(this.$store.state.currency){
          var away = this.sats * this.bet.away_factor
          return away.toLocaleString(undefined, {'minimumFractionDigits':0,'maximumFractionDigits':0})
        }else{
          var away = this.usds * this.bet.away_factor
          return away.toFixed(2).toLocaleString()
        }
      },
      max_bet() {
        var max = (this.bet.init_amount) / (this.factor - 1)
        return max
      },
      taken_equivalent() {
        var taken_e = (this.bet.taken_amount) / (this.factor - 1)
        taken_e = parseInt(taken_e.toFixed(2))
        return taken_e
      },
      min_bet() {
        var min = ((this.bet.taken_amount) / (this.factor - 1)) + this.$store.state.min_bet
        return min
      },
      eventDate() {
         var date = this.bet.fixture[0].event_date;
         return this.formatDate(date)
      },
      dateInMilliseconds() {
        var kickoff = this.bet.fixture[0].event_timestamp;
        return kickoff
      },
      seconds() {
        return (this.dateInMilliseconds - this.now) % 60;
      },
      minutes() {
        return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
      },
      hours() {
        return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
      },
      days() {
        return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
      },
      color () {
        if (this.bpm < 100) return 'indigo'
        if (this.bpm < 125) return 'teal'
        if (this.bpm < 140) return 'green'
        if (this.bpm < 175) return 'orange'
        return 'red'
      },
      animationDuration () {
        return `${60 / this.bpm}s`
      },
    },
    methods: {
      factor_style(factor) {
        if(factor > 1.00){
          return "height:100%;font-size:12px;color:#26D895"
        }else if(factor == 1.00){
          return "height:100%;font-size:12px;color:#ccc"
        }else if(factor < 1.00){
          return "height:100%;font-size:12px;color:#FC2C3B"
        }
      },
      alt_style(factor) {
        if(factor > 1.00){
          return "font-size:13px;color:#26D895"
        }else if(factor == 1.00){
          return "font-size:13px;color:#ccc"
        }else if(factor < 1.00){
          return "font-size:13px;color:#FC2C3B"
        }
      },
      check_taken() {
        if(this.bpm < this.taken_equivalent + this.$store.state.min_bet){
          this.bpm = this.taken_equivalent + this.$store.state.min_bet
        }
      },
      formatDate(date) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        return new Date(date).toLocaleTimeString('en', options)
      },
      decrement () {
        this.bpm = this.bpm - ((1000000 / this.$store.state.bch_price).toFixed(0))
        this.check_taken()
      },
      increment () {
        var penny_price = parseInt((1000000 / this.$store.state.bch_price).toFixed(0))
        this.bpm = this.bpm + penny_price
        this.check_taken()
      },
      toggle () {
        this.isPlaying = !this.isPlaying
      }
    },
    created () {
      this.bpm = this.taken_equivalent + this.$store.state.min_bet
    },
    mounted () {
      window.setInterval(() => {
          this.now = Math.trunc((new Date()).getTime() / 1000);
      },1000);
    },
  }
</script>



<style lang="sass">

  .logos:hover
    opacity: 2 !important
  .taken
    min-width: 100% !important

  .vet
    // transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1) !important
    transition: .3s !important

  .vet:hover
      cursor: pointer
      height: 270px !important
      background-color: #1C1C1C !important
      .main-line
        background-color: #333 !important
        max-width: 80% !important

  @keyframes metronome-example
    from
      transform: scale(.5)
    to
      transform: scale(1)


  .v-avatar--metronome
    animation-name: metronome-example
    animation-iteration-count: infinite
    animation-direction: alternate


</style>
