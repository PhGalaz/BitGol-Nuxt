<template>
  <v-row
    class="ma-0 pa-0"
    style="position:absolute;max-height:70vh;overflow:auto;background-color:#272727"
    :style="$store.state.drawerright ? 'width:80%' : 'width:100%'"
    :class="{'d-none' : !$store.state.showteams}"
  >
    <v-col
      class="ma-0 mt-3 pa-0"
      v-for="column in columns" :key="column.index"
    >
      <v-row
        class="ma-0 pa-0"
        style="width:100%"
        v-for="(team, index) in column" :key="index"
      >
        <v-row
          class="ma-0 pa-0"
          :class="{'item' : team.name != ''}"
          style="color:#ccc;max-width:100%"
          v-if="team.name != undefined"
        >
          <v-row
            class="ma-0 pa-0 d-flex"
            style="max-width:100%"
          >
            <v-row
              class="ma-0 pa-0 name d-inline-flex"
              style="max-width:140px"
            >
              <v-row
                class="ma-0 ml-4 pa-0"
              >
                {{ team.name }}
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
        <!-- <v-row
          class="ma-0 pa-0"
          v-else
        >
          <v-row
            class="ma-0 ml-8 mb-1 pa-0"
            v-if="index == 0"
          >
            <h5>{{ country.title.charAt(0) }}</h5>
          </v-row>
          <v-row
            class="ma-0 mt-5 ml-8 mb-1 pa-0"
            v-else
          >
            <h5>{{ country.title.charAt(0) }}</h5>
          </v-row>
        </v-row> -->
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
    computed: {
      columns: function() {
        var letter = 'A'
        var res = []
        var bul = this.$store.state.teams
        let columns = [];

        console.log(bul)
        let mid = Math.ceil(Object.keys(bul).length / this.cols);
        for (let col = 0; col < this.cols; col++) {
            columns.push(Object.entries(bul).slice(col * mid, col * mid + mid).map(entry => entry[1]));
        }
        console.log(columns)
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
