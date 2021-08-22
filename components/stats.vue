<template>
  <v-row
    class="ma-0 pa-0"
    style="width:100%;background-color:rgba(39,39,39,.5);border-radius:2px"
  >
    <inv-title
      title='STATS'
    />
    <v-row
      class="ma-0 mt-4 pa-0 stats"
      style="opacity:.75"
    >
      <v-row
        class="ma-0 mb-1 mx-1 pa-0"
        style="width:100%;height:25px;background-color:#272727;border-radius:2px"
        align="center"
        v-for="(key, index) in stats"  :key="index"
      >
        <h6 class="ma-0 ml-2 pa-0 text-right" style="font-weight:normal">{{ index }}</h6>
        <v-spacer></v-spacer>
        <h6 class="ma-0 mr-2 pa-0 text-right" style="font-weight:normal">{{ key }}</h6>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      stats: {
        'Total Bets': 2302,
        'Open Wagered': 1.23454309,
        'Open Bets': 54,
        'Registered Users': 1241,
        'Locked Bets': 12,
        'Locked Wagered': 0.87654568,
        'Total Wagered': 140.12456812,
      }
    })
  }
</script>

<style lang="sass">

</style>
