<template>
  <v-row
    class="ma-0 pa-0"
    style="width:100%"
  >
    <menu-leagues
      class="ma-0 pa-0"
      style="position:fixed;z-index:50;box-shadow:0px 5px 20px -10px #121212"
      :style="$store.state.deployed ? 'margin-top:0px !important' : 'margin-top:-10px !important'"
      @mouseover.native="$store.commit('mouseOver', 1)"
      @mouseleave.native="$store.commit('leaveOver', 1)"
    />
    <menu-cups
      class="ma-0 pa-0"
      style="position:fixed;z-index:50;box-shadow:0px 5px 20px -10px #121212"
      :style="$store.state.deployed ? 'margin-top:0px !important' : 'margin-top:-10px !important'"
      @mouseover.native="$store.commit('mouseOver', 2)"
      @mouseleave.native="$store.commit('leaveOver', 2)"
    />
    <!-- <menu-teams
      class="ma-0 pa-0"
      style="position:fixed;z-index:50"
      :style="$store.state.deployed ? 'margin-top:0px !important' : 'margin-top:-10px !important'"
      @mouseover.native="$store.commit('mouseOver', 3)"
      @mouseleave.native="$store.commit('leaveOver', 3)"
    /> -->
    <menu-countries
      class="ma-0 pa-0"
      style="position:fixed;z-index:50;box-shadow:0px 5px 20px -10px #121212"
      :style="$store.state.deployed ? 'margin-top:0px !important' : 'margin-top:-10px !important'"
      @mouseover.native="$store.commit('mouseOver', 4)"
      @mouseleave.native="$store.commit('leaveOver', 4)"
    />
  </v-row>
</template>

<script>

</script>

<style lang="sass">

</style>
