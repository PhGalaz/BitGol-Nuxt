<template>
  <v-row
    class="ma-0 pa-0"
    style="height:100%"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100%;max-height:70vh"
    >
      <fixture :fixture_id="$route.params.id"/>
      <app-bar-tabs
        style="position:absolute"
      />
    </v-row>
    <client-only>
      <play-resp
        style="width:100%;box-shadow:0px 5px 20px -10px #121212"
      />
    </client-only>



    <!-- Body -->

    <v-row
      class="ma-0 mt-4 pa-0"
      style="width:100%"
    >
      Que es esto?
    </v-row>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    mounted(){
      this.$store.dispatch('loadFixtures')
    }
}
</script>

<style lang="sass">
  .v-application
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none

</style>
