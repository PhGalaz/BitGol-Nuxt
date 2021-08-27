<template>
  <v-row
    class="ma-0 pa-0"
    justify="center"
    align="center"
    style="width:100%;background-color:#191919;border-radius:2px"
  >
    <v-col
      class="ma-0 pa-0"
      style="max-width:0px"
    >
      <h5
        class="ma-0 ml-2 pa-0"
        style="font-weight:normal"
      >
        <h6>{{ fixture.elapsed }}'</h6>
      </h5>
    </v-col>
    <v-col
      class="ma-0 my-1 pa-0"
      style=""
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100%"
      >
        <v-row
          class="ma-0 pa-0"
          style=""
        >
          <v-spacer></v-spacer>
          <h5
            class="ma-0 mr-2 mt-1 pa-0 text-right"
            style="width:150px;font-weight:normal"
            align="center"
          >
            {{ fixture.homeTeam[0].team_name }}
          </h5>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="max-width:20px"
          align="center"
        >
          <v-img
            :src="fixture.homeTeam[0].logo"
            class="ma-0 pa-0"
            max-width="20px"
            max-height="25px"
          ></v-img>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="max-width:50px;font-weight:bold"
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
          class="ma-0 pa-0"
        >
          <v-spacer></v-spacer>
          <h5
            class="ma-0 mr-2 mt-1 pa-0 text-right"
            style="width:150px;font-weight:normal"
            align="center"
          >
            {{ fixture.awayTeam[0].team_name }}
          </h5>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="max-width:20px"
          align="center"
        >
          <v-img
            :src="fixture.awayTeam[0].logo"
            class="ma-0 pa-0"
            max-width="20px"
            max-height="25px"
          ></v-img>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="max-width:50px;font-weight:bold"
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
