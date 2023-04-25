<template>
  <v-row
    class="ma-0 pa-0"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100%"
    >
      <p v-if="$fetchState.pending">Fetching ...</p>
      <fixture 
        v-else
        :fixture_id="$route.params.id"
        :fixture="fixture"
      />
      <!-- <app-bar-tabs
        style="position:absolute"
      /> -->
    </v-row>
    <client-only>
      <play-resp
        style="width:100%;box-shadow:0px 5px 20px -10px #121212"
      /> 
    </client-only>




    <!-- Body -->
    <v-row
      class="ma-0 mt-4 pa-0"
      style="width:100%"
    >
      <v-row
        class="ma-0 mx-3 pa-0"
        style=""
      >
        <v-col
          class="ma-0 pa-0 col-md-2"

        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%;border-radius:2px"
          >
            <!-- <lives
              class="ma-0 pa-0"
            /> -->
          </v-row>
        </v-col>
        <v-col
          class="ma-0 pa-0 col-12 col-md-8"
          style=""
        >
          <latest-bets
            :bets="open_bets"
            title='OPEN BETS'
            class="ma-0 pa-0"
          />
        </v-col>
        <v-col
          class="ma-0 pa-0 col-md-2"

        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%;border-radius:2px"
          >
            <!-- <lives
              class="ma-0 pa-0"
            /> -->
          </v-row>
        </v-col>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        fixture: []
      }
    },
    async fetch() {
      this.fixture = await this.$axios.$get(`http://localhost:3002/api/v2/data/fixture?id=${this.$route.params.id}`)
    },
    computed: {
      open_bets(){
        return this.$store.state.bets.filter(bet => bet.fixture_id == this.$route.params.id)
      }
    },
    mounted(){
      this.$store.dispatch('loadFixtures')
    }
}
</script>

<style lang="sass" scoped>
  .v-application
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none

</style>
