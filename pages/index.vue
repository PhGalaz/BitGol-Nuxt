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
      class="ma-0 mt-4 pa-0"
      style=""
    >
      <v-row
        class="ma-0 mx-3 pa-0"
      >
        <v-col
          class="ma-0 pa-0"
          style="max-width:20%"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%;border-radius:2px"
          >
            <lives
              class="ma-0 pa-0"
            />
          </v-row>
        </v-col>
        <v-col
          class="ma-0 ml-3 pa-0"
          style="min-width:80%"
        >
          <v-row
            class="ma-0 pa-0"
            style="width:100%;border-radius:3px"
          >
            <v-col
              class="ma-0 pa-0"
              style="max-width:80%"
            >
              <open-bets
                class="ma-0 pa-0"
              />
              <open-bets
                class="ma-0 mt-4 pa-0"
              />
            </v-col>
            <v-col
              class="ma-0 ml-3 pa-0"
              style="max-width:20%;border-radius:2px"
            >
              <stats
                class="ma-0 pa-0"
                style=""
              />
            </v-col>
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
