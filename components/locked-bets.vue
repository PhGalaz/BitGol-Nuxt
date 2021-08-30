<template>
  <v-row
    class="ma-0 mt-4 pa-0"
    style="width:100%;background-color:#E47238;border-radius:2px;opacity:.75"
  >
    <subtitle
      class="ma-0 mt-1 pa-0"
      title='LOCKED BETS'
      style="height:100%"
    />
    <v-row
      class="ma-0 ml-1 mb-1 pa-0 sbar"
      style="max-height:504px;max-width:100%;overflow:auto;border-radius:2px"
    >
      <v-row
        class="ma-0 pa-0"
        style="background-color:#121212;border-radius:2px"
      >
        <latest-bet class="ma-0 mx-1 mt-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
        <latest-bet class="ma-0 mx-1 mb-1 pa-0"/>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>

</script>

<style lang="sass">
  .sbar::-webkit-scrollbar
    border-radius: 3px
    background-color: #E47238
    width: 8px
  .sbar::-webkit-scrollbar-thumb
    background-color: white
    border-radius: 3px !important
    border-color: #E47238

</style>
