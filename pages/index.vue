<template>
  <v-row
    class="ma-0 pa-0"
    style="height:100%"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100%;max-height:70vh"
    >
      <cover/>
      <app-bar-tabs
        style="position:absolute"
      />

    </v-row>
    <play-resp
      style="width:100%;box-shadow:0px 5px 20px -10px #121212"
    />


    <!-- Body -->

    <v-row
      class="ma-0 mt-8 pa-0"
      style=""
    >
      <v-row
        class="ma-0 mx-5 pa-0"
      >
        <v-col
          class="ma-0 pa-0"
          cols="5"
          style=""
        >
          <v-row
            class="ma-0 pa-0"
            style="width:95%;margin-left:1% !important;border-radius:3px"
          >
            <lives
              class="ma-0 pa-0"
            />
          </v-row>
        </v-col>
        <v-col
          class="ma-0 pa-0"
          cols="7"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:100%;margin-right:4% !important;border-radius:3px"
            >
              <open-bets
                class="ma-0 pa-0"
              />
            </v-row>
          </v-row>
        </v-col>
      </v-row>
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
