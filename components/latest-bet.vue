<template>
  <v-row
    class="ma-0 pa-0"
    justify="center"
    align="center"
    style="width:100%;height:55px;border-radius:2px;background-color:#121212"
  >
    <v-row
      class="ma-0 pa-0 bit"
      style="width:100%;color:#363636;height:100%;background-color:rgba(39,39,39,.5);opacity:.75;border-radius:2px"
    >

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
  .bit:hover
    background-color: rgba(39,39,39) !important
    opacity: 1 !important
    cursor: pointer
</style>
