<template>
  <v-row
    class="ma-0 ml-10 mb-1 mr-1 pa-0"
    align="end"
    style="width:100%;height:35px;border-radius:3px;font-weight:bold"
  >
    {{ title }}
  </v-row>
</template>

<script>
  export default {
   props: ['title']
  }
</script>

<style lang="sass">

</style>
