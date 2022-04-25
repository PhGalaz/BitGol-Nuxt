<template>
  <v-row
    class="ma-0 mb-1 pa-0 text-decoration-none a"
    :class="{ great: betted }"
    justify="center"
    align="center"
    style="width:100%;border-radius:2px;background-color:#272727"
    @mouseover="hovering0"
    @mouseleave="hovering"
  >
    <v-row
      class="ma-0 pa-0"
      style=""
    >

        <v-row
          class="ma-0 ml-2 pa-0 main-line"
          style="width:100%;height:50px;background-color:transparent"
          align="center"
          @click="$router.push(`/fixture/${fixture.fixture_id}`)"
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
              class="ma-0 pa-0 text-right"
              style="width:100%"
              align="center"
            >
              <v-spacer></v-spacer>
              <h4 class="ma-0 mr-7 pa-0 team" style="color:#CCC;max-width:250px">{{ fixture.homeTeam[0].name }}</h4>
              <v-img
                contain
                class="ma-0 mr-3 pa-0"
                max-height="25"
                max-width="25"
                :src="fixture.homeTeam[0].logo"
              ></v-img>
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
              justify="center"
              align="center"
            >
              <v-btn

                small
                class="open"
                style="border:0px solid #444;border-radius:2px"
                height="30px"
                @click=""
              >
                OPEN NEW BET
              </v-btn>
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
                contain
                class="ma-0 ml-3 pa-0"
                max-height="25"
                max-width="25"
                :src="fixture.awayTeam[0].logo"
              ></v-img>
              <h4 class="ma-0 ml-7 pa-0 team" style="color:#ccc;max-width:250px">{{ fixture.awayTeam[0].name }}</h4>
              <v-spacer></v-spacer>
            </v-row>
          </v-row>

          <v-spacer></v-spacer>
        </v-row>


      <v-expand-transition>
        <v-card
          v-if="bets.length > 0"
          v-show="extended"
          class="mx-1 mb-1 pa-0 fox"
          style="width:100%;border-radius:2px"
          justify="center"
          align="center"
          flat
        >
        <v-row
          v-if="bets.length > 0"
          class="ma-0 mx-1 pa-0"
          style="background-color:#1c1c1c;color:#999;border-radius:2px"
          align="center"
        >
          <v-row
            class="ma-0 mt-1 pa-0 x"
            style="max-width:35%"
            align="center"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:20%;font-size:10px;font-weight:bold"
              justify="center"
              align="center"
            >
              STATUS
            </v-row>
            <v-row
              class="ma-0 pa-0"
              style="width:40%;font-size:10px;font-weight:bold"
              justify="center"
              align="center"
            >
              INITIAL BID
            </v-row>
            <v-row
              class="ma-0 pa-0"
              style="width:40%;font-size:10px;font-weight:bold"
              justify="center"
              align="center"
            >
              AVAILABLE BID
            </v-row>
          </v-row>
          <v-row
            class="ma-0 ml-2 mt-1 pa-0 c"
            style="max-width:30%;height:100%;border-radius:2px;font-weight:bold;font-size:10px"
            justify="center"
          >
            <v-row
              class="ma-0 pa-0"
              style="max-width:60%"
            >
              <v-row
                class="ma-0 pa-0"
                justify="center"
                align="center"
              >
                HOME
              </v-row>
              <v-row
                class="ma-0 ml-1 pa-0"
                justify="center"
                align="center"
              >
                DRAW
              </v-row>
              <v-row
                class="ma-0 pa-0"
                justify="center"
                align="center"
              >
                AWAY
              </v-row>
            </v-row>
          </v-row>
          <v-row
            class="ma-0 mt-1 pa-0"
            style="min-width:35%;font-weight:bold;font-size:10px"
            justify="center"
          >
            TAKEN
          </v-row>
        </v-row>
          <v-row
            :to="/bet/"
            v-for="(bet,index) in bets" :key="bet.bet_id"
            :class="{ 'mt-1': index != 0 ,
                      'mb-1': index == bets.length - 1 }"
            class="ma-0 mt-1 mx-1 pa-0 b"
            style="height:35px;border-radius:2px;background-color:#222"
            justify="center"
            align="center"
            @click="$router.push(`/bet/${bet.bet_id}`)"
          >
            <v-row
              class="ma-0 pa-0"
              style="max-width:35%;height:100%"
              align="center"
            >
              <v-row
                class="ma-0 pa-0 text-uppercase c"
                style="width:20%;min-height:100%;font-size:12px;color:#ccc;font-weight:bold;background-color:#252525;border-radius:2px"
                align="center"
              >
                <v-row
                  class="ma-0 pa-0 c"
                  style="width:100%;min-height:100%"
                  justify="center"
                  align="center"
                >
                  {{ bet.status }}
                </v-row>
              </v-row>
              <v-row
                class="ma-0 pa-0"
                style="width:80%"
                align="center"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="color:#ccc"
                  justify="center"
                  align="center"
                >
                  <v-row
                    class="ma-0 pa-0 text-uppercase"
                    style="max-width:50%;font-size:12px;color:#999;font-weight:bold"
                    justify="center"
                    align="center"
                  >
                    <span class="ma-0 pa-0" style="width:100%">{{ total(bet.init_amount) }}
                      <span
                      @click="$store.commit('switch_units')"
                      class="ma-0 ml-1 pa-0"
                      style="font-size:9px;color:#999"
                      >{{ units }}</span></span>
                  </v-row>
                  <v-row
                    class="ma-0 pa-0 text-uppercase"
                    style="max-width:50%;font-size:12px;color:#ccc;font-weight:bold"
                    justify="center"
                    align="center"
                  >
                    <span class="ma-0 pa-0" style="width:100%">{{ available(bet.init_amount,bet.taken_amount) }}
                      <span
                        @click="$store.commit('switch_units')"
                        class="ma-0 ml-1 pa-0"
                        style="font-size:9px;color:#999"
                      >{{ units }}</span>
                    </span>
                  </v-row>
                </v-row>
              </v-row>
            </v-row>
            <v-row
              class="ma-0 ml-2 pa-0 c"
              style="max-width:30%;height:100%;border-radius:2px;font-weight:bold;background-color:#252525"
              justify="center"
            >
              <v-row
                class="ma-0 pa-0"
                style="max-width:60%"
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
            <v-row
              class="ma-0 pa-0"
              style="max-width:35%"
              align="center"
            >
              <v-row
                class="ma-0 pa-0"
                style="width:100%"
                align="center"
              >
                <v-row
                  class="ma-0 ml-8 pa-0"
                  style="max-width:80%"
                  align="center"
                >
                  <v-row
                    class="ma-0 pa-0"
                    style="font-size:10px;height:5px;border-radius:45px;min-width:.1%;background: linear-gradient(90deg, #555 0%,#555 100%)"
                  >
                    <v-row
                      class="ma-0 pa-0"
                      style="font-size:10px;height:5px;border-radius:45px;min-width:.1%;background: linear-gradient(90deg, #26D895 0%, #26D895 100%)"
                      :style="takenpos(takenper(bet.init_amount,bet.taken_amount))"
                    >
                    </v-row>
                  </v-row>
                </v-row>
                <v-row
                  class="ma-0 pa-0"
                  style="max-width:20%;color:#ccc"
                  justify="center"
                  align="center"
                >
                  <v-row
                    class="ma-0 pa-0 text-uppercase"
                    style="font-size:12px;color:#ccc;font-weight:bold"
                    justify="center"
                    align="center"
                  >
                    {{ takenper(bet.init_amount,bet.taken_amount) }}</span><span style="margin-left:2px;margin-top:2px;font-size:9px">%</span>
                  </v-row>
                </v-row>
              </v-row>

            </v-row>
          </v-row>
        </v-card>
      </v-expand-transition>
    </v-row>

  </v-row>
