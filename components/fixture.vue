<template>
  <v-row
    class="ma-0 pa-0"
    style="width:100%"
  >
    <v-row
      class="ma-0 pa-0"
      justify="center"
      style="background-color:black;height:70vh;width:100vw"
      :style="$store.state.deployed ? 'margin-top:0px !important' : 'margin-top:-6px !important'"
    >
      <v-row
        class="ma-0 pa-0"
        align="center"
        :style="{ 
          backgroundImage: `url(${require('@/static/stadium1.webp')})`,
          backgroundSize: 'cover'
       }"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:25%"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%;height: 80%;"
            justify="center"
            align="center"
          >
            <v-img
              contain
              class="ma-0 pa-0 logo_team"
              max-height="240"
              max-width="240"
              :src="fixture.fixture.homeTeam[0].logo"
            ></v-img>
          </v-row>
          <v-row
            class="ma-0 pa-0 text-center text-uppercase"
            style="width:100%;font-size:30px;font-weight:bold;height:100px"
            justify="center"
            align="center"
          >
            <v-row
              class="ma-0 mt-4 pa-0 name_team"
              style="max-width:250px;color:grey;line-height:35px"
              justify="center"
            >
              {{ fixture.fixture.homeTeam[0].name }}
            </v-row>
          </v-row>
        </v-row>
        <v-row
          class="ma-0 pa-0 text-uppercase"
          style="width:25%;max-height:80%;color:grey;font-size:13px;font-weight:bold"
          justify="center"
          align="center"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%;line-height:1.1;transform: scaleX(1.05);background-color:rgba(255,255,255,0)"
          >
            <v-row
              class="ma-0 my-2 ml-2 pa-0"
              style=""
            >
              {{ fixture.fixture.league[0].name }} <br>
              {{ fixture.fixture.league[0].round }}
            </v-row>
            <v-row
              class="ma-0 mb-1 mr-2 pa-0 text-right"
              style=""
              justify="end"
              align="center"
            >
              {{ formatDate(this.fixture.fixture.event_date) }}
            </v-row>
          </v-row>
          <v-row
            class="ma-0 my-4 pa-0"
            style="transform:scale(1.05);border-radius:3px;background-color:rgba(0,0,0,0)"
          >
            <v-row
              class="ma-0 my-10 pa-0"
              style="width:100%;height:90%;color:#ccc"
              justify="center"
            >
              {{ this.fixture.fixture.status[0].long }}
              <v-row
                class="ma-0 pa-0"
                style="width:100%"
                justify="center"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="font-size:40px"
                  justify="center"
                >
                  <p
                    style="letter-spacing:0px"
                    class="ma-0 pa-0 font-weight-medium"
                  ><span v-if="days < 10">0</span>{{ days }}<span style="color:grey">D</span></p>
                  <p
                    style="letter-spacing:0px"
                    class="ma-0 ml-3 pa-0 font-weight-medium"
                  ><span v-if="hours < 10">0</span>{{ hours }}<span style="color:grey">H</span></p>
                  <p
                    style="letter-spacing:0px"
                    class="ma-0 ml-3 pa-0 font-weight-medium"
                  ><span v-if="minutes < 10">0</span>{{ minutes }}<span style="color:grey">M</span></p>
                  <p
                    style="letter-spacing:0px"
                    class="ma-0 ml-3 pa-0 font-weight-medium"
                  ><span v-if="seconds < 10">0</span>{{ seconds }}<span style="color:grey">S</span></p>
                </v-row>
              </v-row>
              COUNTDOWN TO KICKOFF
            </v-row>

          </v-row>

          <v-row
            class="ma-0 pa-0"
            style="width:100%;height:150px;border-radius:3px;transform: scaleX(1.05);background-color:rgba(0,0,0,0)"
            justify="center"
            align="center"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:100%;height:100%"
              justify="center"
              align="end"
            >
              <v-dialog
                v-model="dialog"
                width="100vw"
                min-height="100vh"
                persistent
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-row
                    class="ma-0 pa-0 button"
                    style="transition:.2s !important;max-width:300px;height:40%;color:rgba(0, 148, 107,1);font-size:16px;border-radius:3px;border:3px solid rgba(0, 148, 107,.2);background-color:rgba(0, 148, 107,.1)"
                    justify="center"
                    align="center"
                    v-bind="attrs"
                    v-on="on"
                  >
                    OPEN NEW BET
                  </v-row>
                </template>

                <v-card
                  class="ma-0 pa-0"
                  style="background-color:transparent;border-radius:3px"
                >
                  <create-bet
                    v-on:close-dialog="closeDialog"
                    :fixture="fixture" 
                  />
                </v-card>
              </v-dialog>
            </v-row>
          </v-row>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="width:25%;opacity:1"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%;height:80%"
            justify="center"
            align="center"
          >
            <v-img
              contain
              class="ma-0 pa-0 logo_team"
              max-height="240"
              max-width="240"
              :src="fixture.fixture.awayTeam[0].logo"
            ></v-img>
          </v-row>
          <v-row
            class="ma-0 pa-0 text-center text-uppercase"
            style="width:100%;font-size:30px;font-weight:bold;height:100px"
            justify="center"
            align="center"
          >
            <v-row
              class="ma-0 mt-4 pa-0 name_team"
              style="max-width:250px;color:grey;line-height:35px"
              justify="center"
            >
              {{ fixture.fixture.awayTeam[0].name }}
            </v-row>
          </v-row>
        </v-row>
      </v-row>
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
    data: () => ({
      now: Math.trunc((new Date()).getTime() / 1000),
      dialog: false
    }),
    // async fetch() {
    //   this.fixture = await this.$axios.$get(`http://localhost:3000/fixture/${this.$route.params.id}`)

    //   // var fixtures = this.$store.state.fixtures
    //   // this.fixture = fixtures.filter(fixture => fixture.fixture_id == this.$route.params.id)
    // },
    computed: {
      dateInMilliseconds() {
        var kickoff = this.fixture.fixture.event_timestamp;
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
      }
    },
    mounted () {
      window.setInterval(() => {
          this.now = Math.trunc((new Date()).getTime() / 1000);
      },1000)
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        return new Date(date).toLocaleTimeString('en', options)
      },
      closeDialog(){
        this.dialog = false;
      }      
    }
  }
</script>

<style lang="sass">
  .logo_team
    -webkit-filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, .5))
    filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, .5)) brightness(1.2)

  .name_team
    -webkit-filter: drop-shadow(0px 0px 25px rgba(255, 255, 255, .5))
    filter: drop-shadow(0px 0px 25px rgba(255, 255, 255, .5)) brightness(1.75)

  .button:hover
    cursor: pointer
    color: white !important
    border-color: rgba(0, 148, 107,1) !important
    background-color: rgba(0, 148, 107,.4) !important
    -webkit-filter: drop-shadow(0px 0px 15px rgba(0, 148, 107,1))
    filter: drop-shadow(0px 0px 15px rgba(0, 148, 107,1)) brightness(1.2)
</style>
