<template>
  <v-row
    class="ma-0 mb-1 pa-0"
    justify="center"
    align="center"
    style="width:100%;border-radius:2px;background-color:#272727"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <!-- <v-expand-transition>
      <v-card
        class="ma-0 mt-1 pa-0 fax"
        v-show="hover"
        style="border-radius:2px;width:100%;font-size:10px"
        justify="center"
        flat
      >
        <v-row
          v-show="hover"
          class="ma-0 mt-1 pa-0"
          style="width:100%"
          align="center"
          justify="center"
        >
          <v-row
            class="ma-0 pa-0"
            style="max-width:80%;font-weight:bold"
          >
            <v-row
              class="ma-0 pa-0"
              style="width:30%"
              align="center"
            >
              <v-img
                class="ma-0 pa-0 logos"
                max-height="15"
                max-width="15"
                :src="bet.fixture[0].league[0].flag"
                style="opacity:.7"
              ></v-img>
              <v-img
                class="ma-0 ml-1 pa-0 logos"
                max-height="15"
                max-width="15"
                :src="bet.fixture[0].league[0].logo"
                style="opacity:.7"
              ></v-img>
            </v-row>
            <v-spacer></v-spacer>
            <v-row
              class="ma-0 pa-0"
              align="center"
              style="width:40%"
              justify="center"
            >
              <p

                style="letter-spacing:0px;color:#999;"
                class="ma-0 pa-0 font-weight-black"
              >{{days}}</p>
              <p

                style="letter-spacing:0px;color:#999"
                class="ma-0 pa-0 font-weight-medium"
              >d</p>
              <p

                style="letter-spacing:0px;color:#999"
                class="ma-0 ml-1 pa-0 font-weight-black"
              >{{hours}}</p>
              <p

                style="letter-spacing:0px;color:#999"
                class="ma-0 pa-0 font-weight-medium"
              >h</p>
              <p

                style="letter-spacing:0px;color:#999"
                class="ma-0 ml-1 pa-0 font-weight-black"
              >{{minutes}}</p>
              <p

                style="letter-spacing:0px;color:#999"
                class="ma-0 pa-0 font-weight-medium"
              >m</p>
              <p

                style="letter-spacing:0px;color:#999"
                class="ma-0 ml-1 pa-0 font-weight-black"
              >{{seconds}}</p>
              <p

                style="letter-spacing:0px;color:#999"
                class="ma-0 pa-0 font-weight-medium"
              >s</p>
            </v-row>
            <v-row
              class="ma-0 pa-0 fecha"
              style="width:30%;color:#999"
            >
              <v-spacer></v-spacer>
              {{eventDate.toUpperCase().replace(/,/g, '')}}
            </v-row>
          </v-row>
        </v-row>
      </v-card>
    </v-expand-transition> -->


    <v-row
      class="ma-0 pa-0 main-line"
      style="width:100%;max-height:50px;min-height:50px;background-color:transparent;margin-top:2px"
      align="center"
    >
      <!-- left -->
      <v-spacer></v-spacer>
      <v-row
        class="ma-0 ml-1 mr-8 pa-0"
        style="width:20%;border-radius:45px"
        align="center"
        justify="center"
      >
        <v-row
          class="ma-0 pa-0"
          style="height:100%"
        >
          <v-row
            class="ma-0 pa-0 text-right"
            style="width:100%"
            align="center"
          >
            <v-spacer></v-spacer>
            <h4 class="ma-0 mr-7 pa-0 team" style="color:#CCC;max-width:200px">{{ bet.fixture[0].homeTeam[0].name }}</h4>
            <v-img
              class="ma-0 mr-3 pa-0"
              max-height="30"
              max-width="30"
              :src="bet.fixture[0].homeTeam[0].logo"
            ></v-img>
          </v-row>
        </v-row>
      </v-row>



      <!-- center -->

      <v-row
        class="ma-0 pa-0"
        style="max-width:18%;height:100%;border-radius:2px;font-weight:bold"
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%"
        >
          <v-row
            class="ma-0 pa-0"
            :style="factor_style(bet.home_factor.toFixed(2))"
            justify="center"
            align="center"
          >
            {{bet.home_factor.toFixed(2)}}
          </v-row>
          <v-row
            class="ma-0 pa-0"
            :style="factor_style(bet.draw_factor.toFixed(2))"
            justify="center"
            align="center"
          >
            {{bet.draw_factor.toFixed(2)}}
          </v-row>
          <v-row
            class="ma-0 pa-0"
            :style="factor_style(bet.away_factor.toFixed(2))"
            justify="center"
            align="center"
          >
            {{bet.away_factor.toFixed(2)}}
          </v-row>
        </v-row>
      </v-row>


      <!-- right -->
      <v-row
        class="ma-0 mr-1 ml-8 pa-0"
        style="width:20%;height:50px;border-radius:45px"
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
          <h4 class="ma-0 ml-7 pa-0 team" style="color:#ccc;max-width:200px">{{ bet.fixture[0].awayTeam[0].name }}</h4>
          <v-spacer></v-spacer>
        </v-row>
      </v-row>
      <v-spacer></v-spacer>
    </v-row>





    <v-expand-transition>
      <v-card
        class="ma-0 pa-0 fax"
        v-show="hover"
        style="border-radius:2px;width:100%;font-size:12px;color:#555;overflow:hidden"
        flat
      >
        <v-row
          class="ma-0 pa-0"
          style="width:100%;overflow:hidden"
          justify="center"

        >
          <v-row
            class="ma-0 pa-0"
            style="min-width:80%;max-width:80%"
            justify="center"
          >
            <v-row
              class="ma-0 mt-1 pa-0"
              style="max-width:110px;max-height:12px;border-radius:2px"
              justify="center"
              align="center"
            >
              <facebook class="social ma-0 ml-5 pa-0" :url="url" scale="1" style="margin-top:-1px !important;fill:#ccc;filter: grayscale(100%);opacity:.5"></facebook>
              <v-spacer></v-spacer>
              <twitter class="social ma-0 pa-0" :url="url" title="Check me on Github" scale="1" style="margin-top:-1px !important;fill:#ccc !important;filter: grayscale(100%);opacity:.5"></twitter>
              <v-spacer></v-spacer>
              <whats-app class="social ma-0 pa-0" :url="url" title="Hello" scale="1" style="margin-top:-1px !important;fill:#ccc !important;filter: grayscale(100%);opacity:.5"></whats-app>
              <v-spacer></v-spacer>
              <telegram class="social ma-0 mr-5 pa-0" :url="url" scale="1" style="margin-top:-1px !important;fill:#ccc !important;filter: grayscale(100%);opacity:.5"></telegram>
            </v-row>
            <v-row
              class="ma-0 mt-3 pa-0"
              style="width:100%;height:100px"
            >
              <v-row
                class="ma-0 pa-0"
                style="width:25%;height:80px"
              >

                <v-row
                  class="ma-0 pa-0"
                  style="width:100%;max-height:20px"
                  @click="$store.commit('switch_units')"
                  align="center"
                >
                  <v-row
                    class="ma-0 pa-0"
                    style="width:100%;color:#999"
                  >
                    <span
                      class="ml-1 font-weight-bold align-end"
                      style="font-size:10px"
                    >TOTAL BID</span>
                  </v-row>
                  <v-row
                    class="ma-0 pa-0"
                    style="color:#999;margin-top:-2px !important"
                  >
                    <span
                      class="ml-1 font-weight-bold"
                      style="font-size:10px;color:#ccc"
                      v-text="total"
                    ></span>
                    <span
                      class="font-weight-light ml-1"
                      style="font-size:10px"
                      v-text="large_units_display"
                    ></span>
                    <span
                      class="ml-1 font-weight-bold align-end"
                      style="font-size:10px"
                    >tx:</span>
                    <span
                      class="ml-1 font-weight-bold font-italic hash"
                      style="font-size:10px;text-decoration:none"
                      v-text="tx_hash"
                    ></span>
                    <v-icon
                    class="ma-0 ml-1 pa-0"
                      small
                      color= "#999"
                      style="transform:rotate(10deg);color:#444"
                    >
                      mdi-information-outline
                    </v-icon>
                  </v-row>
                  <v-row
                    class="ma-0 mt-1 pa-0"
                    style="width:100%;color:#999"
                  >
                    <span
                      class="ml-1 font-weight-bold align-end"
                      style="font-size:10px"
                    >TAKEN BID</span>
                  </v-row>
                  <v-row
                    class="ma-0 pa-0"
                    style="width:100%;color:#999;margin-top:-2px !important"
                  >
                    <span
                      class="ml-1 font-weight-bold"
                      style="font-size:10px;color:#ccc"
                      v-text="taken.taken"
                    ></span>
                    <span
                      class="font-weight-light ml-1"
                      style="font-size:10px"
                      v-text="large_units_display"
                    ></span>
                    <span
                      class="ml-1 font-weight-bold"
                      style="font-size:10px;color:#ccc"
                      v-text="taken.porcentage + '%'"
                    ></span>
                  </v-row>
                  <v-row
                    class="ma-0 mt-1 pa-0"
                    style="width:100%;color:#999"
                  >
                    <span
                      class="ml-1 font-weight-bold align-end"
                      style="font-size:10px"
                    >ACTIVE BID</span>
                  </v-row>
                  <v-row
                    class="ma-0 pa-0"
                    style="width:100%;color:#999;margin-top:-5px !important"
                  >
                    <span
                      class="ml-1 font-weight-bold"
                      style="font-size:15px;color:#ccc"
                      v-text="available.available.toLocaleString()"
                    ></span>
                    <span
                      class="font-weight-light ml-1"
                      style="font-size:10px;margin-top: 5px"
                      v-text="large_units_display"
                    ></span>
                    <span
                      class="ml-1 font-weight-bold"
                      style="font-size:10px;color:#ccc;margin-top:5px !important"
                      v-text="available.porcentage + '%'"
                    ></span>
                  </v-row>

                </v-row>
              </v-row>
              <v-row
                v-show="qr"
                class="ma-0 mt-8 pa-0"
                style="max-width:50%;max-height:80px"
                justify="left"
              >
                <v-row
                  class="ma-0 ml-10 pa-0"
                  style="width:100%"
                >
                  <v-row
                    class="ma-0 pa-0"
                    style="max-height:80px"
                  >
                    <vue-qr
                      class="ma-0 pa-0"
                      backgroundColor="#222"
                      colorLight="transparent"
                      colorDark="#ccc"
                      margin=0
                      text="bitcoincash:pprn2xyzjkguj4ea4mrsrklmmrnyqx027y5s5tlmcj?amount=0.00030000"
                      :size="80"
                      height="80px"
                    >
                    </vue-qr>
                  </v-row>
                  <v-row
                    class="ma-0 pa-0"
                    style="max-width:75%"
                  >
                    <v-row
                      class="ma-0 pa-0"
                      style="width:100%;color:#999"
                    >
                      <p
                        class="ml-2 font-weight-black"
                        style="width:80%;font-size:13px;color:#ccc"
                      ><span class="ma-0 pa-0 hash">bitcoincash:pprn2xyzjkguj4ea4mrsrklmmrnyqx027y5s5tlmcj</span>
                      <v-icon
                        class="ma-0 pa-0 fecha"
                        small
                        style="transform:scaleY(-1)"
                        @click="copy"
                        color="#999"
                      >
                        mdi-content-copy
                      </v-icon>
                      <v-icon
                        class="ma-0 pa-0"
                        small
                        color= "#444"
                        style="transform:rotate(15deg)"
                      >
                        mdi-information-outline
                      </v-icon>
                    </p>
                      <v-row
                        class="ma-0 mt-n2 pa-0"
                        style="width:100%;color:#999"
                        justify="left"

                      >
                        <div
                          class="ma-0 ml-2 pa-0"
                          style="color:#999;;min-width:20%"
                        >
                          <span
                            class="font-weight-black"
                            style="font-size:10px"
                          >MIN BET</span>
                        </div>

                        <div
                          class="ml-2 font-weight-bold"
                          style="font-size:13px;color:#ccc"
                          v-text="minimun_display"
                        ></div>
                        <div
                          class="font-weight-light ml-1"
                          style="font-size:10px;margin-top:2px !important"
                          v-text="large_units_display"
                        ></div>
                        <v-icon
                          class="ma-0 ml-1 pa-0"
                          small
                          color= "#FF7C00"
                        >
                          mdi-alert-circle-outline
                        </v-icon>
                      </v-row>
                      <v-row
                        class="ma-0 mt-n1 pa-0"
                        style="width:100%;color:#999"
                        justify="left"
                        align="center"
                      >
                        <div
                          class="ma-0 ml-2 mt-1 pa-0"
                          style="color:#999;;min-width:20%"
                        >
                          <span
                            class="font-weight-black"
                            style="font-size:10px"
                          >MAX BET</span>
                        </div>

                        <div
                          class="ml-2 font-weight-bold"
                          style="font-size:13px;color:#ccc"
                          v-text="maximun_display"
                        ></div>
                        <div
                          class="font-weight-light ml-1"
                          style="font-size:10px;margin-top:1px"
                          v-text="large_units_display"
                        ></div>
                        <v-icon
                        class="ma-0 ml-1 pa-0"
                          small
                          color= "#FF7C00"
                        >
                          mdi-alert-circle-outline
                        </v-icon>
                      </v-row>
                    </v-row>


                  </v-row>
                </v-row>
              </v-row>
              <v-row
                v-show="!qr"
                class="ma-0 mt-6 pa-0"
                style="width:50%;height:80px"
                justify="center"
              >

                <v-row
                  class="ma-0 mx-8 pa-0"
                  style="width:100%;height:10px"
                  @click="$store.commit('switch_units')"
                >
                  <span
                    class="ml-1 text-h7 font-weight-light amount"
                    style=";color:#ccc"
                    v-text="small_amount_display"
                  ></span>
                  <span
                    class="text-h7 font-weight-light ml-1"
                    v-text="small_units_display"
                  ></span>
                </v-row>

                <v-row
                  class="ma-0 mt-1 mx-8 pa-0"
                  style="width:100%"
                  @click="$store.commit('switch_units')"
                >
                  <span
                    class="ml-1 text-h4 font-weight-light amount"
                    style="color:#ccc"
                    v-text="large_amount_display"
                  ></span>
                  <span
                    class="subheading font-weight-light ml-1 mt-3"
                    style="font-size:20px"
                    v-text="large_units_display"
                  ></span>
                </v-row>

                <v-row
                  class="ma-0 mt-2 mx-8 pa-0"
                  style="width:100%;height:10px"
                >
                  <v-slider
                    v-model="bpm"
                    min="0"
                    :max="max_bet"
                    style="width:100%"
                    color="#26D895"
                    track-color="#26D895"
                    track-fill-color="#333"
                    dense
                    @change="check_taken()"
                  >
                    <template v-slot:prepend>
                      <v-icon
                        @click="decrement"
                      >
                        mdi-minus
                      </v-icon>
                    </template>

                    <template v-slot:append>
                      <v-icon
                        @click="increment"
                      >
                        mdi-plus
                      </v-icon>
                    </template>
                  </v-slider>
                </v-row>
              </v-row>
              <v-row
                class="ma-0 pa-0"
                style="width:25%;height:80px"
              >
                <v-row
                  class="ma-0 ml-8 pa-0"
                  style="width:100%;color:#999;border-bottom:1px solid #444"
                  justify="left"
                  align="center"
                >
                  <v-row
                    class="ma-0 pa-0"
                    style="color:#999"
                  >
                    <span
                      class="font-weight-black"
                      style="font-size:10px;margin-top:3px !important"
                    >BETTING</span>
                  </v-row>
                  <v-spacer></v-spacer>

                  <span
                    class="mt-1 font-weight-bold"
                    style="font-size:13px;color:#ccc"
                    v-text="large_amount_display"
                  ></span>
                  <span
                    class="font-weight-light ml-1"
                    style="font-size:10px;margin-top:3px"
                    v-text="large_units_display"
                  ></span>
                </v-row>
                <v-row
                  class="ma-0 mt-2 pa-0"
                  style="width:100%"
                  justify="end"
                  align="center"
                >
                  <span
                    class="ml-8 font-weight-bold"
                    style="font-size:10px;color:#999"
                  >HOME</span>
                  <v-spacer></v-spacer>
                  <span
                    class="ml-1 font-weight-bold"
                    :style="alt_style(bet.home_factor)"
                    v-text="home_amount_display"
                  ></span>
                  <span
                    class="font-weight-light ml-1"
                    style="font-size:10px;color:#999;margin-top:2px !important"
                    v-text="large_units_display"
                  ></span>
                  <v-icon
                  class="ma-0 ml-1 pa-0"
                    small
                    color= "#999"
                    style="transform:rotate(10deg);color:#444;margin-top:2px !important"
                  >
                    mdi-information-outline
                  </v-icon>
                </v-row>
                <v-row
                  class="ma-0 pa-0"
                  style="width:100%"
                  justify="end"
                  align="center"
                >
                  <span
                    class="ml-8 font-weight-bold"
                    style="font-size:10px;color:#999"
                  >DRAW</span>
                  <v-spacer></v-spacer>
                  <span
                    class="ml-1 font-weight-bold"
                    :style="alt_style(bet.draw_factor)"
                    v-text="draw_amount_display"
                  ></span>
                  <span
                    class="font-weight-light ml-1"
                    style="font-size:10px;margin-top:3px;color:#999"
                    v-text="large_units_display"
                  ></span>
                  <v-icon
                  class="ma-0 ml-1 pa-0"
                    small
                    color= "#999"
                    style="transform:rotate(10deg);color:#444;margin-top:2px !important"
                  >
                    mdi-information-outline
                  </v-icon>
                </v-row>
                <v-row
                  class="ma-0 pa-0"
                  style="width:100%"
                  justify="end"
                  align="center"
                >
                  <span
                    class="ml-8 font-weight-bold"
                    style="font-size:10px;margin-top:3px;color:#999"
                  >AWAY</span>
                  <v-spacer></v-spacer>
                  <span
                    class="ml-1 font-weight-bold"
                    :style="alt_style(bet.away_factor)"
                    v-text="away_amount_display"
                  ></span>
                  <span
                    class="font-weight-light ml-1"
                    style="font-size:10px;margin-top:3px;color:#999"
                    v-text="large_units_display"
                  ></span>
                  <v-icon
                  class="ma-0 ml-1 pa-0"
                    small
                    color= "#999"
                    style="transform:rotate(10deg);color:#444;margin-top:2px !important"
                  >
                    mdi-information-outline
                  </v-icon>
                </v-row>
              </v-row>
            </v-row>
            <v-row
              class="ma-0 mt-12 pa-0"
              style="width:100%"
            >
              <v-row
                class="ma-0 pa-0"
                style="height:50px;width:40%"

              >
                <v-avatar
                  class="ma-0 pa-0"
                  size="38"
                  style=""
                >
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  >
                </v-avatar>
                <v-flex
                  class="ma-0 ml-1 pa-0"
                  style="height:35px"
                  align="center"
                >
                  <v-flex
                    class="ma-0 pa-0"
                    style="height:50%"
                    align="center"
                  >
                    <v-row
                      class="ma-0 pa-0"
                      style="width:100%"
                    >
                      <span
                        class="ml-1 font-weight-light align-end"
                        style="font-size:10px"
                      >Open by</span>
                      <span
                        class="ml-1 font-weight-bold align-end fecha"
                        style="font-size:10px"
                      >PhGalazHidalgo</span>
                      <span
                        class="ml-1 font-weight-light align-end"
                        style="font-size:10px"
                        v-text="ago"
                      ></span>
                    </v-row>
                  </v-flex>
                  <v-flex
                    class="ma-0 pa-0"
                    align="center"
                  >
                    <v-row
                      class="ma-0 pa-0"
                      style="width:100%"
                    >
                      <v-img
                        class="ma-0 ml-1 pa-0"
                        style="margin-top:1px !important"
                        max-height="17"
                        max-width="17"
                        :src="bet.fixture[0].homeTeam[0].logo"
                      ></v-img>
                      <p
                        class="ma-0 pa-0"
                        style="font-weight:bold;margin-left:2px !important"
                      >
                        : {{ this.home_open }}
                      </p>
                      <p
                        class="ma-0 ml-2 pa-0"
                        style="font-weight:bold"
                      >
                        <span style="color:#999">D</span> : 2.00
                      </p>
                      <v-img
                        class="ma-0 ml-2 pa-0"
                        style="margin-top:1px !important"
                        max-height="17"
                        max-width="17"
                        :src="bet.fixture[0].awayTeam[0].logo"
                      ></v-img>
                      <p
                        class="ma-0 ml-1 pa-0"
                        style="font-weight:bold"
                      >
                        : 2.00
                      </p>
                    </v-row>
                  </v-flex>
                </v-flex>
              </v-row>
              <!-- <v-row
                class="ma-0 mt-4 pa-0"
                style="width:10%;height:20px;border-radius:2px"
                justify="center"
                align="center"
              >
                <v-row
                  class="ma-0 ml-5 pa-0 social"
                  style="background-color:#ddd;max-width:14px;height:14px;border-radius:2px;filter: grayscale(100%)"
                >
                  <facebook class="ma-0 pa-0" :url="url" scale="1" style="margin-top:-1px !important"></facebook>
                </v-row>
                <v-spacer></v-spacer>
                <v-row
                  class="ma-0 pa-0 social"
                  style="background-color:#ddd;max-width:14px;height:14px;border-radius:2px;filter: grayscale(100%)"
                >
                    <twitter class="ma-0 pa-0" :url="url" title="Check me on Github" scale="1" style="margin-top:-1px !important"></twitter>
                </v-row>
                <v-spacer></v-spacer>
                <v-row
                  class="ma-0 pa-0 social"
                  style="background-color:#ddd;max-width:14px;height:14px;border-radius:2px;filter: grayscale(100%)"
                >
                  <whats-app class="ma-0 pa-0" :url="url" title="Hello" scale="1" style="margin-top:-1px !important"></whats-app>
                </v-row>
                <v-spacer></v-spacer>
                <v-row
                  class="ma-0 mr-5 pa-0 social"
                  style="background-color:#ddd;max-width:14px;height:14px;border-radius:2px;filter: grayscale(100%)"
                >
                  <telegram class="ma-0 pa-0" :url="url" scale="1" style="margin-top:-1px !important"></telegram>
                </v-row>
              </v-row> -->
              <!-- <v-row
                class="ma-0 mt-7 pa-0"
                style="width:10%;height:20px;border-radius:2px"
                justify="center"
                align="center"
              >
                <facebook class="social ma-0 ml-5 pa-0" :url="url" scale="1" style="margin-top:-1px !important;fill:#ccc;filter: grayscale(100%);opacity:.5"></facebook>
                <v-spacer></v-spacer>
                <twitter class="social ma-0 pa-0" :url="url" title="Check me on Github" scale="1" style="margin-top:-1px !important;fill:#ccc !important;filter: grayscale(100%);opacity:.5"></twitter>
                <v-spacer></v-spacer>
                <whats-app class="social ma-0 pa-0" :url="url" title="Hello" scale="1" style="margin-top:-1px !important;fill:#ccc !important;filter: grayscale(100%);opacity:.5"></whats-app>
                <v-spacer></v-spacer>
                <telegram class="social ma-0 mr-5 pa-0" :url="url" scale="1" style="margin-top:-1px !important;fill:#ccc !important;filter: grayscale(100%);opacity:.5"></telegram>
              </v-row> -->
              <v-row
                class="ma-0 mt-n8 pa-0"
                style="width:40%"
              >
                <v-spacer></v-spacer>

                <v-btn
                  v-show="!qr"
                  class="quick"
                  style="background-color:rgba(38,216,149,.1);border-radius:2px;color:#ccc"
                  height="30px"
                  @click="quick_bet()"
                  disable
                >
                  QUICK BET
                </v-btn>
                <v-btn
                  v-show="qr"
                  class=""
                  style="border:0px solid #444;background-color:#111 !important;border-radius:2px;color:#444"
                  height="30px"
                  @click="quick_bet()"
                  disabled
                >
                  QUICK BET
                </v-btn>
                <v-btn
                  class="ma-0 ml-2 pa-0 cart"
                  style="background-color:rgba(266,266,266,.05);border-radius:2px"
                  max-width="20px"
                  height="30px"
                >
                  <v-icon
                    class="ma-0 pa-0"
                    color="#ccc"
                    small
                  >
                    mdi-cart-arrow-down
                  </v-icon>
                </v-btn>
              </v-row>
            </v-row>
          </v-row>
        </v-row>
      </v-card>
    </v-expand-transition>
  </v-row>
