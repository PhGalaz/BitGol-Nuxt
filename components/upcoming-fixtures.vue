<template>
  <v-row
    class="ma-0 pa-0"
    style="width:100%;background-color:rgba(255,0,0,1);border-radius:2px"
  >
    <ticle title='OPEN BETS'/>
    <v-row
      class="ma-0 mt-4 pa-0"
    >
      <v-row
        class="ma-0 mx-1 mb-1 pa-0"
        style="max-width:100%"
      >
        <latest-bets />
      </v-row>
      <v-row
        class="ma-0 mx-1 mb-1 pa-0"
        style="max-width:100%"
      >
        <locked-bets />
      </v-row>
    </v-row>
  </v-row>
</template>

<script>

</script>

<style lang="sass">

</style>
