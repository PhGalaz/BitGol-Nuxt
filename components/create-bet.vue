<template>
    <v-row class="ma-0 pa-0 card" style="height:80vh;width:100%;background-color:rgba(50,50,50,.9);border-radius:3px"
        justify="center">
        <v-row class="ma-0 pa-0"
            style="width:100%;min-height:5%;max-height:5%;color:#444;font-weight:600;font-size:20px" justify="center"
            align="center" @click="$emit('close-dialog')">
            PLACE A BET ON THE MARKET
        </v-row>
        <v-row class="ma-0 pa-0" style="width:100%" justify="center" align="center">
            <v-row class="ma-0 pa-0" style="width:100%" justify="center">
                <v-row class="ma-0 mr-5 pa-0" style="width:100px" justify="end" align="center">
                    <v-img contain class="ma-0 pa-0" max-height="100" max-width="100"
                        :src="fixture.fixture.homeTeam[0].logo"></v-img>
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
                            justify="center" align="center">
                            HOME
                        </v-row>
                        <v-text-field 
                            flat
                            solo
                            type="number"
                            label="Another input"
                            class="ma-0 pa-0"
                            style="max-width:140px;min-width:140px;height:45%;border-radius:3px;background-color:#151515;font-size:30px;color:red"
                            v-model="home_factor" 
                            @input="resetHomeFactor"
                            align="center"
                            justify="center"
                        >
                        </v-text-field>
                            {{ home_factor }}
                        <!-- <v-row class="ma-0 pa-0"
                            style="max-width:140px;min-width:140px;height:45%;border-radius:3px;background-color:#151515;font-size:30px;color:red"
                            justify="center" 
                            align="center"
                        >
                            {{ home_factor }}
                        </v-row> -->
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
                        <v-row class="ma-0 pa-0"
                            style="max-width:140px;min-width:140px;height:45%;border-radius:3px;background-color:#151515;font-size:30px;color:grey"
                            justify="center" 
                            align="center"
                        >
                            1.00
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
                        <v-row class="ma-0 pa-0"
                            style="max-width:140px;min-width:140px;height:45%;border-radius:3px;background-color:#151515;font-size:30px;color:greenyellow"
                            justify="center" align="center">
                            3.14
                        </v-row>
                    </v-row>
                </v-row>
                <v-row class="ma-0 ml-5 pa-0" style="width:100px;height: 100%;" align="center">
                    <v-img contain class="ma-0 pa-0" max-height="100" max-width="100"
                        :src="fixture.fixture.awayTeam[0].logo"></v-img>
                </v-row>
            </v-row>
        </v-row>
        <v-row class="ma-0 pa-0 test" style="max-width:800px;height:10px;filter:grayscale(.25)">
            <v-slider 
                v-model="home_slider_value" 
                min="-999" 
                max="1000" 
                :color="color" 
                :track-color="track_color"
                :track-fill-color="track_fill_color" 
                dense 
                label="HOME"
            >
            </v-slider>
            {{ home_slider_value }}
        </v-row>

    </v-row>
</template>

<script>
    export default {
        props: {
            fixture: {
                type: Object,
                default: () => ({}),
            }
        },
        data () {
            return {
                home_slider_value: 0,
                home_factor_display: 1
            }
        },
        methods: {
            resetHomeFactor () {
                console.log(this.home_factor_display)
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
            }
        },
        computed: {
            color () {
                return 'grey'
            },
            track_color () {
                if (this.home_slider_value > 0) {
                    return 'green'
                } else if (this.home_slider_value < 0) {
                    return '#FF0000'
                } else {
                    return 'grey'
                }
            },
            track_fill_color () {
                if (this.home_slider_value > 0) {
                    return '#A9F92F'
                } else if (this.home_slider_value < 0) {
                    return 'red'
                } else {
                    return 'grey'
                }
            },
            home_factor () {
                if(this.home_slider_value > 0) {
                    let resp = this.home_slider_value / 100
                    // let resp = (this.home_slider_value / 100) ** 3 
                    return resp.toFixed(2)
                } else if (this.home_slider_value < 0) {
                    let resp = 100 + this.home_slider_value / 100 - 99
                    return resp.toFixed(2)
                } else {
                    let resp = 1.00
                    return resp.toFixed(2)
                }
            },
            home_slider_value () {
                this_slider_value = this.home_factor
            }
        },
        created() {

        }
    }
</script>

<style lang="sass">
    .card
        backdrop-filter: blur(15.2px)
        -webkit-backdrop-filter: blur(15.2px)

    .test
        .v-slider__track-container
            height: 15px !important

        .v-slider__track-fill
            border-radius: 45px 0px 0px 45px !important

        .v-slider__track-background
            border-radius: 0px 45px 45px 0px !important

        .v-slider__thumb
            height: 18px !important
            width: 18px !important
            background-color: #ccc !important
        .v-slider__thumb:hover
            height: 20px !important
            width: 20px !important
            background-color: #ccc !important
        .v-slider__thumb::before
            color: transparent !important

        .v-slider__thumb::after
            color: #ccc !important
            

        .v-slider__thumb-container
            max-height: 10px !important
            background-color: #ccc !important
</style>