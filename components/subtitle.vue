<template>
  <v-row
    class="ma-0 pa-0"
    align="center"
    style="width:100%;max-height:25px;border-radius:3px;font-weight:bold"
  >
    <h4 class="ma-0 ml-5 pa-0">{{ title }}</h4>
  </v-row>
</template>

<script>
  export default {
   props: ['title']
  }
</script>

<style lang="sass">

</style>
