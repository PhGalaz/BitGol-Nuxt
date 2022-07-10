<template>
  <v-row
    class="ma-0 pa-0 titulo"
    style="width:100%;border-radius:2px;inset:-3px"
  >
    <subtitle
      class="ma-0 mt-1 pa-0 ops"
      title='<< PREV 100'
      style="height:100%;color:#ccc;max-width:120px"
    />
    <v-spacer></v-spacer>
    <subtitle
      class="ma-0 mt-1 mr-5 pa-0 justify-end ops"
      title='NEXT 100 >>'
      style="height:100%;color:#ccc;max-width:120px"
    />
      <v-row
        class="ma-0 mx-1 mt-1 pa-0"
        style="width:100%;height:30px;background-color:#1C1C1C;border-radius:2px 2px 0px 0px"
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
      class="ma-0 mx-1 mb-1 pa-0 lbar"
      style="max-height:70vh;max-width:100%;overflow:auto;;border-radius:0px 10px 0px 0px"
    >

      <v-row
        class="ma-0 pa-0"
        style="width:100%;background-color:#1C1C1C"
        v-for="(fixture,index) in $store.state.fixtures"  :key="fixture.fixture_id"
        justify="center"
      >
        <next-fixture class="ma-0 ml-1 pa-0" style="margin-right:1px !important;opacity:.75" :fixture="fixture"/>
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
      fixtures: function() {
        return this.$store.state.fixtures
      }
    },
    mounted(){

    }
  }
</script>

<style lang="sass" scoped>
  .lbar::-webkit-scrollbar
    border-radius: 0 0px 0px 0 !important
    background-color: #1C1C1C !important
    width: 12px !important
  .lbar::-webkit-scrollbar-thumb
    background-color: #ccc !important
    border-radius: 45px !important
    border-color: #222 !important
  .titulo
    background-size: 100% 100% !important
    // background-image: linear-gradient(45deg, rgba(12, 85, 99,.5) 0%, rgba(157, 161, 17,.5) 50%, rgba(0,166,82,.5) 100%) !important
    background-color: rgba(2, 121, 138,1) !important
  .titulo
    -webkit-filter: drop-shadow(0px 0px 15px rgba(2, 121, 138, 0.4))
    filter: drop-shadow(0px 0px 15px rgba(2, 121, 138, 0.4))
  .ops:hover
    cursor: pointer
    color: white !important

</style>