</template>

<script>

  export default {
    props: {
      fixture: {
        type: Object,
        default: () => ({}),
      }
    },
    data () {
      return {
        extended: false,
        disabled: false
      }
    },
    computed: {
      bets(){
        var fid = this.fixture.fixture_id
        var bets = this.$store.state.bets.filter(bet => bet.fixture_id == fid)
        return bets
      },
      betted(){
        if(this.bets.length > 0){
          return true
        }else{
          return false
        }
      },
      units() {
        if(this.$store.state.currency){
          return 'SATS'
        }else{
          return 'USD'
        }
      }
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
      takenper(total, taken) {
        return this.toFixed((taken * 100 / total),0)
      },
      takenpos(pos) {
        return "max-width:" + pos + "%"
      },
      available(total,taken) {
        if(this.$store.state.currency){
          var available = (total - taken).toLocaleString()
          return available
        }else{
          var avai = total - taken
          var available = (avai / 100000000 * this.$store.state.bch_price).toFixed(2)
          return available
        }
      },
      total(total){
        if(this.$store.state.currency){
          var total = total.toLocaleString()
          return total
        }else{
          var total = (total / 100000000 * this.$store.state.bch_price).toFixed(2)
          return total
        }
      },
      toFixed(num, fixed) {
        var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
        return num.toString().match(re)[0];
      },
      hovering() {
          setTimeout(() => this.extended = false, 100);
      },
      hovering0() {
          setTimeout(() => this.extended = true, 100);
      }
    }
  }
