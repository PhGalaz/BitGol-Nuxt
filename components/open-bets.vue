<template>
  <v-row
    class="ma-0 pa-0"
    style="width:100%;background-color:rgba(39,39,39,.5);border-radius:2px"
  >
    <ticle title='OPEN BETS'/>
    <v-row
      class="ma-0 mt-4 pa-0"
    >
      <v-row
        class="ma-0 mx-1 mb-1 pa-0"
        style="width:100%"
      >
        <latest-bets />
      </v-row>
      <!-- <v-row
        class="ma-0 mx-1 mb-1 pa-0"
        style="width:100%"
      >
        <locked-bets />
      </v-row> -->
    </v-row>
    <!-- {{ object.fixture[0].league[0] }} -->
  </v-row>
</template>

<script>
  export default {

  }
</script>

<style lang="sass">

</style>
