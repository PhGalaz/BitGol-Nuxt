<template>
  <v-row
    v-if="fixture"
    class="ma-0 pa-0"
    justify="center"
    align="center"
    style="    background: linear-gradient(90deg, rgba(2, 123, 146,.1) 0%, rgba(2, 123, 146,.4) 30%, rgba(0, 166, 82,.4) 70%, rgba(0, 166, 82,.1) 100%) !important;height:70vh;width:100vw,opacity:.75"
    :style="$store.state.deployed ? 'margin-top:0px !important' : 'margin-top:-6px !important'"
  >
    <v-row
      class="ma-0 pa-0"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:25%;opacity:.7"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%"
          justify="center"
          align="center"
        >
          <p v-if="$fetchState.pending">Fetching mountains...</p>
          <v-img
            v-else
            contain
            class="ma-0 mr-3 pa-0"
            max-height="75"
            max-width="75"
            :src="fixture.fixture.homeTeam[0].logo"
          ></v-img>
        </v-row>
        <!-- <v-row
          class="ma-0 pa-0"
          style="width:100%;font-size:50px"
          justify="center"
          align="center"
        >
          {{ fixture[0].homeTeam[0].name }}
        </v-row> -->
      </v-row>
      <v-row
        class="ma-0 pa-0"
        style="width:50%"
      >

      </v-row>
      <v-row
        class="ma-0 pa-0"
        style="width:25%;opacity:.7"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%"
          justify="center"
          align="center"
        >
          <!-- <v-img
            contain
            class="ma-0 mr-3 pa-0"
            max-height="275"
            max-width="275"
            :src="fixture[0].awayTeam[0].logo"
          ></v-img> -->
        </v-row>
        <!-- <v-row
          class="ma-0 pa-0"
          style="width:100%;font-size:50px"
          justify="center"
          align="center"
        >
          {{ fixture[0].awayTeam[0].name }}
        </v-row> -->
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      fixture: []
    }),
    async fetch() {
      this.fixture = await this.$axios.$get(`http://localhost:3000/fixture/${this.$route.params.id}`)
      // this.fixture  = fixture.fixture

      // var fixtures = this.$store.state.fixtures
      // this.fixture = fixtures.filter(fixture => fixture.fixture_id == this.$route.params.id)
    },
    methods: {

    }
  }
</script>

<style lang="sass">

</style>
