<template>
    <v-row
        class="ma-0 pa-0 signin"
        style="background-color:rgba(0,0,0,.9);backdrop-filter:blur(5px)"
        justify="center"
        align="center"
    >
        <v-col
            class="ma-0 pa-0 col-10 col-md-8 col-lg-4 align-center"
            style="overflow:hidden;border-radius:3px"
        >
            <v-row
                class="ma-0 mr-n1 pa-0"
            >
                <v-spacer></v-spacer>
                <v-btn
                    class="close-signin ma-0 pa-0"
                    icon
                    ripple="false"
                    @click="$emit('close-signin')"
                    style="opacity:0.7"
                >
                    <v-icon
                        color="#fff"
                    >mdi-close</v-icon>
                </v-btn>
            </v-row>
            <v-card
                justify="center"
                class="elevation-12"
                style="background-color:#212121;border-bottom:2px solid #9ACD32;border-left:2px solid #9ACD32;border-right:2px solid #9ACD32"
            >
                <v-toolbar
                    flat
                    class="ma-0 pa-0"
                    dense
                    color="transparent"
                    justify="center"
                >
                    <v-row
                        class="ma-0 pa-0"
                        style="width:100%;height:100%;background-color:rgba(154,205,50,0.25);border-radius: 3px 3px 0 0;border-top:2px solid #9ACD32"
                        align="center"
                    >
                        <v-toolbar-title
                            class="ma-0 pa-0 text-center"
                            style="font-size:17px;min-width:100%;color:grey"
                            justify="center"
                        >
                            Not registered?
                            <spam
                                class="signup-link"
                                style="font-weight:bold;color:#aaa"
                            >
                                Sign Up now!
                            </spam>
                        </v-toolbar-title>
                    </v-row>
                </v-toolbar>
                <v-card-text
                    class="ma-0 pa-0"
                >
                    <v-toolbar-title
                        class="ma-0 mt-10 mb-5 pa-0"
                        align="center"
                        style="min-height:50px;line-height:22px;font-size:xx-large;color:#9ACD32"
                    >
                        Sign In
                        <p
                            class="ma-0 my-3 pa-0 text-center"
                            style="font-size:small;color:grey;white-space:normal;width:300px"
                        >
                            Signing in is not required to play, but to save your bets and stats.
                        </p>
                    </v-toolbar-title>
                    <v-row
                        class="ma-0 mb-1 pa-0"
                        justify="center"
                        align="center"
                    >
                        <v-form
                            v-model="valid"
                            class="ma-0 pa-0"
                            style="width:50%"
                            ref="signupForm"
                            eager
                            align="center"
                        >
                            <v-text-field
                                class="ma-0 mb-5 pa-0"
                                solo
                                flat
                                color="#9ACD32"
                                background-color="rgba(154,205,50,0.25)"
                                id="email"
                                name="email"
                                label="Email"
                                type="text"
                                v-model="email"
                                :rules="[rules.required, rules.email]"
                                style="height:40px"
                            ></v-text-field>
                            <v-text-field
                                solo
                                flat
                                color="#9ACD32"
                                background-color="rgba(154,205,50,0.25)"
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                label="Password"
                                hint="At least 8 characters"
                                @click:append="show1 = !show1"
                                label-placement="bottom"
                                style="height:32px"
                            ></v-text-field>
                        </v-form>
                    </v-row>
                    <v-row
                        class="ma-0 pa-0"
                        justify="center"
                        align="center"
                        style="height:70px;color:grey"
                    >
                        <p
                            class="ma-0 pa-0 forgot"
                        >
                            Forgot your password?
                        </p>
                    </v-row>
                    <v-card-actions
                        class="ma-0 pa-0 justify-center"
                        style="width:100%"
                    >
                        <v-btn 
                            class="ma-0 pa-0 mb-10"
                            height="40px"
                            variant="tonal"
                            color="#9ACD32" 
                            @click="loginHandler"
                            style="width:50%"
                            :disabled="!valid"
                        >
                            Sign In
                        </v-btn>
                    </v-card-actions>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data () {
            return {
                show1: false,
                show2: true,
                password: '',
                email: '',
                rules: {
                    required: value => !!value || 'Required',
                    min: v => v.length >= 8 || 'Min 8 characters',
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Invalid e-mail'
                    }
                },
                valid: false
            }
        }
    }
</script>

<style lang="sass">
    .v-text-field__details
        position: absolute !important
        display: block !important
        margin-top: 36px !important
        margin-left: -8px !important

    .forgot:hover
        color: #fff !important
        cursor: pointer !important

    .signin .v-text-field input
        color: #9ACD32 !important
    
    .signin .v-messages__message
        color: rgba(154,205,50,0.25) !important

    .signin .v-text-field .v-icon::before
        color: #212121 !important

    .signin input::placeholder
        color: #9ACD32 !important

    .signin .v-label
        color: #212121 !important
        font-weight: bold !important

    .signin .v-btn--disabled
        background-color: #DDE5ED !important
        color: black !important

    .signin .v-btn__content
        color: #212121 !important
        font-weight: bold !important

    .signup-link:hover
        color: #fff !important
        cursor: pointer !important

    .close-signin:hover
        cursor: pointer !important
        opacity: 1 !important
</style>