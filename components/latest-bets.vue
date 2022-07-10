<template>
  <v-row
    class="ma-0 pa-0 box"
    style="min-height:76px;width:100%;border-radius:2px;inset:-3px;background-color:rgba(0, 148, 107,1) !important"
  >
    <subtitle
      class="ma-0 mt-1 pa-0"
      :title="title"
      style="height:100%;color:white"
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
          class="ma-0 ml-n2 pa-0"
          style="max-width:18%;color:#999"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:33.3%"
            justify="center"
            align="center"
          >
            <h5>HOME</h5>
          </v-row>
          <v-row
            class="ma-0 pa-0"
            style="width:33.3%"
            justify="center"
            align="center"
          >
            <h5>DRAW</h5>
          </v-row>
          <v-row
            class="ma-0 pa-0"
            style="width:33.3%"
            justify="center"
            align="center"
          >
            <h5>AWAY</h5>
          </v-row>
        </v-row>
      </v-row>
      <v-row
        class="ma-0 mb-1 pa-0 lbar"
        style="max-height:70vh;max-width:100%;overflow:auto;;border-radius:0 0 2px 2px"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%;background-color:#1C1C1C"
          v-for="(bet,index) in bets"  :key="bet.bet_id"
        >
          <latest-bet class="ma-0 ml-1 pa-0" style="opacity:.75;margin-right:1px !important" :bet="bet"/>
        </v-row>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
  export default {
    props: {
      bets: {
        type: Array,
        default: () => ({}),
      },
      title: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style lang="sass">
  // Scrollbar
  .lbar::-webkit-scrollbar
    border-radius: 0 0px 0px 0 !important
    background-color: #1C1C1C !important
    width: 12px !important
  .lbar::-webkit-scrollbar-thumb
    background-color: #ccc !important
    border-radius: 45px !important
    border-color: #222 !important

  .box
    -webkit-filter: drop-shadow(0px 0px 15px rgba(0, 148, 107, 0.4))
    filter: drop-shadow(0px 0px 15px rgba(0, 148, 107, 0.4))
</style>
