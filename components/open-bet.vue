<template>
  <v-row
    class="ma-0 mb-1 pa-0"
    justify="center"
    align="center"
    style="width:100%;height:55px;background-color:#272727;border-radius:2px"
  >
    <!-- {{ bet.fixture[0].league[0].logo }} -->
  </v-row>
</template>

<script>
  export default {
    props: {
      bet: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        
      }
    },
    created() {

    }
  }
</script>

<style lang="sass">

</style>
