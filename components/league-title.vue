<template>
  <v-row
    class="ma-0 pa-0"
    justify="center"
    align="center"
    style="width:100%;background-color:#272727;border-radius:2px 0 0 2px"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100%"

    >
      <v-row
        class="ma-0 mr-1 pa-0"
        style="width:100%"
        align="center"
      >
        <!-- {{ fixture }} -->
        <v-img
          :src="fixture.flag"
          class="ma-0 pa-0"
          max-width="17px"
          max-height="17px"
        ></v-img>


        <h6 class="ma-0 ml-1 pa-0" style="opacity:.75">{{ fixture.name }}</h6>
        <v-spacer></v-spacer>
        <v-img
          :src="fixture.logo"
          class="ma-0 mr-1 spa-0"
          max-width="17px"
          max-height="17px"
        ></v-img>
      </v-row>
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

</style>