</template>

<script>

  import { mapState } from 'vuex'
  import {
    Facebook,
    Twitter,
    WhatsApp,
    Telegram
  } from 'vue-socialmedia-share';
  import VueQr from 'vue-qr'

  export default {
    props: {
      bet: {
        type: Object,
        default: () => ({}),
      }
    },
    components: {
      VueQr,
      Facebook,
      Twitter,
      WhatsApp,
      Telegram
    },
    data () {
      return {
        value: 0,
        init_amount: this.bet.init_amount,
        taken_amount: this.bet.taken_amount,
        now: Math.trunc((new Date()).getTime() / 1000),
        bpm: null,
        hover: false,
        interval: null,
        isPlaying: false,
        home_style: "font-size:13px;color:#ccc",
        draw_style: "font-size:13px;color:#ccc",
        away_style: "font-size:13px;color:#ccc",
        qr: false,
        ago: null
      }
    },
    computed: {
      ...mapState([
        // map this.count to store.state.count
        'min_bet'
      ]),
      home_open() {
        var factor = parseInt(this.toFixed(this.max_bet, 0))
        var factora = (this.bet.init_amount + this.bet.home_factor) / this.bet.init_amount
        return factora.toFixed(2)
      },
      tx_hash() {
        var first = this.bet.init_tx.slice(0,3)
        var last = this.bet.init_tx.substr(this.bet.init_tx.length - 3)
        return first + "..." + last
      },
      factor() {
        var arr = [this.bet.home_factor, this.bet.draw_factor, this.bet.away_factor]
        var factor = Math.max(...arr)
        return factor
      },
      usds() {
        return (this.sats / 100000000 * this.$store.state.bch_price).toFixed(2)
      },
      sats() {
        return this.bpm - this.taken_equivalent
      },
      total() {
        if(this.$store.state.currency){
          return this.bet.init_amount.toLocaleString()
        }else{
          return (this.bet.init_amount / 100000000 * this.$store.state.bch_price).toFixed(2)
        }
      },
      available() {
        var porcentage = 100 - (this.bet.taken_amount * 100 / this.bet.init_amount)
        if(this.$store.state.currency){
          var available = {
            available: (this.bet.init_amount - this.bet.taken_amount),
            porcentage: porcentage.toFixed(0)
          }
          return available
        }else{
          var avai = this.bet.init_amount - this.bet.taken_amount
          var available = {
            available: (avai / 100000000 * this.$store.state.bch_price).toFixed(2),
            porcentage: porcentage.toFixed(1)
          }
          return available
        }
      },
      taken() {
        var porcentage = this.bet.taken_amount * 100 / this.bet.init_amount
        if(this.$store.state.currency){
          var taken = {
            taken: this.bet.taken_amount.toLocaleString(),
            porcentage: porcentage.toFixed(1)
          }
          return taken
        }else{
          var porcentage = this.bet.taken_amount * 100 / this.bet.init_amount
          var taken = {
            taken: (this.bet.taken_amount / 100000000 * this.$store.state.bch_price).toFixed(2),
            porcentage: porcentage.toFixed(1)
          }
          return taken
        }
      },
      small_amount_display() {
        if(this.$store.state.currency){
          return this.usds.toLocaleString()
        }else{
          return this.sats.toLocaleString()
        }
      },
      minimun_display() {
        if(this.$store.state.currency){
          return this.min_bet.toLocaleString()
        }else{
          var pre = (this.min_bet / 100000000 * this.$store.state.bch_price).toFixed(2)
          return pre.toLocaleString()
        }
      },
      maximun_display() {
        if(this.$store.state.currency){
          var max = this.max_bet - this.taken_equivalent
          return max.toLocaleString(undefined, {'minimumFractionDigits':0,'maximumFractionDigits':0})
        }else{
          var pre = (this.max_bet / 100000000 * this.$store.state.bch_price).toFixed(2)
          return pre.toLocaleString()
        }
      },
      small_units_display() {
        if(this.$store.state.currency){
          return 'USD'
        }else{
          return 'SATS'
        }
      },
      large_amount_display() {
        if(this.$store.state.currency){
          return this.sats.toLocaleString()
        }else{
          return this.usds.toLocaleString(undefined, {'minimumFractionDigits':2,'maximumFractionDigits':2})
        }
      },
      large_units_display() {
        if(this.$store.state.currency){
          return 'SATS'
        }else{
          return 'USD'
        }
      },
      home_amount_display() {
        if(this.$store.state.currency){
          var home = this.sats * this.bet.home_factor
          return home.toLocaleString(undefined, {'minimumFractionDigits':0,'maximumFractionDigits':0})
        }else{
          var home = this.usds * this.bet.home_factor
          return home.toFixed(2).toLocaleString()
        }
      },
      draw_amount_display() {
        if(this.$store.state.currency){
          var draw = this.sats * this.bet.draw_factor
          return draw.toLocaleString(undefined, {'minimumFractionDigits':0,'maximumFractionDigits':0})
        }else{
          var draw = this.usds * this.bet.draw_factor
          return draw.toFixed(2).toLocaleString()
        }
      },
      away_amount_display() {
        if(this.$store.state.currency){
          var away = this.sats * this.bet.away_factor
          return away.toLocaleString(undefined, {'minimumFractionDigits':0,'maximumFractionDigits':0})
        }else{
          var away = this.usds * this.bet.away_factor
          return away.toFixed(2).toLocaleString()
        }
      },
      max_bet() {
        var max = (this.bet.init_amount) / (this.factor - 1)
        return max
      },
      taken_equivalent() {
        var taken_e = (this.bet.taken_amount) / (this.factor - 1)
        taken_e = parseInt(taken_e.toFixed(2))
        return taken_e
      },
      eventDate() {
         var date = this.bet.fixture[0].event_date;
         return this.formatDate(date)
      },
      dateInMilliseconds() {
        var kickoff = this.bet.fixture[0].event_timestamp;
        return kickoff
      },
      seconds() {
        return (this.dateInMilliseconds - this.now) % 60;
      },
      minutes() {
        return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
      },
      hours() {
        return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
      },
      days() {
        return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
      },
      animationDuration () {
        return `${60 / this.bpm}s`
      },
    },
    methods: {
      toFixed(num, fixed) {
        var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
        return num.toString().match(re)[0];
      },
      agos() {
        var ago = -(this.bet.created - Date.now())
        if (ago < 60000) {
          return "just now"
        } else if (60000 < ago && ago < 3600000) {
          if (ago < 120000) {
            var respuesta = Math.trunc((ago / 1000) / 60) + " min ago"
            return  respuesta
          } else {
            var respuesta = Math.trunc((ago / 1000) / 60) + " mins ago"
            return  respuesta
          }
        } else if (3600000 < ago && ago < 86400000) {
          if (ago < 7200000) {
            var respuesta = Math.trunc((ago / 1000) / 3600) + " hour ago"
            return  respuesta
          } else {
            var respuesta = Math.trunc((ago / 1000) / 3600) + " hours ago"
            return  respuesta
          }
        } else if (ago > 86400000) {
          if (ago < 172800000) {
            var respuesta = Math.trunc((ago / 1000) / (3600 * 24)) + " day ago"
            return  respuesta
          } else {
            var respuesta = Math.trunc((ago / 1000) / (3600 * 24)) + " days ago"
            return  respuesta
          }
        }
      },
      copy() {
        this.$refs.clone.focus();
        document.execCommand('copy');
      },
      quick_bet() {
        this.qr = !this.qr
      },
      factor_style(factor) {
        if(factor > 1.00){
          return "height:100%;font-size:12px;color:#26D895"
        }else if(factor == 1.00){
          return "height:100%;font-size:12px;color:#ccc"
        }else if(factor < 1.00){
          return "height:100%;font-size:12px;color:#FC2C3B"
        }
      },
      alt_style(factor) {
        if(factor > 1.00){
          return "margin-top:2px !important;font-size:13px;color:#26D895"
        }else if(factor == 1.00){
          return "margin-top:2px !important;font-size:13px;color:#ccc"
        }else if(factor < 1.00){
          return "margin-top:2px !important;font-size:13px;color:#FC2C3B"
        }
      },
      check_taken() {
        if(this.bpm < this.taken_equivalent + this.min_bet){
          this.bpm = this.taken_equivalent + this.min_bet
        }
      },
      formatDate(date) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        return new Date(date).toLocaleTimeString('en', options)
      },
      decrement () {
        this.bpm = this.bpm - ((1000000 / this.$store.state.bch_price).toFixed(0))
        this.check_taken()
      },
      increment () {
        var penny_price = parseInt((1000000 / this.$store.state.bch_price).toFixed(0))
        this.bpm = this.bpm + penny_price
        this.check_taken()
      },
      toggle () {
        this.isPlaying = !this.isPlaying
      }
    },
    created () {
      this.bpm = this.taken_equivalent + this.min_bet
    },
    mounted () {
      window.setInterval(() => {
          this.now = Math.trunc((new Date()).getTime() / 1000);
      },1000);
      this.ago = this.agos()
      setTimeout(() => {this.ago = this.agos()}, 60000);
    },
  }
