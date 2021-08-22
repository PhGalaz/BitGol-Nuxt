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
      justify="center"
    >
      <v-row
        class="ma-0 pa-0"
        style="max-width:20px"
        align="center"
      >
        <v-img
          :src="fixture.logo"
          class="ma-0 pa-0"
          max-width="20px"
          max-height="20px"
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
