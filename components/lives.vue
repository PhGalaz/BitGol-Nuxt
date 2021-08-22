<template>
  <v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100%;background-color:rgba(39,39,39,.5);border-radius:2px"
      align="center"
    >

      <ticle title='LIVE GAMES'/>
      <v-row
        class="ma-0 ml-1 mt-4 pa-0"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%;border-radius:2px"
          v-for="(league, index) in leagues"  :key="index"
          align="center"
        >
          <v-col
            @click="method(league.id)"
            class="ma-0 pa-0 live"
            style="max-width:25px;height:100%;opacity:.75"
            v-if="index == 0"
          >
            <v-row
              class="ma-0 pa-0"
              style="height:100%"
              justify="center"
            >
              <live
                class="ma-0 mb-1 pa-0"
                :fixture=league
              />
            </v-row>
          </v-col>
          <v-col
            @click="method(league.id)"
            class="ma-0 pa-0 live"
            style="max-width:25px;height:100%;opacity:.75"
            v-else-if="leagues[index].id != leagues[index - 1].id"
          >
            <v-row
              class="ma-0 pa-0"
              style="height:100%"
              justify="center"
            >
              <live
                class="ma-0 mb-1 pa-0"
                :fixture=league
              />
            </v-row>
          </v-col>
          <v-col
            class="ma-0 pa-0"
            style="height:100%"
            v-if="index == 0"
          >
            <v-row
              class="ma-0 pa-0 live"
              style="width:100%;border-radius:2px;opacity:0.75"
              v-for="(live, index) in $store.state.lives"  :key="index"
            >
              <v-row
                class="ma-0 pa-0"
                style="width:100%"
                v-if="live.league_id == league.id"
              >
                <live2
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
              style="width:100%;border-radius:2px;opacity:0.75"
              v-for="(live, index) in $store.state.lives"  :key="index"
            >
              <v-row
                class="ma-0 pa-0"
                style="width:100%"
                v-if="live.league_id == league.id"
              >
                <live2
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
      },
      method(data){
        console.log(data)
      }
    },
    computed: {
      leagues: function() {
        var bul = []
        var lives = this.$store.state.lives
        let leagues = [];
        for(var x in lives){
          var league = {
            logo: lives[x].league[0].logo,
            id: lives[x].league_id
          }
          leagues.indexOf(league) === -1 ? leagues.push(league) : '';
        }
        var byLeague = leagues.slice(0);
          byLeague.sort(function(a,b) {
              return a.id - b.id;
          });
        return byLeague;
      }
    }
  }
</script>

<style lang="sass">
  .live:hover
    opacity: 1 !important
    cursor: pointer !important
</style>
