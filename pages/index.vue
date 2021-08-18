<template>
  <v-row
    class="ma-0 pa-0"
    style="height:100%"
  >
    <v-row
      class="ma-0 pa-0"
      style="background-color:#121212;width:100%;max-height:70vh;z-index:5"
    >
      <cover/>
      <menu-leagues
        @mouseover.native="$store.commit('mouseOver', 1)"
        @mouseleave.native="$store.commit('leaveOver', 1)"
      />
      <menu-cups
        @mouseover.native="$store.commit('mouseOver', 2)"
        @mouseleave.native="$store.commit('leaveOver', 2)"
      />
      <menu-countries
        style="position:fixed"
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
