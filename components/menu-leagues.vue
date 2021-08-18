
<template>
  <v-row
    class="ma-0 pa-0"
    style="position:absolute;width:100%;max-height:70vh;overflow:auto;background-color:#272727;border-top:0px solid #ccc"
    :style="$store.state.deployed ? 'margin-top:0px !important' : 'margin-top:-30px !important'"
    :class="{'d-none' : !$store.state.showleagues}"
  >
    <v-row
      class="ma-0 pa-0"
      style="width:100%º"
    >
      <v-col
        class="ma-0 mt-3 pa-0"
        v-for="column in columns" :key="column.index"
      >
        <v-row
          class="ma-0 pa-0"
          v-for="country in column"  :key="country.name"
          style="width:100%"
        >
          <v-row
            class="ma-0 ml-8 mr-8 pa-0"
            style="border-bottom:0px solid #ccc"
          >
            <h5 style="color:#ccc">
              {{ country.name }}
            </h5>
          </v-row>
          <v-row
            class="ma-0 mt-2 mb-8 pa-0"
            style="width:100%"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:100%"
              v-for="league in leagues(country.name)"
            >
              <v-row
                class="ma-0 pa-0"
                :class="{'item' : league.name != ''}"
                @click="method(league.league_id)"
                style="color:#ccc;width:100%"
                align="center"
                v-if="league.country"
              >
                <v-row
                  class="ma-0 pa-0"
                  style=""
                  align="center"
                >
                  <v-img
                    v-if="league.logo"
                    :src="league.logo"
                    class="ma-0 ml-8 pa-0 flag"
                    max-width="20px"
                    max-height="30px"
                  ></v-img>
                  <v-row
                    class="ma-0 ml-4 pa-0 name text-wrap"
                    style=""
                    align="center"
                  >
                    {{ league.name }}
                  </v-row>
                </v-row>
              </v-row>
              <v-row
                class="ma-0 ml-16 mt-2 mb-2 pa-0"
                v-else
              >
                <br>
              </v-row>
            </v-row>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
    <!-- <v-col
      class="ma-0 mt-3 pa-0"
      v-for="column in columns" :key="column.index"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100%"
        v-for="league in column"
      >
        <v-row
          class="ma-0 pa-0"
          :class="{'item' : league.name != ''}"
          @click="method(league.name)"
          style="color:#ccc"
          align="center"
        >
          <v-row
            class="ma-0 pa-0"
            style="max-width:60px"
            v-if="league.country"
          >
            <v-img
              :src="league.logo"
              class="ma-0 mt-1 ml-16 pa-0 flag"
              max-width="20px"
              max-height="30px"
            ></v-img>
          </v-row>
          <v-row
            class="ma-0 ml-12 pa-0 name"
            v-if="league.country"
          >
            {{ league.name }}
          </v-row>
          <v-row
            class="ma-0 ml-16 mt-2 mb-2 pa-0"
            v-else
          >
            <br>
          </v-row>
        </v-row>
      </v-row>
    </v-col> -->
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        cols: 4,
        temp_country: 'Albania'
      }
    },
    // async fetch() {
    //   this.currentbchprice = await fetch(
    //     'url'
    //   ).then(res => res.json())
    // },
    methods: {
      method(data) {
        console.log(data)
      },
      temp_country(data) {
        this.temp_country = data
      },
      leagues(name){
        var test = this.$store.state.leagues
        test = test.filter(item => item.country.name === name)

        return test
      }
    },
    computed: {
      columns_countries: function() {
        var curr = 'Albania'
        var res = []
        var bul = []
        var items = this.$store.state.leagues
        let columns = [];

        for(var x in items){
          var league = items[x]
          if(items[x].country.name != curr){
            var el = {}
            bul.push(el)
          }
          curr = league.country.name
          bul.push(league)
        }

        let mid = Math.ceil(Object.keys(bul).length / this.cols);
        for (let col = 0; col < this.cols; col++) {
            columns.push(Object.entries(bul).slice(col * mid, col * mid + mid).map(entry => entry[1]));
        }
        return columns;
      },
      columns: function() {
        let columns = [];
        var items = this.$store.state.countries

        for(var x in items){


        }

        let mid = Math.ceil(Object.keys(items).length / this.cols);
        for (let col = 0; col < this.cols; col++) {
            columns.push(Object.entries(items).slice(col * mid, col * mid + mid).map(entry => entry[1]));
        }
        return columns;
      }
    }
  }
</script>

<style lang="sass">
  .flag
    opacity: .5

  .item:hover
    cursor: pointer
    opacity: 1
    .flag
      opacity: 1
    .name
      color: white
      font-weight: bold
</style>
