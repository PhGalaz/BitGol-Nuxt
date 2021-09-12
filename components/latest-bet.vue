<template>
  <v-row
    class="ma-0 mb-1 pa-0"
    justify="center"
    align="center"
    style="width:100%;height:55px;border-radius:2px;background-color:#272727"
  >

    <!-- left -->
    <v-spacer></v-spacer>
    <v-row
      class="ma-0 ml-1 pa-0"
      style="width:20%;max-height:95%;border-radius:45px"
      align="center"
    >
      <!-- <v-avatar
        class="ma-0 pa-0"
        size="37"
        style="border:3px solid #272727"
      >
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar> -->
      <v-row
        class="ma-0 pa-0"
        style="height:100%"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%"
          align="center"
        >
          <v-spacer></v-spacer>
          <h4 class="ma-0 mr-3 pa-0" style="color:white">{{ bet.fixture[0].homeTeam[0].name }}</h4>
          <v-img
            class="ma-0 mr-3 pa-0"
            max-height="30"
            max-width="30"
            :src="bet.fixture[0].homeTeam[0].logo"
          ></v-img>
        </v-row>

        <!-- <v-row
          class="ma-0 mt-1 pa-0"
          style="max-width:95%;max-height:15px;background: linear-gradient(90deg,transparent,white);border-radius:0 45px 45px 0"
          align="center"
        >
          <h6 class="ma-0 ml-1 pa-0" style="color:white">0% TAKEN</h6>
          <v-spacer></v-spacer>
          <h6 class="ma-0 mr-1 pa-0" style="color:#272727">{{ bet.init_amount / 100000000 }}</h6>
          <v-img
            max-height="13"
            max-width="13"
            src="bitcoin-gris.png"
            class="ma-0 mr-1 pa-0"
          ></v-img>
        </v-row> -->
      </v-row>
    </v-row>

    <!-- center -->
    <v-row
      class="ma-0 pa-0"
      style="max-width:18%;height:100%;border-radius:2px"
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
            size="47"
            style="background-color:#1C1C1C;border:2px solid #272727"
          >
            <v-avatar
              class="ma-0 pa-0"
              size="27"
              style="background-color:#1C1C1C"
            >
              <v-icon
                light
                color="#CC3333"
              >mdi-close-circle</v-icon>
            </v-avatar>
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
            size="47"
            style="background-color:#1C1C1C;border:2px solid #272727"
          >
            <v-avatar
              class="ma-0 pa-0"
              size="27"
              style="background-color:#1C1C1C"
            >
              <v-icon
                color="white"
              >mdi-equal</v-icon>
            </v-avatar>
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
            size="47"
            style="background-color:#1C1C1C;border:2px solid #272727"
          >
            <v-avatar
              class="ma-0 pa-0"
              size="27"
              style="background-color:#1C1C1C"
            >
              <v-icon
                light
                color="#629122"
              >mdi-check-circle</v-icon>
            </v-avatar>
          </v-avatar>
        </v-row>
      </v-row>
    </v-row>


    <!-- right -->
    <v-row
      class="ma-0 mr-1 pa-0"
      style="width:20%;max-height:95%;border-radius:45px"
      align="center"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100%"
        align="center"
      >
        <v-img
          class="ma-0 ml-3 pa-0"
          max-height="30"
          max-width="30"
          :src="bet.fixture[0].awayTeam[0].logo"
        ></v-img>
        <h4 class="ma-0 ml-3 pa-0" style="color:white">{{ bet.fixture[0].awayTeam[0].name }}</h4>
        <v-spacer></v-spacer>

        <v-avatar
          class="ma-0 ml-2 pa-0"
          size="47"
          style="background-color:#1C1C1C;opacity:.75;border:1px solid white"
        >
          <h6 style="color:white"> 11.00 </h6>
        </v-avatar>
      </v-row>
      <v-row
        class="ma-0 mt-1 pa-0"
        style="height:100%"
      >
        <!-- <v-row
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
        </v-row> -->
      </v-row>
    </v-row>
    <v-spacer></v-spacer>
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
