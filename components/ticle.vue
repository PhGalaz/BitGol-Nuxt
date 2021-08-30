<template>
  <v-row
    class="ma-0 pa-0"
    align="center"
    style="width:100%;height:35px;border-radius:3px;font-weight:bold"
  >
    <h3 class="ma-0 ml-5 pa-0">{{ title }}</h3>
  </v-row>
</template>

<script>
  export default {
   props: ['title']
  }
</script>

<style lang="sass">

</style>
