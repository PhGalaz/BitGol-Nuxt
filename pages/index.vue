<template>
  <v-row
    class="ma-0 pa-0"
    style="height:100%"
  >
    <v-row
      class="ma-0 pa-0"
      style="background-color:#121212;width:100%;height:70vh"
    >
      <cover />
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="background-color:red;width:100%;position:absolute;z-index=1"
    >
      <menu-leagues />
    </v-row>
    <v-row
      class="ma-0 pa-0"
      style="background-color:blue;width:100%;height:20vh"
    >
      Hola
    </v-row>
    <v-row class="ma-0 pa-0 item" v-for="t in 100" key=t style="width:100%" @click="getMessage()">
      <v-spacer></v-spacer>{{ t }}
      {{ messageRxd }}
    </v-row>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        message: '',
        messageRxd: '',
        n: 0,
        info: []
      }
    },
}
</script>

<style lang="sass">


  .item:hover
    color: red
</style>
