<template>
  <v-row
    class="ma-0 pa-0"
    style="width:100%;border-radius:2px;inset:-3px;background-color:rgba(0,166,82,1) !important"
  >
    <subtitle
      class="ma-0 mt-1 pa-0"
      title='NEW BETS'
      style="height:100%;color:#ccc"
    />
    <v-row
      class="ma-0 mx-1 pa-0 lbar"
      style="max-width:100%;overflow:auto;border-radius:2px"
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
        style="width:100%;height:30px;background-color:#1C1C1C;border-radius:2px 2px 0 0"
        justify="center"
      >
        <v-row
          class="ma-0 ml-1 pa-0"
          style="width:38%"
        >

        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="width:15%;color:#999"
        >
          <v-row
            class="ma-0 pa-0"
            justify="center"
            align="center"
          >
            <h5>HOME</h5>
          </v-row>
          <v-row
            class="ma-0 pa-0"
            justify="center"
            align="center"
          >
            <h5>DRAW</h5>
          </v-row>
          <v-row
            class="ma-0 pa-0"
            justify="center"
            align="center"
          >
            <h5>AWAY</h5>
          </v-row>
        </v-row>
        <v-row
          class="ma-0 mr-1 pa-0"
          style="width:38%"
        >

        </v-row>
      </v-row>
      <v-row
        class="ma-0 mb-1 pa-0 lbar"
        style="max-height:70vh;max-width:100%;overflow:auto;;border-radius:0 0 2px 2px"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%;background-color:#1C1C1C"
          v-for="(bet,index) in $store.state.bets"  :key="bet.bet_id"
        >
          <!-- <open-bet class="ma-0 mx-1 mt-1 pa-0" :bet="bet"/> -->

          <latest-bet class="ma-0 ml-1 pa-0" style="opacity:.75;margin-right:1px !important":bet="bet"/>
          <!-- <v-row>
            <img
              src="test.png"
              alt="John"
            >
          </v-row> -->
        </v-row>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {

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
    border-radius: 0 0px 0px 0 !important
    background-color: #1C1C1C !important
    width: 12px !important
  .lbar::-webkit-scrollbar-thumb
    background-color: #ccc !important
    border-radius: 45px !important
    border-color: #222 !important


</style>
