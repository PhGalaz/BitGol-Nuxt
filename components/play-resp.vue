<template>
  <v-row
    style="background-color:#272727;height:35px;color:yellow"
    class="ma-0 pa-0"
    :class="{ 'd-none': !this.$store.state.responsably }"
    align="center"
  >
    <v-btn
      class="ma-0 ml-3 pa-0"
      small
      text
      color="white"
      @click="respo()"
    >
      <h5
        class="ma-0 ml-5 pa-0"
      >ABOUT BITGOL</h5>
      <v-icon
        class="ma-0 mr-4 pa-0"
        color="green"
      >mdi-chevron-down</v-icon>
    </v-btn>
    <v-btn
      class="ma-0 ml-3 pa-0"
      small
      text
      color="white"

    >
      <h5
        class="ma-0 ml-5 pa-0"
      >CONTACT US</h5>
      <v-icon
        class="ma-0 mr-4 pa-0"
        color="green"
      >mdi-chevron-down</v-icon>
    </v-btn>
    <v-btn
      class="ma-0 ml-3 pa-0"
      small
      text
      color="white"

    >
      <h5
        class="ma-0 ml-5 pa-0"
      >LEARN HOW TO PLAY</h5>
      <v-icon
        class="ma-0 mr-4 pa-0"
        color="blue"
        style="transform:rotate(180deg)"
      >mdi-chevron-down</v-icon>
    </v-btn>
    <v-row
      class="ma-0 pa-0"
      style="color:white;font-size:6px;letter-spacing:0px"
      align="center"
    >
      <v-row
        class="ma-0 pa-0"
      >
        <v-spacer></v-spacer>
        <p
          align="center"
          class="ma-0 mr-1 pa-0 text-right"
        >
          <v-icon
            class="ma-0 pa-0"
            x-small
            color= "white"
            style="transform:scale(.7)"
          >
            mdi-copyright
          </v-icon>
          {{ new Date().getFullYear() }} BitGol<br>Av. Libertador Bernardo O'Higgins 351 of. 309A<br>SANTIAGO - CHILE <br>
        </p>
      </v-row>
      <v-row
        class="ma-0 pa-0"
        align="center"
        justify="center"
        style="max-width:15px"
      >
        <v-icon
          class="ma-0 mx-1 pa-0"
          color="white"
          x-small
        >mdi-shield</v-icon>
      </v-row>
      <v-row
        class="ma-0 pa-0"
      >
        <p
          align="center"
          class="ma-0 ml-1 pa-0 text-left"
        >
          developed by<br><span style="font-size:7px">StudioGalaz</span>

        </p>
      </v-row>


      <!-- <v-row
        class="ma-0 pa-0"
        style="max-height:50%;background-color:blue"
        justify="center"
      >

        <p
          style="font-size:7px;letter-spacing:1px"
        >
        <v-icon
          class="ma-0 pa-0"
          x-small
          color= "white"
        >
          mdi-copyright
        </v-icon>
          {{ new Date().getFullYear() }} BitGol - Av. Libertador Bernardo O'Higgins 351 of. 309A | SANTIAGO | CHILE
        </p>
      </v-row>
      <v-row
        class="ma-0 pa-0"
        style="max-height:50%;background-color:red"
        justify="center"
      >

        <p
          style="font-size:7px;letter-spacing:1px"
        >
        <v-icon
          class="ma-0 pa-0"
          x-small
          color= "white"
        >
          mdi-copyright
        </v-icon>
          {{ new Date().getFullYear() }} BitGol - Av. Libertador Bernardo O'Higgins 351 of. 309A | SANTIAGO | CHILE
        </p>
      </v-row> -->
    </v-row>
    <v-btn
      class="ma-0 pa-0"
      small
      text
      color="white"

    >
      <h5
        class="ma-0 ml-5 pa-0"
      >PLAY RESPONSABLY</h5>
      <v-icon
        class="ma-0 mr-4 pa-0"
        color="yellow"
      >mdi-chevron-down</v-icon>
    </v-btn>
    <v-btn
      x-small
      icon
      color= "#ccc"
      class="ml-3 mr-3"
    >
      <v-icon
        x-medium
        @click="responsablyOut()"
      >mdi-close</v-icon>
    </v-btn>


  </v-row>
</template>

<script>
  export default {
    data: () => ({
      showResponsably: true
    }),
    methods:{
      responsablyOut(){
        this.$store.commit('responsably_off')
      },
      respo(){
        var data = { price: parseFloat(this.$store.state.bch_price) + 1 }
        this.$store.commit('bchprice', data)
      }
    }
  }
</script>

<style lang="sass">
</style>
