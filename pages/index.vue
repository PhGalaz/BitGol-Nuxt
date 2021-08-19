<template>
  <v-row
    class="ma-0 pa-0"
    style="height:100%"
  >
    <v-row
      class="ma-0 pa-0"
      style="background-color:#121212;width:100%;max-height:70vh"
    >
      <cover/>
      <menu-leagues
        style="position:fixed;z-index:50"
        @mouseover.native="$store.commit('mouseOver', 1)"
        @mouseleave.native="$store.commit('leaveOver', 1)"
      />
      <menu-cups
        style="position:fixed;z-index:50"
        @mouseover.native="$store.commit('mouseOver', 2)"
        @mouseleave.native="$store.commit('leaveOver', 2)"
      />
      <menu-countries
        class="ma-0 pa-0"
        style="position:fixed;z-index:50"
        :style="$store.state.deployed ? 'margin-top:0px !important' : 'margin-top:-10px !important'"
        @mouseover.native="$store.commit('mouseOver', 4)"
        @mouseleave.native="$store.commit('leaveOver', 4)"
      />
    </v-row>

    <v-row
      class="ma-0 pa-0"
      style="width:100%;height:20vh"
    >
      Hola
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100%;height:20vh"
    >
      Hola
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100%;height:20vh"
    >
      Hola
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100%;height:20vh"
    >
      Hola
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100%;height:20vh"
    >
      Hola
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="width:100%;height:20vh"
    >
      Hola
    </v-row>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
}
</script>

<style lang="sass">


</style>
