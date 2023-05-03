<template>
    <v-row 
        class="ma-0 pa-0 card" 
        style="width:100%;border-radius:3px;background-color:#222"
        justify="left"
    >   
        <v-row
            class="ma-0 pa-0 col-12"
            style="height:40px;width:100%;border-radius:3px;background-color:#222"
            justify="center"
            align="center"
        >
            <v-spacer></v-spacer>
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
        <v-row
            class="ma-0 mx-10 pa-0"
            style="vertical-align:middle !important;font-size:medium"
            justify="left"
        >
            <p style="font-size:large">
                Create the bet you would like to take<br>
                <span
                    style="color:grey"
                >
                    At least one factor must be
                    <span 
                        class="pl-2 pr-1" 
                        style="color:#9ACD32;font-size:large;font-size:small;vertical-align: middle !important;background-color:rgba(154,205,50,0.25);border-radius:3px"
                    >
                        greater than 1
                    </span>
                </span>
                <span
                    class="ml-1"
                    style="color:grey"
                >
                    . At least one factor must be
                    <span 
                        class="pl-2 pr-1 mr-1" 
                        style="color:#FC2C3B;font-size:large;font-size:small;vertical-align: middle !important;background-color:rgba(252,44,59,0.25);border-radius:3px"
                    >
                        equal to 0
                    </span>
                    .
                </span>
                <!-- <span
                    class="ml-1"
                    style="color:grey"
                >
                    . Remaining factor can take any value.
                </span> -->
            </p>
        </v-row>
        <!--  -->
        <v-row
            class="ma-0 pa-0 col-12"
            justify="center"
        >
            <v-row 
                class="mx-3 mt-3 mb-1 pa-0"
                style="display:block;border-radius:3px;background-color:#262626" 
                justify="center" 
                align="center"
            >
                <v-row
                    class="ma-0 mt-3"
                    justify="center"
                >
                    <v-row 
                        class="ma-0 my-2 pa-0"
                        style="max-width:140px"
                        justify="center" 
                        align="center"
                    >
                        <v-img 
                            contain 
                            class="ma-0 pa-0" 
                            max-height="60" 
                            max-width="60"
                            :src="fixture.homeTeam[0].logo"
                        ></v-img>
                    </v-row>
                    <v-row 
                        class="ma-0 mx-2 my-2 pa-0"
                        style="max-width:140px;color:grey;font-weight:bold;letter-spacing:1px;font-size:medium"
                        justify="center" 
                        align="center"
                    >
                        DRAW
                    </v-row>
                    <v-row 
                        class="ma-0 my-2 pa-0"
                        style="max-width:140px"
                        justify="center" 
                        align="center"
                    >
                        <v-img 
                            contain 
                            class="ma-0 pa-0" 
                            max-height="60" 
                            max-width="60"
                            :src="fixture.awayTeam[0].logo"
                        ></v-img>
                    </v-row>
                </v-row>
                <v-row
                    class="ma-0"
                    justify="center"
                >
                    <v-row class="ma-0 mt-2 mb-4 pa-0 factor_case"
                        :style="factor_color(this.home_factor)"
                        justify="center" 
                        align="center"
                    >
                        {{ home_factor }}
                    </v-row>
                    <v-row class="ma-0 mt-2 mb-4 mx-2 pa-0 factor_case"
                        :style="factor_color(this.draw_factor)"
                        justify="center" 
                        align="center"
                    >
                        {{ draw_factor }}
                    </v-row>
                    <v-row class="ma-0 mt-2 mb-4 pa-0 factor_case"
                        :style="factor_color(this.away_factor)"
                        justify="center" 
                        align="center"
                    >
                        {{ away_factor }}
                    </v-row>
                </v-row>
            </v-row>
            <!--  -->
            <v-row
                class="ma-0 pa-0 mt-4 col-12"
            >
                <v-row 
                    class="mx-3 pa-0"
                    style="display:block;border-radius:3px;background-color:#262626;width:100%;height:50px" 
                    justify="center" 
                    align="center"
                >
                    <v-row 
                        class="ma-0 pa-0 test"
                        style="min-height:50px;max-height:50px;scale:0.75"
                        align="center"
                        justify="center"
                    >
                        <v-row 
                            class="ma-0 my-2 pa-0"
                            style="max-width:140px;color:grey;font-weight:bold;letter-spacing:1px;font-size:medium"
                            justify="center" 
                            align="center"
                        >
                            HOME
                        </v-row>
                        <v-slider 
                            class="ma-0 pa-0"
                            v-model="home_slider_value" 
                            min="-1000" 
                            max="1000" 
                            :color="color" 
                            :track-color="home_track_color"
                            :track-fill-color="home_track_fill_color" 
                            track-size="1"
                        >
                            <template v-slot:prepend>
                                <v-icon
                                    @click="decrement('home')"
                                >
                                    mdi-minus
                                </v-icon>
                            </template>
                            <template v-slot:append>
                                <v-icon
                                    @click="increment('home')"
                                >
                                    mdi-plus
                                </v-icon>
                            </template>
                        </v-slider>
                        <v-row 
                            class="ma-0 my-2 pa-0"
                            style="max-width:140px"
                            justify="center" 
                            align="center"
                        >
                        
                        </v-row>
                    </v-row>
                </v-row>
                <v-row 
                    class="mx-3 mt-5 pa-0"
                    style="display:block;border-radius:3px;background-color:#262626;width:100%;height:50px" 
                    justify="center" 
                    align="center"
                >
                    <v-row 
                        class="ma-0 pa-0 test"
                        style="min-height:50px;max-height:50px;scale:0.75"
                        align="center"
                        justify="center"
                    >
                        <v-row 
                            class="ma-0 my-2 pa-0"
                            style="max-width:140px;color:grey;font-weight:bold;letter-spacing:1px;font-size:medium"
                            justify="center" 
                            align="center"
                        >
                            DRAW
                        </v-row>
                        <v-slider 
                            class="ma-0 pa-0"
                            v-model="draw_slider_value" 
                            min="-1000" 
                            max="1000" 
                            :color="color" 
                            :track-color="draw_track_color"
                            :track-fill-color="draw_track_fill_color" 
                            track-size="1"
                        >
                            <template v-slot:prepend>
                                <v-icon
                                    @click="decrement('draw')"
                                >
                                    mdi-minus
                                </v-icon>
                            </template>
                            <template v-slot:append>
                                <v-icon
                                    @click="increment('draw')"
                                >
                                    mdi-plus
                                </v-icon>
                            </template>
                        </v-slider>
                        <v-row 
                            class="ma-0 my-2 pa-0"
                            style="max-width:140px;color:grey;font-weight:bold;letter-spacing:1px;font-size:medium"
                            justify="center" 
                            align="center"
                        >
                            DRAW
                        </v-row>
                    </v-row>
                </v-row>
                <v-row 
                    class="mx-3 mt-5 mb-3 pa-0"
                    style="display:block;border-radius:3px;background-color:#262626;width:100%;height:50px" 
                    justify="center" 
                    align="center"
                >
                    <v-row 
                        class="ma-0 pa-0 test"
                        style="min-height:50px;max-height:50px;scale:0.75"
                        align="center"
                        justify="center"
                    >
                        <v-row 
                            class="ma-0 my-2 pa-0"
                            style="max-width:140px;color:grey;font-weight:bold;letter-spacing:1px;font-size:medium"
                            justify="center" 
                            align="center"
                        >
                        </v-row>
                        <v-slider 
                            class="ma-0 pa-0"
                            v-model="away_slider_value" 
                            min="-1000" 
                            max="1000" 
                            :color="color" 
                            :track-color="away_track_color"
                            :track-fill-color="away_track_fill_color" 
                            track-size="1"
                        >
                            <template v-slot:prepend>
                                <v-icon
                                    @click="decrement('away')"
                                >
                                    mdi-minus
                                </v-icon>
                            </template>
                            <template v-slot:append>
                                <v-icon
                                    @click="increment('away')"
                                >
                                    mdi-plus
                                </v-icon>
                            </template>
                        </v-slider>
                        <v-row 
                            class="ma-0 my-2 pa-0"
                            style="max-width:140px;color:grey;font-weight:bold;letter-spacing:1px;font-size:medium"
                            justify="center" 
                            align="center"
                        >
                            AWAY
                        </v-row>
                    </v-row>
                </v-row>
                <v-row
                    class="ma-0 mx-10 mt-4 pa-0"
                    style="vertical-align:middle !important;font-size:medium"
                    justify="left"
                >
                    <p style="font-size:large">
                        The bet you're openning for the market<br>
                    </p>
                </v-row>
                <v-row 
                    class="mx-3 mb-3 pa-0"
                    style="display:block;border-radius:3px;background-color:#262626;width:100%;height:50px" 
                    justify="center" 
                    align="center"
                >
                    <v-row 
                        class="ma-0 pa-0 test"
                        style="min-height:50px;max-height:50px;scale:0.75"
                        align="center"
                        justify="center"
                    >

                    </v-row>
                </v-row>
                <v-row
                    class="ma-0 mx-10 mt-4 pa-0"
                    style="vertical-align:middle !important;font-size:medium"
                    justify="left"
                >
                    <p style="font-size:large">
                        Simulate an amount<br>
                    </p>
                </v-row>
                <v-row 
                    class="mx-3 mb-3 pa-0"
                    style="display:block;border-radius:3px;background-color:#262626;width:100%;height:50px" 
                    justify="center" 
                    align="center"
                >
                    <v-row 
                        class="ma-0 pa-0 test"
                        style="min-height:50px;max-height:50px;scale:0.75"
                        align="center"
                        justify="center"
                    >

                    </v-row>
                </v-row>
            </v-row>
        </v-row>
    </v-row>
