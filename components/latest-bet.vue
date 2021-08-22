<template>
  <v-row
    class="ma-0 pa-0 bet"
    justify="center"
    align="center"
    style="width:100%;height:35px;background-color:#272727;border-radius:2px"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100%;color:#272727"
    >
      Hola
    </v-row>
  </v-row>
</template>

<script>
  export default {
    props: {
      fixture: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<style lang="sass">
  .bet
    opacity: .75 !important
  .bet:hover
    opacity: 1 !important
    cursor: pointer
</style>