</script>



<style lang="sass" scoped>
  a
    overflow-x: hidden

  .a:hover
    // background-color: rgba(13, 152, 171,.2) !important
    background-color: #303030 !important
    cursor: pointer


  .b:hover
    background-color: #303030 !important
    cursor: pointer
    .c
      background-color: #303030 !important

  .open
    // background-color: rgba(255,255,255,.1) !important
    // border: 1px solid rgba(38,216,149,1) !important

    color: white !important
    background: linear-gradient(90deg, #104C54 0%, rgba(2, 121, 138,1) 50%, #104C54 100%) !important
    background-size: 300% 300% !important
    transition: .5s ease !important


  .open:hover
    opacity: 1
    // border: 1px solid rgba(38,216,149,1) !important
    color: white !important
    cursor: pointer
    background-position: right center !important

  .fox:hover
    cursor: auto !important


  .great
    // background: linear-gradient(90deg, rgba(2, 121, 138,.4) 0%, #252525 20%, #252525 80%,rgba(2, 121, 138,.4) 100%) !important
    background: linear-gradient(90deg, rgba(2, 123, 146,.1) 0%, rgba(2, 123, 146,.4) 30%, rgba(0, 166, 82,.4) 70%, rgba(0, 166, 82,.1) 100%) !important
    // background-size: 300% 300% !important
    // background-image: linear-gradient(45deg, rgba(2, 121, 138,.5) 0%, rgba(2, 121, 138,.5) 50%, rgba(0,166,82,.5) 100%) !important
    // transition: .5s !important
    // animation: animatedgradient 4s ease infinite !important
    // animation-direction: alternate !important
    // background-color: rgba(13, 152, 171,.3) !important
    // background-color: #353535 !important

    // background-image: repeating-linear-gradient(-45deg, transparent, transparent 70px, rgba(0,0,0,.035) 70px, rgba(0,0,0,.035) 140px)

  .great:hover
    background: linear-gradient(90deg, rgba(2, 123, 146,.2) 0%, rgba(2, 123, 146,.6) 30%, rgba(0, 166, 82,.6) 70%, rgba(0, 166, 82,.2) 100%) !important

    // background-color: #353535 !important
    // background-color: rgba(13, 152, 171,.6) !important
    // background-image: repeating-linear-gradient(-45deg, transparent, transparent 70px, rgba(0,0,0,.035) 70px, rgba(0,0,0,.035) 140px)
    // background: linear-gradient(90deg, #027B92 0%, tranparent 50%, #00A652 100%) !important
  .team:hover
    color: white !important
    cursor: pointer

  @keyframes animatedgradient
    0%
      background-position: right center !important
    100%
      background-position: left center !important



</style>
