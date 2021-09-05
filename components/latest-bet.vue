<template>
  <v-row
    class="ma-0 mb-1 pa-0"
    justify="center"
    align="center"
    style="width:100%;height:55px;border-radius:2px;background-color:#1C1C1C"
  >
    <!-- <v-row>
      <img
        src="test.png"
        alt="John"
      >
    </v-row> -->

    <!-- left -->
    <v-row
      class="ma-0 ml-1 pa-0"
      style="width:38%;max-height:95%;border-radius:45px;background-color:#272727"
      align="center"
    >
      <v-avatar
        class="ma-0 pa-0"
        size="47"
        style="border:3px solid #272727"
      >
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
      <v-row
        class="ma-0 mt-1 pa-0"
        style="height:100%"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%"
        >
          <v-img
            class="ma-0 pa-0"
            max-height="15"
            max-width="20"
            :src="bet.fixture[0].homeTeam[0].logo"
          ></v-img>
          <h5>{{ bet.fixture[0].homeTeam[0].team_name }}</h5>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="max-width:95%;max-height:15px;background: linear-gradient(90deg,transparent, white);border-radius:0 45px 45px 0"
          align="center"
        >
          <h6 class="ma-0 ml-1 pa-0" style="color:white">0% TAKEN</h6>
          <v-spacer></v-spacer>
          <h6 class="ma-0 mr-1 pa-0" style="color:#272727">{{ bet.init_amount / 100000000 }}</h6>
          <v-img
            max-height="12"
            max-width="12"
            src="bitcoin-gris.png"
            class="ma-0 mr-1 pa-0"
          ></v-img>
        </v-row>
      </v-row>
      <v-avatar
        class="ma-0 mr-2 pa-0"
        size="37"
        style="background-color:#272727;border:2px solid white"
      >
        <h6>{{ bet.factor.toFixed(2) }}</h6>
      </v-avatar>
    </v-row>

    <!-- center -->
    <v-row
      class="ma-0 pa-0"
      style="width:20%;height:100%;border-radius:2px"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100%"
      >
        <v-row
          class="ma-0 pa-0"
          style="height:100%"
          justify="center"
          align="center"
        >
          <v-avatar
            class="ma-0 pa-0"
            size="42"
            style="background-color:#272727;border:2px solid white"
          >
            <v-img
              class="ma-0 pa-0"
              max-height="35"
              max-width="35"
              :src="bet.fixture[0].homeTeam[0].logo"
            ></v-img>
          </v-avatar>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="height:100%;opacity:.25"
          justify="center"
          align="center"
        >
          <v-avatar
            class="ma-0 pa-0"
            size="42"
            style="background-color:#272727"
          >
            <h5>T</h5>
          </v-avatar>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="height:100%"
          justify="center"
          align="center"
        >
        <v-avatar
          class="ma-0 pa-0"
          size="42"
          style="background-color:#272727;border:2px solid #1CD790"
        >
          <v-img
            class="ma-0 pa-0"
            max-height="35"
            max-width="35"
            :src="bet.fixture[0].awayTeam[0].logo"
          ></v-img>
        </v-avatar>
        </v-row>
      </v-row>
    </v-row>


    <!-- right -->
    <v-row
      class="ma-0 mr-1 pa-0"
      style="width:38%;max-height:95%;border-radius:45px;background-color:#272727"
      align="center"
    >
      <v-avatar
        class="ma-0 ml-2 pa-0"
        size="37"
        style="background-color:#272727;border:2px solid #1CD790"
      >
        <h6 style="color:#1CD790"> 12.00 </h6>
      </v-avatar>
      <v-row
        class="ma-0 mt-1 pa-0"
        style="height:100%"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%"
        >
          <v-spacer></v-spacer>
          <h5 style="color:#1CD790">{{ bet.fixture[0].awayTeam[0].team_name }}</h5>
          <v-img
            class="ma-0 pa-0"
            max-height="15"
            max-width="20"
            :src="bet.fixture[0].awayTeam[0].logo"
          ></v-img>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="width:100%"
        >
          <v-row
            class="ma-0 pa-0"
            style="min-width:5%;max-width:5%"
          >

          </v-row>
          <v-row
            class="ma-0 pa-0"
            style="overflow:hidden;max-width:95%;min-width:95%;max-height:15px;background:linear-gradient(90deg,#1CD790,transparent);border-radius:45px 0 0 45px"
            align="center"
          >
            <v-img
              max-height="12"
              max-width="12"
              src="bitcoin-gris-blanco.png"
              class="ma-0 ml-1 pa-0"
            ></v-img>
            <h6 class="ma-0 ml-1 pa-0" style="color:#272727">{{ bet.taken_amount / 100000000 }}</h6>
            <v-row
              class="ma-0 pa-0 taken"
              style="color:transparent;max-width:10%;;max-height:14px;background:linear-gradient(90deg,white,transparent);border-radius:45px 0 0 45px"

            >
              hola
            </v-row>
          </v-row>
        </v-row>
      </v-row>
      <v-avatar
        class="ma-0 pa-0"
        size="47"
        style="border:2px solid #1CD790;background-color:#272727"
      >

          <v-icon
            color="#1CD790"
            class="ma-0 pa-0"
            small
          >mdi-lock-open-variant</v-icon>

      </v-avatar>
    </v-row>
  </v-row>
</template>

<script>
  export default {
    // data: function () {
    // },
    props: {
      bet: {
        type: Object,
        default: () => ({}),
      }
    }
  }
</script>

<style lang="sass">
  .taken
    min-width: 100% !important
</style>
