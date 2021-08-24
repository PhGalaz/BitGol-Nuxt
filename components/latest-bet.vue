<template>
  <v-row
    class="ma-0 pa-0 bit"
    justify="center"
    align="center"
    style="width:100%;height:55px;border-radius:2px;background-color:#1C1C1C"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100%;height:100%;border-radius:2px"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100%;height:60%"
        justify="center"
        align="center"
      >
      </v-row>
      <v-row
        class="ma-0 pa-0"
        style="width:100%;height:40%"
        align="center"
        justify="center"
      >
        <h6 class="ma-0 pa-0" style="font-weight:normal">₿ 0.725</h6>
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
  .bit:hover
    background-color: #272727 !important
    opacity: 1 !important
    cursor: pointer
</style>
