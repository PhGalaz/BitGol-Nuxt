<template>
    <v-row 
        class="ma-0 pa-0 card" 
        style="height:80vh;width:100%;border:4px solid #303030;border-radius:3px;background-color:#222"
        justify="center"
    >   
        <v-row 
            class="ma-0 mt-n1 pa-0"
            style="width:100%;height:40px;color:#ccc;font-weight:600;font-size:20px;background-color:#303030" 
            align="center" 
            @click="$emit('close-dialog')"
        >
            <p
                class="ma-0 ml-5 pa-0"
                align="center"
            >PLACE A BET ON THE MARKET</p>
        </v-row>
        <v-row
            class="ma-0 pa-0 col-12 col-md-9"
            style="min-height:calc(100% - 40px);max-height:calc(100% - 40px);overflow:auto;border-radius:3px"
            justify="center"
        >
            <v-row 
                class="ma-4 pa-0 col-11"
                style="min-height:25%;max-height:25%;border-radius:3px" 
                justify="center" 
                align="center"
            >
                <v-row
                    class="ma-0 pa-0"
                    justify="center"
                    style="height:40px;border-radius:3px"
                    align="center"
                >
                    <p
                        class="ma-0 pa-0 text-uppercase"
                        style="color:rgba(255,255,255,.6);font-size:14px;font-weight:600"
                    >The bet you're taking</p>
                </v-row>
                <v-row 
                    class="ma-0 pa-0" 
                    style="height:80%;width:100%" 
                    justify="center"
                    align="center"
                >
                    <v-row 
                        class="ma-0 mr-5 pa-0" 
                        style="width:100px" 
                        justify="end" 
                        align="center"
                    >
                        <v-img 
                            contain 
                            class="ma-0 pa-0" 
                            max-height="100" 
                            max-width="100"
                            :src="fixture.fixture.homeTeam[0].logo"
                        ></v-img>
                    </v-row>
                    <v-row 
                        class="ma-0 pa-0"  
                        style="max-width:200px;height:100px;border-radius:3px;background-color:"
                    >
                        <v-row 
                            class="ma-0 pa-0" 
                            style="width:100%;height:100%" 
                            align="center" 
                            justify="center"
                        >
                            <v-row class="ma-0 pa-0"
                                style="max-width:80%;min-width:80%;font-size:25px;color:#CCC;font-weight:bold"
                                justify="center" align="center"
                            >
                                HOME
                            </v-row>
                            <v-row class="ma-0 pa-0 factor_case"
                                :style="factor_color(this.home_factor)"
                                justify="center" 
                                align="center"
                            >
                                {{ home_factor }}
                            </v-row>
                        </v-row>
                    </v-row>
                    <v-row 
                        class="ma-0 pa-0" 
                        style="max-width:200px;height:100px;border-radius:3px"
                    >
                        <v-row 
                            class="ma-0 pa-0"  
                            style="width:100%;height:100%" 
                            align="center" 
                            justify="center"
                        >
                            <v-row class="ma-0 pa-0"
                                style="max-width:80%;min-width:80%;font-size:25px;color:#CCC;font-weight:bold"
                                justify="center" 
                                align="center"
                            >
                                DRAW
                            </v-row>
                            <v-row class="ma-0 pa-0 factor_case"
                                :style="factor_color(this.draw_factor)"
                                justify="center" 
                                align="center"
                            >
                                {{ draw_factor }}
                            </v-row>
                        </v-row>
                    </v-row>
                    <v-row class="ma-0 pa-0" style="max-width:200px;height:100px;border-radius:3px">
                        <v-row 
                            class="ma-0 pa-0" 
                            style="width:60%;height:100%" 
                            align="center" 
                            justify="center"
                        >
                            <v-row class="ma-0 pa-0"
                                style="max-width:80%;min-width:80%;font-size:25px;color:#CCC;font-weight:bold"
                                justify="center" align="center">
                                AWAY
                            </v-row>
                            <v-row class="ma-0 pa-0 factor_case"
                                :style="factor_color(this.away_factor)"
                                justify="center" 
                                align="center"
                            >
                                {{ away_factor }}
                            </v-row>
                        </v-row>
                    </v-row>
                    <v-row 
                        class="ma-0 ml-5 pa-0" 
                        style="width:100px;height: 100%;" 
                        align="center"
                    >
                        <v-img 
                            contain 
                            class="ma-0 pa-0" 
                            max-height="100" 
                            max-width="100"
                            :src="fixture.fixture.awayTeam[0].logo"
                        ></v-img>
                    </v-row>
                </v-row>
            </v-row>
            <v-row
                class="ma-0 mb-8 pa-0 col-11"
                style="border-radius:3px;min-height:25%;max-height:25%" 
                justify="center"
                align="center"
            >
                <v-row
                    class="ma-0 pa-0 col-12 col-md-7"
                    style="height:100%;max-width:100%"
                    align="center"
                    justify="center"
                >
                    <v-row
                        class="ma-0 pa-0 col-12"
                        style="width:100%"
                        justify="center"
                    >
                        <v-row 
                            class="ma-0 pa-0 test" 
                        >
                            <v-row 
                                class="ma-0 pa-0"
                                style="max-width:65px"
                                align="center"
                            >HOME</v-row>
                            <v-slider 
                                v-model="home_slider_value" 
                                min="-1000" 
                                max="1000" 
                                :color="color" 
                                :track-color="home_track_color"
                                :track-fill-color="home_track_fill_color" 
                                dense 
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
                        </v-row>
                    </v-row>
                    <v-row
                        class="ma-0 pa-0"
                        style="width:100%"
                        justify="center"
                    >
                        <v-row 
                            class="ma-0 pa-0 test"
                        >
                            <v-row 
                                class="ma-0 pa-0"
                                style="max-width:65px"
                                align="center"
                            >DRAW</v-row>
                            <v-slider 
                                v-model="draw_slider_value" 
                                min="-1000" 
                                max="1000" 
                                :color="color" 
                                :track-color="draw_track_color"
                                :track-fill-color="draw_track_fill_color" 
                                dense 
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
                        </v-row>
                    </v-row>
                    <v-row
                        class="ma-0 pa-0"
                        style="width:100%"
                        justify="center"
                    >
                        <v-row 
                            class="ma-0 pa-0 test"
                        >
                            <v-row 
                                class="ma-0 pa-0"
                                style="max-width:65px"
                                align="center"
                            >AWAY</v-row>
                            <v-slider 
                                v-model="away_slider_value" 
                                min="-1000" 
                                max="1000" 
                                :color="color" 
                                :track-color="away_track_color"
                                :track-fill-color="away_track_fill_color" 
                                dense 
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
                        </v-row>
                    </v-row>
                </v-row>
            </v-row>
            <v-row
                class="ma-0 mb-8 pa-0 col-7"
                style="min-height:30%;max-height:30%"
                justify="center"
            >
                <v-row
                    class="ma-0 pa-0 col-12"
                    style="height:100%;border-radius:3px"
                    align="center"
                    justify="center"
                >
                    <v-row
                        class="ma-0 pa-0"
                        justify="center"

                    > 
                        Hola
                    </v-row>
                </v-row>
            </v-row>
        </v-row>
        <v-row
            class="ma-0 pa-0 col-md-3"
            style="background-color:#151515"
            justify="center"
            align="center"
        > 
            Hola
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
        max-width: 160px
        min-width: 160px
        height: 45%
        border-radius: 3px
        background-color: #151515
        font-size: 30px
</style>