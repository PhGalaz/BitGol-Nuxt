<template>
  <v-row
    class="ma-0 pa-0"
    style="position:absolute;width:100%;max-height:70vh;overflow:auto;background-color:#272727"
    :class="{'d-none' : !$store.state.showcountries}"
  >
    <v-col
      class="ma-0 mt-3 pa-0"
      v-for="column in columns" :key="column.index"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100%"
        v-for="country in column"
      >
        <v-row
          class="ma-0 pa-0"
          :class="{'item' : country.name != ''}"
          @click="method(country.name)"
          style="color:#ccc"
        >
          <v-row
            class="ma-0 pa-0"
            style="max-width:60px"
            v-if="country.name != ''"
          >
            <v-img
              :src="country.flag"
              class="ma-0 mt-1 ml-16 pa-0 flag"
              max-width="24px"
              max-height="16px"
            ></v-img>
          </v-row>
          <v-row
            class="ma-0 ml-12 pa-0 name"
            v-if="country.name != ''"
          >
            {{ country.name }}
          </v-row>
          <br v-else>
        </v-row>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        cols: 5
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
        var items = this.$store.state.countries
        let columns = [];

        for(var x in items){
          var country = items[x]
          if(country.name.charAt(0) != letter){
            var el = {name: ''}
            bul.push(el)
          }
          letter = country.name.charAt(0)
          bul.push(country)
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
