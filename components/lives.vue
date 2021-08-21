<template>
  <v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100%"
      align="center"
    >

      <ticle title='GAMES LIVE NOW'/>
      <v-row
        class="ma-0 mt-4 pa-0"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%;border-radius:3px;margin-bottom:0px !important"
          v-for="(league, index) in leagues"  :key="index"
          align="center"
        >
          <v-col
            class="ma-0 mb-1 pa-0 live"
            style="max-width:25px;height:25px;background-color:#272727;border-radius:3px 0px 0px 3px;opacity:.75"
            v-if="index == 0"
          >
            <v-row
              class="ma-0 pa-0"
              justify="center"
              align="center"
              style="height:100%"
            >
              <v-img
                :src="league.logo"
                class="ma-0 pa-0"
                max-width="20px"
                max-height="20px"
              ></v-img>
            </v-row>
          </v-col>
          <v-col
            class="ma-0 mb-1 pa-0 live"
            style="max-width:25px;height:25px;background-color:#272727;border-radius:3px 0px 0px 3px;opacity:.75"
            v-else-if="leagues[index].id != leagues[index - 1].id"
          >
            <v-row
              class="ma-0 pa-0"
              justify="center"
              align="center"
              style="height:100%"
            >
              <v-img
                :src="league.logo"
                class="ma-0 pa-0"
                max-width="20px"
                max-height="20px"
              ></v-img>
            </v-row>
          </v-col>
          <v-col
            class="ma-0 pa-0"
            style="height:100%"
            v-if="index == 0"
          >
            <v-row
              class="ma-0 pa-0 live"
              style="width:100%;border-radius:3px;opacity:0.75"
              v-for="(live, index) in $store.state.lives"  :key="index"
            >
              <v-row
                class="ma-0 pa-0"
                style="width:10%"
                v-if="live.league_id == league.id"
              >
                <live
                  class="ma-0 mb-1 mx-1 pa-0"
                  :fixture=live
                />
              </v-row>
            </v-row>
          </v-col>
          <v-col
            class="ma-0 pa-0"
            style="height:100%"
            v-else-if="leagues[index].id != leagues[index - 1].id"
          >
            <v-row
              class="ma-0 pa-0 live"
              style="width:100%;border-radius:3px;opacity:0.75"
              v-for="(live, index) in $store.state.lives"  :key="index"
            >
              <v-row
                class="ma-0 pa-0"
                style="width:10%"
                v-if="live.league_id == league.id"
              >
                <live
                  class="ma-0 mb-1 mx-1 pa-0"
                  :fixture=live
                />
              </v-row>
            </v-row>
          </v-col>
        </v-row>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
export default {
  created() {
    this.initdata()
  },
  methods: {
    async initdata() {
      const lives = await this.$axios.$get('http://localhost:3000/lives')
      this.$store.commit('getlives', lives);
    }
  },
  computed: {
    leagues: function() {
      var bul = []
      var lives = this.$store.state.lives
      let leagues = [];


      for(var x in lives){
        console.log('test',lives[x])
        var league = {
          logo: lives[x].league[0].logo,
          id: lives[x].league_id
        }
        leagues.indexOf(league) === -1 ? leagues.push(league) : '';
      }

      return leagues;
    }
  }
}
</script>

<style lang="sass">
  .live:hover
    opacity: 1 !important
    cursor: pointer !important
</style>