</template>

<script>
    export default {
        props: {
            fixture: {
                type: Object,
                default: () => ({})
            }
        },
        data () {
            return {
                home_slider_value: 0,
                draw_slider_value: 0,
                away_slider_value: 0
            }
        },
        computed: {
            home_track_color () {
                if (this.home_slider_value > 0) {
                    return '#595A59'
                } else if (this.home_slider_value < 0) {
                    return '#FC2C3B'
                } else {
                    return '#595A59'
                }
            },
            home_track_fill_color () {
                if (this.home_slider_value > 0) {
                    return '#9ACD32'
                } else if (this.home_slider_value < 0) {
                    return '#595A59'
                } else {
                    return '#595A59'
                }
            },
            draw_track_color () {
                if (this.draw_slider_value > 0) {
                    return '#595A59'
                } else if (this.draw_slider_value < 0) {
                    return '#FC2C3B'
                } else {
                    return '#595A59'
                }
            },
            draw_track_fill_color () {
                if (this.draw_slider_value > 0) {
                    return '#9ACD32'
                } else if (this.draw_slider_value < 0) {
                    return '#595A59'
                } else {
                    return '#595A59'
                }
            },
            away_track_color () {
                if (this.away_slider_value > 0) {
                    return '#595A59'
                } else if (this.away_slider_value < 0) {
                    return '#FC2C3B'
                } else {
                    return '#595A59'
                }
            },
            away_track_fill_color () {
                if (this.away_slider_value > 0) {
                    return '#9ACD32'
                } else if (this.away_slider_value < 0) {
                    return '#595A59'
                } else {
                    return '#595A59'
                }
            },
            home_factor () {
                if(this.home_slider_value > 500) {
                    let factor = (Math.sqrt(6) + ((10 - Math.sqrt(6)) / 500) * (this.home_slider_value - 500)) ** 2
                    return factor.toFixed(2)
                } else if (this.home_slider_value > 0) {
                    let pre = this.home_slider_value / 100
                    // pre = this.getFlooredFixed(pre, 2)
                    let factor = 1 + Number(pre)
                    return factor.toFixed(2)
                } else if (this.home_slider_value === 0){
                    let resp = 1
                    return resp.toFixed(2)
                } else {
                    let factor = 1 + this.home_slider_value / 1000
                    return factor.toFixed(2)
                }
            },
            draw_factor () {
                if(this.draw_slider_value > 500) {
                    let factor = (Math.sqrt(6) + ((10 - Math.sqrt(6)) / 500) * (this.draw_slider_value - 500)) ** 2
                    return factor.toFixed(2)
                } else if (this.draw_slider_value > 0) {
                    let pre = this.draw_slider_value / 100
                    // pre = this.getFlooredFixed(pre, 2)
                    let factor = 1 + Number(pre)
                    return factor.toFixed(2)
                } else if (this.draw_slider_value === 0){
                    let resp = 1
                    return resp.toFixed(2)
                } else {
                    let factor = 1 + this.draw_slider_value / 1000
                    return factor.toFixed(2)
                }
            },
            away_factor () {
                if(this.away_slider_value > 500) {
                    let factor = (Math.sqrt(6) + ((10 - Math.sqrt(6)) / 500) * (this.away_slider_value - 500)) ** 2
                    return factor.toFixed(2)
                } else if (this.away_slider_value > 0) {
                    let pre = this.away_slider_value / 100
                    // pre = this.getFlooredFixed(pre, 2)
                    let factor = 1 + Number(pre)
                    return factor.toFixed(2)
                } else if (this.away_slider_value === 0){
                    let resp = 1
                    return resp.toFixed(2)
                } else {
                    let factor = 1 + this.away_slider_value / 1000
                    return factor.toFixed(2)
                }
            }
        },
        methods: {
            resetHomeFactor () {
                console.log("alerta!", this.home_factor)
                this.home_factor_display = 0
                this.home_slider_value = 0
            },
            closeDialog () {
                this.$emit('close-dialog')
            },
            placeBet () {
                this.$emit('place-bet', {
                    home_factor: this.home_factor_display,
                    away_factor: 1,
                    home_slider_value: this.home_slider_value,
                    away_slider_value: 0,
                    fixture: this.fixture
                })
            },
            increment (pos) {
                if (pos == 'home') {
                    if (this.home_slider_value <= -10) {
                        this.home_slider_value += 10
                        if (this.home_slider_value > -10) {
                            this.home_slider_value = 0
                        }
                    } else {
                        this.home_slider_value += 1
                    }
                } else if (pos == 'draw') {
                    if (this.draw_slider_value <= -10) {
                        this.draw_slider_value += 10
                        if (this.draw_slider_value > -10) {
                            this.draw_slider_value = 0
                        }
                    } else {
                        this.draw_slider_value += 1
                    }
                } else if (pos == 'away') {
                    if (this.away_slider_value <= -10) {
                        this.away_slider_value += 10
                        if (this.away_slider_value > -10) {
                            this.away_slider_value = 0
                        }
                    } else {
                        this.away_slider_value += 1
                    }
                }
            },
            decrement (pos) {
                if (pos == 'home') {
                    if (this.home_factor <= 1.00) {
                        this.home_slider_value -= 10
                    } else {
                        this.home_slider_value -= 1
                    }
                } else if (pos == 'draw') {
                    if (this.draw_factor <= 1.00) {
                        this.draw_slider_value -= 10
                    } else {
                        this.draw_slider_value -= 1
                    }
                } else if (pos == 'away') {
                    if (this.away_factor <= 1.00) {
                        this.away_slider_value -= 10
                    } else {
                        this.away_slider_value -= 1
                    }
                }
            },
            factor_color (pos) {
                if (pos > 1) {
                    return 'color:#9ACD32'
                } else if (pos < 1) {
                    return 'color:#FC2C3B'
                } else {
                    return 'color:grey'
                }
            },
            getFlooredFixed(v, d) {
                return (Math.floor(v * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d);
            }
        }
    }
</script>

<style lang="sass">
    .card
        backdrop-filter: blur(15.2px)
        -webkit-backdrop-filter: blur(15.2px)

    .test
        // .v-slider__track-container
        //     height: 15px !important

        // .v-slider__track-fill
        //     border-radius: 5px 0px 0px 5px !important

        // .v-slider__track-background
        //     border-radius: 0px 5px 5px 0px !important

        .v-slider__thumb
            height: 13px !important
            width: 13px !important
            background-color: grey !important
            
        .v-slider__thumb:hover
            height: 15px !important
            width: 15px !important
            background-color: grey !important

        .v-slider__thumb::after
            color: #ccc !important
        
        .v-slider__thumb::before
            color: transparent !important
            

        .v-slider__thumb-container
            max-height: 10px !important
            background-color: #ccc !important
    
    .factor_case
        max-width: 140px
        min-width: 140px
        border-radius: 3px
        background-color: #151515
        font-size: 20px
</style>