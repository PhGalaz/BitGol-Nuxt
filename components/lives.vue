<template>
  <v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100%;background-color:rgba(39,39,39,.5);border-radius:2px"
      align="center"
    >

      <ticle title='LIVE GAMES'/>
      <v-row
        class="ma-0 mx-1 mt-4 pa-0"
        v-if="leagues.length > 0"
      >
        <v-row
          class="ma-0 pa-0"
        >
          <v-row
            class="ma-0  pa-0"
            style="width:100%;border-radius:2px"
            v-for="(league, index) in leagues"  :key="index"
            align="center"
          >

            <v-row
              v-if="index == 0"
              class="ma-0 mb-2 pa-0"
              style="border-radius:2px;background-color:#272727"
              justify="center"
            >
              <league-title
                class="ma-0 mt-1 ml-2 pa-0"
                style="height:25px;background-color:#272727"
                :fixture=league
              />
                <v-row
                  class="ma-0 mb-1 mx-1 pa-0"
                  style="width:100%;max-height:100%;border-radius:2px"
                >
                  <v-row
                    class="ma-0 pa-0"
                    style="width:100%;border-radius:2px"
                    v-for="live in $store.state.lives" :key="live.fixture_id"
                  >
                    <v-row
                      class="ma-0 pa-0"
                      style="width:100%"
                      v-if="live.league_id == league.id"
                    >
                      <live
                        class="ma-0 mt-1 pa-0 live"
                        style="opacity:.75;background-color:#1C1C1C"
                        :fixture=live
                      />
                    </v-row>
                  </v-row>
                </v-row>
              </v-row>
              <v-row
                v-else-if="league.id != leagues[index-1].id"
                class="ma-0 mb-2 pa-0"
                style="border-radius:2px;background-color:#272727"
                justify="center"
              >
                <league-title
                  class="ma-0 mt-1 ml-2 pa-0"
                  style="height:25px;background-color:#272727"
                  :fixture=league
                />
                  <v-row
                    class="ma-0 mb-1 mx-1 pa-0"
                    style="width:100%;max-height:100%;border-radius:2px"
                  >
                    <v-row
                      class="ma-0 pa-0"
                      style="width:100%;border-radius:2px"
                      v-for="live in $store.state.lives" :key="live.fixture_id"
                    >
                      <v-row
                        class="ma-0 pa-0"
                        style="width:100%"
                        v-if="live.league_id == league.id"
                      >
                        <live
                          class="ma-0 mt-1 pa-0 live"
                          style="opacity:.75;background-color:#1C1C1C"
                          :fixture=live
                        />
                      </v-row>
                    </v-row>
                  </v-row>
                </v-row>
            </v-row>
          </v-row>


        </v-row>
        <v-row
          class="ma-1 mt-4 pa-0"
          v-else
          align="center"
          justify="center"
          style="height:100px;border-radius:2px;opacity:.75;color:#1C1C1C;background-color:#272727"
        >
          <v-icon
            class="ma-0 mb-n3 mt-2 pa-0"
            color="#629122"
            style="width:100%"
          >mdi-sleep</v-icon>
          <h5 style="height:50%;color:#629122">NO LIVE GAMES <br>AT THIS HOURS</h5>
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
            id: lives[x].league_id,
            name: lives[x].league[0].name,
            flag: lives[x].league[0].flag
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
