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
      >
        <v-row
          class="ma-0 pa-0"
          style="width:25%;opacity:1"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%;height: 80%;"
            justify="center"
            align="center"
          >
            <v-img
              contain
              class="ma-0 pa-0"
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
              class="ma-0 mt-4 pa-0"
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
            style="width:100%;border-bottom:1px solid #222;line-height:1.1"
          >
            <v-row
              class="ma-0 mb-1 pa-0"
              style="min-width:50%"
            >
              {{ fixture.fixture.league[0].name }} <br>
              {{ fixture.fixture.league[0].round }}
            </v-row>
            <v-row
              class="ma-0 mb-1 pa-0 text-right"
              style="min-width:50%"
              justify="end"
              align="center"
            >
              {{ formatDate(this.fixture.fixture.event_date) }}
            </v-row>
          </v-row>
          <v-row
            class="ma-0 mt-10 pa-0"
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
          <v-row
            class="ma-0 mt-10 pa-0"
            style="width:100%;height:300px;border-radius:3px"
            justify="center"
            align="center"
          >
            Hola
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
              class="ma-0 pa-0"
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
              class="ma-0 mt-4 pa-0"
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
      now: Math.trunc((new Date()).getTime() / 1000)
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
      }      
    }
  }
</script>

<style lang="sass">

</style>
