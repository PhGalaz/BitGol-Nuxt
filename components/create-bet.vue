<template>
    <v-row 
        class="ma-0 pa-0 card" 
        style="width:100%;border-radius:3px;background-color:#272727"
        
    >   
        <v-row
            class="ma-0 pa-0"
            style="font-size:medium"
            
        >
            <p style="font-size:large">
                Create the bet you would like to take<br>
                <span
                    style="color:grey;font-size:medium"
                >
                    At least one factor must be
                    <span 
                        class="pl-2 pr-1" 
                        style="color:#9ACD32;font-size:large;font-size:small;vertical-align: middle !important;background-color:rgba(154,205,50,0.25);border-radius:3px"
                    >
                        greater than 1.00 
                    </span>
                </span>
                <span
                    class="ml-1"
                    style="color:grey;font-size:medium"
                >
                    At least one factor must be
                    <span 
                        class="pl-2 pr-1 mr-4" 
                        style="color:#FC2C3B;font-size:large;font-size:small;vertical-align: middle !important;background-color:rgba(252,44,59,0.25);border-radius:3px"
                    >
                        equal to 0.00&nbsp;
                    </span>
                </span>
            </p>
        </v-row>
        <!--  -->
        <v-row
            class="ma-0 mb-5 pa-0 col-12"
            justify="center"
        >
            <v-row 
                class="mt-3 mb-3 pa-0"
                style="display:block;border-radius:3px;background-color:#212121" 
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
                        style="max-width:140px;font-weight:bold;letter-spacing:1px;font-size:medium"
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
                <v-row
                    class="ma-0 pa-0 mt-4 col-12"
                >
                    <v-row 
                        class="mx-2 pa-0"
                        style="display:block;border-radius:3px;background-color:#272727;width:100%;height:50px;opacity:.75" 
                        justify="center" 
                        align="center"
                    >
                        <v-row 
                            class="ma-0 pa-0 slaider"
                            style="min-height:50px;max-height:50px;scale:0.75"
                            align="center"
                            justify="center"
                        >
                            <v-row 
                                class="ma-0 mx-5 my-2 pa-0"
                                style="max-width:40px;color:grey;font-weight:bold;letter-spacing:1px;font-size:medium"
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
                                class="ma-0 mx-5 my-2 pa-0"
                                style="max-width:40px"
                                justify="center" 
                                align="center"
                            >
                            
                            </v-row>
                        </v-row>
                    </v-row>
                    <v-row 
                        class="mx-2 mt-5 pa-0"
                        style="display:block;border-radius:3px;background-color:#272727;width:100%;height:50px;opacity:.75" 
                        justify="center" 
                        align="center"
                    >
                        <v-row 
                            class="ma-0 pa-0 slaider"
                            style="min-height:50px;max-height:50px;scale:0.75"
                            align="center"
                            justify="center"
                        >
                            <v-row 
                                class="ma-0 mx-5 my-2 pa-0"
                                style="max-width:40px;color:grey;font-weight:bold;letter-spacing:1px;font-size:medium"
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
                                class="ma-0 mx-5 my-2 pa-0"
                                style="max-width:40px;color:grey;font-weight:bold;letter-spacing:1px;font-size:medium"
                                justify="center" 
                                align="center"
                            >
                                DRAW
                            </v-row>
                        </v-row>
                    </v-row>
                    <v-row 
                        class="mx-2 mt-5 mb-2 pa-0"
                        style="display:block;border-radius:3px;background-color:#272727;width:100%;height:50px;opacity:.75" 
                        justify="center" 
                        align="center"
                    >
                        <v-row 
                            class="ma-0 pa-0 slaider"
                            style="min-height:50px;max-height:50px;scale:0.75"
                            align="center"
                            justify="center"
                        >
                            <v-row 
                                class="ma-0 mx-5 my-2 pa-0"
                                style="max-width:40px;color:grey;font-weight:bold;letter-spacing:1px;font-size:medium"
                                justify="center" 
                                align="center"
                            >
                            </v-row>
                            <v-slider
                                class="ma-0 pa-0"
                                v-model="away_slider_value" 
                                min="-1000" 
                                max="1000" 
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
                                class="ma-0 mx-5 my-2 pa-0"
                                style="max-width:40px;color:grey;font-weight:bold;letter-spacing:1px;font-size:medium"
                                justify="center" 
                                align="center"
                            >
                                AWAY
                            </v-row>
                        </v-row>
                    </v-row>
                    <v-row 
                        class="mx-2 mt-1 mb-3 pa-0"
                        style="border-radius:3px;background-color:#303030;width:100%;height:50px;filter: grayscale(0%)" 
                        justify="center" 
                        align="center"
                    >
                        <v-row 
                            class="ma-0 pa-0"
                            style="min-height:50px;max-height:50px;scale:0.75"
                            align="center"
                            justify="center"
                        >
                            <v-row
                                class="ma-0 pa-0"
                                style=""
                                
                            >
                                <p 
                                    class="ma-0 mt-n2 pa-0"
                                    style="font-size:21px;color:grey;font-weight:bold"
                                >
                                    Offer for your rival<br>
                                </p>
                            </v-row>
                            <v-row 
                                class="ma-0 mt-n2 pa-0"
                                style="max-width:35px"
                                justify="center" 
                                align="center"
                            >
                                <v-img 
                                    contain 
                                    class="ma-0 pa-0" 
                                    max-height="45" 
                                    max-width="45"
                                    :src="fixture.homeTeam[0].logo"
                                ></v-img>
                            </v-row>
                            <v-row
                                class="ma-0 mt-2"
                                style="font-weight:bold"
                                justify="center"
                            >
                                <v-row class="ma-0 mb-4 pa-0 factor_case_rival"
                                    :style="factor_color_rival(this.home_factor)"
                                    justify="center" 
                                    align="center"
                                >
                                    {{ valid ? inverse[0].toFixed(2) : '-' }}
                                </v-row>
                                <v-row class="ma-0 mb-4 mx-2 pa-0 factor_case_rival"
                                    :style="factor_color_rival(this.draw_factor)"
                                    justify="center" 
                                    align="center"
                                >
                                    {{ valid ? inverse[1].toFixed(2) : '-' }}
                                </v-row>
                                <v-row class="ma-0 mb-4 pa-0 factor_case_rival"
                                    :style="factor_color_rival(this.away_factor)"
                                    justify="center" 
                                    align="center"
                                >
                                    {{ valid ? inverse[2].toFixed(2) : '-' }}
                                </v-row>
                            </v-row>
                            <v-row 
                                class="ma-0 mt-n2 pa-0"
                                style="max-width:35px"
                                justify="center" 
                                align="center"
                            >
                                <v-img 
                                    contain 
                                    class="ma-0 pa-0" 
                                    max-height="45" 
                                    max-width="45"
                                    :src="fixture.awayTeam[0].logo"
                                ></v-img>
                            </v-row>
                        </v-row>
                    </v-row>
                </v-row>
            </v-row>
        </v-row>
        <v-row
            class="ma-0 mt-1 mb-3 pa-0"
            style="width:100%"
            
        >
            <p 
                class="ma-0 pa-0"
                style="font-size:large"
                align="center"
            >
                Enter an amount to simulate bet's results<br>
            </p>
            <v-text-field
                class="ma-0 ml-5 mt-n1 pa-0 amount"
                v-model="amount"
                solo
                color="#9ACD32"
                prepend-inner-icon="mdi-bitcoin"
                style="z-index:100;max-width:250px;position:relative"
                clearable
                type="number"
                :disabled="!valid"
            ></v-text-field>
            <v-checkbox
                :ripple="false"
                v-model="checkbox"
                class="ma-0 ml-n1 mt-n5 pa-0 no-hover"
                color="#9ACD32"
                style="width:100%"
                :disabled="!valid"
            >
                <template v-slot:label>
                    <span id="checkboxLabel">Use it as the actual bet's amount</span>
                </template>
            </v-checkbox>
        </v-row>
        <v-row 
            class="mt-5 pa-0"
            v-if="valid ? amount ? true : false : false"
            style="border-radius:3px;letter-spacing:1px;font-size:medium;background-color:#212121" 
            justify="center" 
            align="center"
        >
            <v-row 
                class="ma-0 mx-2 pa-0"
                style="border-radius:3px;width:100%;height:35px;font-weight:bold;letter-spacing:0px;font-size:medium;color:grey" 
                justify="center" 
                align="center"
            >
                <v-row
                    class="ma-0 pa-0"
                    style="max-width:80px;height:100%;border-radius:3px;font-size:small"
                    justify="center"
                    align="center"
                >
                    RESULT
                </v-row>
                <v-row
                class="ma-0 pa-0"
                    style="height:100%;border-radius:3px;font-size:small"
                    justify="center"
                    align="center"
                > 
                    YOUR PRIZE
                </v-row>
                <v-row
                    class="ma-0 pa-0"
                    style="height:100%;border-radius:3px;font-size:small"
                    justify="center"
                    align="center"
                > 
                    RIVAL PRIZE
                </v-row>  
                <v-row
                    class="ma-0 pa-0"
                    style="max-width:100px;height:100%;border-radius:3px;font-size:small"
                    justify="center"
                    align="center"
                >
                    <p
                        class="ma-0 pa-0 text-center"
                        style="min-width:100%"
                    >
                            ODDS
                    </p>
                </v-row>
            </v-row>
            <v-row 
                class="ma-0 pa-0"
                style="border-radius:3px;background-color:#212121" 
                align="center"
                justify="center"
            >
                <v-row 
                    class="ma-0 mx-2 mb-2 pa-0"
                    style="position:relative;border-radius:3px;width:100%;height:35px;letter-spacing:0px;font-size:medium" 
                    justify="center" 
                    align="center"
                >
                    <v-row
                        class="ma-0 pa-0"
                        style="position:absolute;border-radius:3px;width:100%;height:100%;background-color:rgba(255,255,255,0.02)"
                    >

                    </v-row>
                    <v-row
                        class="ma-0 pa-0"
                        style="position:relative;max-width:80px;height:100%;border-radius:3px"
                        justify="center"
                        align="center"
                    >
                        <v-img 
                            contain 
                            class="ma-0 pa-0" 
                            max-height="25" 
                            max-width="25"
                            :src="fixture.homeTeam[0].logo"
                        ></v-img>
                    </v-row>
                    <v-row
                        class="ma-0 pa-0"
                        style="font-size:medium"
                    >

                        <v-row
                            class="ma-0 pa-0"
                            style="width:50%;position:relative;height:100%"
                            :style="Number(simulation.home) == Number(amount) ? '' : Number(simulation.home) > Number(amount) ? 'color:#9ACD32' : 'color:#FC2C3B'"
                            justify="center"
                            align="center"
                        > 
                            <p
                                class="ma-0 pa-0"
                            >
                                {{ valid ? simulation.home : '-' }}
                            </p>
                        </v-row>
                        <v-row
                            class="ma-0 pa-0"
                            style="width:50%;height:100%"
                            justify="center"
                            align="center"
                        > 
                            <p
                                class="ma-0 pa-0"
                            >
                                {{ valid ? simulation.home_rival : '-' }}
                            </p>
                        </v-row>  
                    </v-row>
                    <v-row
                        class="ma-0 pa-0"
                        style="max-width:100px;height:100%;border-radius:3px"
                        justify="center"
                        align="center"
                    >
                        <p
                            class="ma-0 pa-0 text-center"
                            style="min-width:100%"
                        >
                                35.2
                        </p>
                    </v-row>
                </v-row>
                <v-row 
                    class="ma-0 mx-2 mb-2 pa-0"
                    style="position:relative;border-radius:3px;width:100%;height:35px;letter-spacing:0px;font-size:medium" 
                    justify="center" 
                    align="center"
                >
                    <v-row
                        class="ma-0 pa-0"
                        style="position:absolute;border-radius:3px;width:100%;height:100%;background-color:rgba(255,255,255,0.02)"
                    >

                    </v-row>
                    <v-row
                        class="ma-0 pa-0"
                        style="position:relative;max-width:80px;height:100%;border-radius:3px"
                        justify="center"
                        align="center"
                    >
                        <v-row
                            class="ma-0 pa-0"
                            style="max-width:80px;height:100%;border-radius:3px;font-size:small;font-weight:bold"
                            justify="center"
                            align="center"
                        >
                            DRAW
                        </v-row>
                    </v-row>
                    <v-row
                        class="ma-0 pa-0"
                        style="font-size:medium"
                    >

                        <v-row
                            class="ma-0 pa-0"
                            style="width:50%;position:relative;height:100%"
                            :style="Number(simulation.draw) == Number(amount) ? '' : Number(simulation.draw) > Number(amount) ? 'color:#9ACD32' : 'color:#FC2C3B'"
                            justify="center"
                            align="center"
                        > 
                            <v-row
                                class="ma-0 pa-0"
                                style="position:absolute;width:100%;height:100%"
                            >

                            </v-row>
                            <p
                                class="ma-0 pa-0"
                            >
                                {{ valid ? simulation.draw : '-' }}
                            </p>
                        </v-row>
                        <v-row
                            class="ma-0 pa-0"
                            style="width:50%;height:100%"
                            justify="center"
                            align="center"
                        > 
                            <p
                                class="ma-0 pa-0"
                            >
                                {{ valid ? simulation.draw_rival : '-' }}
                            </p>
                        </v-row>  
                    </v-row>
                    <v-row
                        class="ma-0 pa-0"
                        style="max-width:100px;height:100%;border-radius:3px"
                        justify="center"
                        align="center"
                    >
                        <p
                            class="ma-0 pa-0 text-center"
                            style="min-width:100%"
                        >
                                35.2
                        </p>
                    </v-row>
                </v-row>
                <v-row 
                    class="ma-0 mx-2 mb-2 pa-0"
                    style="position:relative;border-radius:3px;width:100%;height:35px;letter-spacing:0px;font-size:medium" 
                    justify="center" 
                    align="center"
                >
                    <v-row
                        class="ma-0 pa-0"
                        style="position:absolute;border-radius:3px;width:100%;height:100%;background-color:rgba(255,255,255,0.02)"
                    >

                    </v-row>
                    <v-row
                        class="ma-0 pa-0"
                        style="position:relative;max-width:80px;height:100%;border-radius:3px"
                        justify="center"
                        align="center"
                    >
                        <v-img 
                            contain 
                            class="ma-0 pa-0" 
                            max-height="25" 
                            max-width="25"
                            :src="fixture.awayTeam[0].logo"
                        ></v-img>
                    </v-row>
                    <v-row
                        class="ma-0 pa-0"
                        style="font-size:medium"
                    >

                        <v-row
                            class="ma-0 pa-0"
                            style="width:50%;position:relative;height:100%"
                            :style="Number(simulation.away) == Number(amount) ? '' : Number(simulation.away) > Number(amount) ? 'color:#9ACD32' : 'color:#FC2C3B'"
                            justify="center"
                            align="center"
                        > 
                            <v-row
                                class="ma-0 pa-0"
                                style="position:absolute;width:100%;height:100%"
                            >

                            </v-row>
                            <p
                                class="ma-0 pa-0"
                            >
                                {{ valid ? simulation.away : '-' }}
                            </p>
                        </v-row>
                        <v-row
                            class="ma-0 pa-0"
                            style="width:50%;height:100%"
                            justify="center"
                            align="center"
                        > 
                            <p
                                class="ma-0 pa-0"
                            >
                                {{ valid ? simulation.away_rival : '-' }}
                            </p>
                        </v-row>  
                    </v-row>
                    <v-row
                        class="ma-0 pa-0"
                        style="max-width:100px;height:100%;border-radius:3px"
                        justify="center"
                        align="center"
                    >
                        <p
                            class="ma-0 pa-0 text-center"
                            style="min-width:100%"
                        >
                                35.2
                        </p>
                    </v-row>
                </v-row>
            </v-row>
        </v-row>
        <v-dialog
            v-model="confirmation"
            fullscreen
            persistent
            scrollable
        >
            <createConfirmation/>
        </v-dialog>
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
                away_slider_value: 0,
                amount: null,
                checkbox: false,
                confirmation: false
            }
        },
        computed: {
            home_track_color () {
                if (this.home_slider_value > 0) {
                    return '#212121'
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
                    return '#212121'
                } else {
                    return '#595A59'
                }
            },
            draw_track_color () {
                if (this.draw_slider_value > 0) {
                    return '#212121'
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
                    return '#212121'
                } else {
                    return '#595A59'
                }
            },
            away_track_color () {
                if (this.away_slider_value > 0) {
                    return '#212121'
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
                    return '#212121'
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
            },
            valid () {
                const set = [this.home_slider_value, this.draw_slider_value, this.away_slider_value]
                const zero = set.some((item) => {
                    return item === -1000
                })
                const positive = set.some((item) => {
                    return item > 0
                })
                if (zero && positive) {
                    return true
                }
                return false
            },
            inverse () {
                return this.$getInverse(parseFloat(this.home_factor), parseFloat(this.draw_factor), parseFloat(this.away_factor))
            },
            simulation () {
                if (this.valid && this.amount) {
                    return this.$getSimulation(
                        [parseFloat(this.home_factor), parseFloat(this.draw_factor), parseFloat(this.away_factor)],
                        [parseFloat(this.inverse[0]), parseFloat(this.inverse[1]), parseFloat(this.inverse[2])],
                        this.amount
                    )
                }
            }
        },
        watch: {
            valid (val) {
                this.$store.commit('setvalid', val);
            },
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
            factor_color_rival (pos) {
                if (this.valid) {
                    if (pos > 1) {
                        return 'color:#FC2C3B'
                    } else if (pos < 1) {
                        return 'color:#9ACD32'
                    } else {
                        return 'color:grey'
                    }
                }
                return 'color:grey'
            },
            getFlooredFixed(v, d) {
                return (Math.floor(v * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d);
            }
        },
        created() {
            this.$nuxt.$on('open-bet', () => this.confirmation = true)
        },
        beforeDestroy () {
            console.log('before destroyed');
        }
    }
</script>

<style lang="sass">
    .card
        backdrop-filter: blur(2px)
        -webkit-backdrop-filter: blur(2px)

    .slaider
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
        background-color: #272727
        font-size: x-large
        height: 35px
    
    .factor_case_rival
        max-width: 140px
        min-width: 140px
        border-radius: 3px
        background-color: #222
        font-size: 20px
        height: 35px

    #checkboxLabel
        color: grey
        font-size: medium

    .amount .v-input__slot
        background: #171717 !important

    #input-135
        margin-left: 10px !important

    .amount input::-webkit-outer-spin-button
        -webkit-appearance: none !important
    .amount input::-webkit-inner-spin-button
        -webkit-appearance: none !important
    
    .amount .v-text-field__slot
        margin-left: 10px !important
        margin-top: 2px !important

    .amount .v-icon.mdi-close
        color: #CCC !important
        size: 10 !important

    .mdi-bitcoin
        transform: rotate(-30deg) !important
        color: #9ACD32 !important
        border-radius: 45px !important

    .discabled
        background-color: #212121 !important
        color: #212121 !important

    .cabled
        background-color: #333 !important
        color: #9ACD32 !important
        :hover
            color: white !important
            background-color: #9ACD32 !important

    .cancel
        background-color: #333 !important
        :hover
            background-color: rgba(252,200,59,0.25) !important
</style>