</script>



<style lang="sass">
  .amount:hover
    cursor: pointer
  .hash:hover
    text-decoration: underline #29B7D1 !important
    color: #29B7D1 !important
    cursor: pointer

  .team:hover
    color: #fff !important

  .fecha:hover
    color: #ccc !important
    cursor: pointer

  .social:hover
    opacity: 1 !important
    cursor: pointer

  .quick
    // border: 1px solid rgba(38,216,149,1) !important
    background-color: rgba(38,216,149,.3) !important
    color: white !important

  .quick:hover
    // border: 1px solid rgba(38,216,149,1) !important
    background: linear-gradient(90deg, #027B92 0%, #00A652 100%) !important
    color: white !important
    cursor: pointer

  .cart:hover
    border: 1px solid rgba(266,266,266,.9) !important
    background-color: rgba(266,266,266,.1) !important
    color: white !important
    cursor: pointer

  .logos:hover
    opacity: 2 !important
    cursor: pointer
  .taken
    min-width: 100% !important

  .vet
    // transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1) !important
    transition: .5s !important


  .vet:hover
      // height: 310px !important
      // background-image: repeating-linear-gradient(45deg, transparent, transparent 140px, rgba(0,0,0,.055) 140px, rgba(0,0,0,.055) 280px)
      // background-color: #1c1c1c !important
      // background-color: #1C1C1C !important
      .main-line
        background-color: #333 !important
        // max-width: 80% !important

  .main-line
    transition: .5s !important
  .main-line:hover
      cursor: pointer

  .fax
    transition: .5s !important

  // @keyframes metronome-example
  //   from
  //     transform: scale(.5)
  //   to
  //     transform: scale(1)


  // .v-avatar--metronome
  //   animation-name: metronome-example
  //   animation-iteration-count: infinite
  //   animation-direction: alternate


</style>
