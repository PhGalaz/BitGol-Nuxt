<template>
  <v-row
    class="ma-0 pa-0"
    style="position:absolute;max-height:70vh;overflow:auto;background-color:#272727"
    :style="$store.state.drawerright ? 'width:80%' : 'width:100%'"
    :class="{'d-none' : !$store.state.showleagues}"
  >
    <v-col
      class="ma-0 mt-3 pa-0"
      v-for="column in columns" :key="column.index"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100%"
        v-for="(cup, index) in column" :key="index"
      >
        <v-row
          class="ma-0 pa-0"
          :class="{'item' : cup.name != ''}"
          @click="method(cup.league_id)"
          style="color:#ccc;max-width:100%"
          v-if="cup.name != undefined"
        >
          <v-row
            class="ma-0 pa-0 d-flex"
            style="max-width:100%"
          >
            <v-img
              :src="cup.logo"
              class="ma-0 mt-1 ml-8 pa-0 flag"
              max-width="17px"
              max-height="17px"
            ></v-img>
            <v-row
              class="ma-0 pa-0 name d-inline-flex"
              style="max-width:250"
            >
              <v-row
                class="ma-0 ml-4 pa-0"
              >
                {{ cup.name }}
              </v-row>
            </v-row>
          </v-row>
          <!-- <v-row
            class="ma-0 pa-0 d-inline-flex"
            style="background-color:yellow"
          >
            <v-row
              class="ma-0 ml-12 pa-0 name"
            >
              {{ country.name }}
            </v-row>
          </v-row> -->
        </v-row>
        <v-row
          class="ma-0 pa-0"
          v-else
        >
          <v-row
            class="ma-0 ml-8 mb-1 pa-0"
            v-if="index == 0"
          >
            <h5>{{ cup.title }}</h5>
          </v-row>
          <v-row
            class="ma-0 mt-6 ml-8 mb-1 pa-0"
            v-else
          >
            <h5>{{ cup.title }}</h5>
          </v-row>
        </v-row>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        cols: 4
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
      }
    },
    computed: {
      columns: function() {
        var letter = 'A'
        var res = []
        var bul = []
        var countries = this.$store.state.countries
        var cups = this.$store.state.leagues
        let columns = [];

        var title = {}

        for(var x in countries){
          if(Object.keys(countries[x].cups).length > 0){
            title = {title: countries[x].name.toUpperCase()}
            bul.push(title)
          }
          for(var y in cups){
            if(cups[y].country.name == countries[x].name){
              bul.push(cups[y])
            }
          }
        }
        let mid = Math.ceil(Object.keys(bul).length / this.cols);
        for (let col = 0; col < this.cols; col++) {
            columns.push(Object.entries(bul).slice(col * mid, col * mid + mid).map(entry => entry[1]));
        }

        return columns;
      }
    }
  }
</script>

<style lang="sass">
  .flag
    opacity: .65

  .item:hover
    cursor: pointer
    opacity: 1
    .flag
      opacity: 1
    .name
      color: white
      font-weight: bold
</style>
