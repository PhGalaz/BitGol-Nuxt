<template>
  <v-row
    class="ma-0 pa-0"
    justify="center"
    align="center"
    style="width:100%;background-color:#191919;border-radius:2px"
  >
    <v-col
      class="ma-0 my-1 pa-0"
      style=""
    >
      <v-row
        class="ma-0 pa-0"
        style=""
      >
        <v-row
          class="ma-0 ml-2 pa-0"
          style="max-width:20px"
          align="center"
        >
          <v-img
            :src="fixture.homeTeam[0].logo"
            class="ma-0 pa-0"
            max-width="2
            0px"
            max-height="2
            5px"
          ></v-img>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style=""
        >
          <h5
            class="ma-0 ml-2 mt-1 pa-0 text-left"
            style="width:150px;font-weight:normal"
            align="center"
          >
            {{ fixture.homeTeam[0].team_name }}
          </h5>
        </v-row>
        <v-spacer></v-spacer>

        <v-row
          class="ma-0 pa-0"
          style="max-width:25px;font-weight:bold"
          align="center"
          justify="center"
        >
          <p
            class="ma-0 pa-0"
            align="center"
          >
            {{ fixture.goalsHomeTeam }}
          </p>
        </v-row>
      </v-row>



      <v-row
        class="ma-0 pa-0"
        style="width:100%"
      >
        <v-row
          class="ma-0 ml-2 pa-0"
          style="max-width:20px"
          align="center"
        >
          <v-img
            :src="fixture.awayTeam[0].logo"
            class="ma-0 pa-0"
            max-width="2
            0px"
            max-height="2
            5px"
          ></v-img>
        </v-row>
        <v-row
          class="ma-0 pa-0"
        >
          <h5
            class="ma-0 ml-2 mt-1 pa-0 text-left"
            style="width:150px;font-weight:normal"
            align="center"
          >
            {{ fixture.awayTeam[0].team_name }}
          </h5>
        </v-row>
        <v-spacer></v-spacer>
        <v-row
          class="ma-0 pa-0"
          style="max-width:25px;font-weight:bold"
          align="center"
          justify="center"
        >
          <p
            class="ma-0 pa-0"
            align="center"
          >
            {{ fixture.goalsAwayTeam }}
          </p>
        </v-row>
      </v-row>
    </v-col>
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
