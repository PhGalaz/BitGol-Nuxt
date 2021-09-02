<template>
  <v-row
    class="ma-0 pa-0"
    style="width:100%;background-color:#259872;border-radius:2px"
  >
    <subtitle
      class="ma-0 mt-1 pa-0"
      title='LATEST BETS'
      style="height:100%"
    />
    <v-row
      class="ma-0 mx-1 mb-1 pa-0 lbar"
      style="max-height:504px;max-width:100%;overflow:auto;border-radius:2px"
    >
      <!-- <v-row
        class="ma-0 pa-0"
        style="background-color:#121212;border-radius:2px"
        v-for="bet in this.$store.state.bets"  :key="bet.bet_id"
      >
        {{ bet.fixture['0'].league }}
        <latest-bet class="ma-0 mx-1 mt-1 pa-0" :bet="bet" />
      </v-row> -->
      <v-row
        class="ma-0 pa-0"
        style="background-color:#121212;border-radius:2px"
        v-for="bet in bets"  :key="bet.bet_id"
      >
        {{ data }}
        <latest-bet class="ma-0 mx-1 mt-1 pa-0" :data="data" />
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        data: {
          fixture: [
            {
              league: [
                {
                  name: 'NB III - Keleti',
                  country: 'Hungary',
                  logo: 'https://media.api-sports.io/football/leagues/633.png',
                  flag: 'https://media.api-sports.io/flags/hu.svg',
                },
              ],
              homeTeam: [
                {
                  team_id: 2410,
                  team_name: 'Kazincbarcikai',
                  logo: 'https://media.api-sports.io/football/teams/2410.png',
                },
              ],
              awayTeam: [
                {
                  team_id: 5143,
                  team_name: 'Sényő Carnifex',
                  logo: 'https://media.api-sports.io/football/teams/5143.png',
                },
              ],
              score: [
                {
                  halftime: '2-0',
                  fulltime: null,
                  extratime: null,
                  penalty: null,
                },
              ],
              _id: '612fb5a382ad06f6f4a19a24',
              fixture_id: 743292,
              league_id: 3616,
              event_date: '2021-09-01T15:30:00.000Z',
              event_timestamp: 1630510200,
              firstHalfStart: 1630510200,
              secondHalfStart: 1630513800,
              round: 'Keleti - 5',
              status: 'Second Half',
              statusShort: '2H',
              elapsed: 90,
              venue: 'Kolorcity Aréna',
              referee: null,
              goalsHomeTeam: 2,
              goalsAwayTeam: 0,
              __v: 0,
            },
          ],
          users: [],
          _id: '612fb5a582ad06f6f4a19a45',
          bet_id: 457854458,
          created: '2021-09-01T17:17:25.734Z',
          init_tx: 'hadbvuasvdiyb13873ter7wefbwjbvfwre7yfbwuovw',
          init_amount: 20000,
          taken_amount: 15000,
          fixture_id: 328344,
          type: 'evslv',
          factor: 3,
          status: 'open',
          __v: 0,
        },
      }
    },
    computed: {
      bets: function() {
        var bets = this.$store.state.bets
        return bets

        //var byDate = bets.slice(0);
        //  byDate.sort(function(a,b) {
        //      return a.created - b.created;
        //  });
        //return byDate;
      }
    }
  }
</script>

<style lang="sass">
  .lbar::-webkit-scrollbar
    border-radius: 3px
    background-color: #259872
    width: 8px
  .lbar::-webkit-scrollbar-thumb
    background-color: white
    border-radius: 3px !important
    border-color: #259872

</style>
