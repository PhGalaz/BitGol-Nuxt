<template>
        <v-col
            class="ma-0 pa-0 col-10 col-md-8 col-lg-4 align-center signup"
            style="overflow:hidden;border-radius:3px"
        >
            <v-row
                class="ma-0 mr-n2 pa-0"
            >
                <v-spacer></v-spacer>
                <v-btn
                    class="close-signup ma-0 pa-0"
                    icon
                    :ripple=false
                    @click="$emit('close-signup')"
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
                style="background-color:#212121;border-bottom:2px solid #00A99C;border-left:2px solid #00A99C;border-right:2px solid #00A99C"
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
                        style="width:100%;height:100%;background-color:rgba(15,155,190,0.35);border-radius: 3px 3px 0 0;border-top:2px solid #00A99C"
                        align="center"
                    >
                        <v-toolbar-title
                            class="ma-0 pa-0 text-center"
                            style="font-size:17px;min-width:100%;color:#aaa"
                            justify="center"
                        >
                            Already registered?
                            <span
                                class="signup-link"
                                style="font-weight:bold;color:white"
                                @click="$emit('signin-now')"
                            >
                                Sign In now!
                            </span>
                        </v-toolbar-title>
                    </v-row>
                </v-toolbar>
                <v-card-text
                    class="ma-0 pa-0"
                    justify="center"
                >
                    <v-toolbar-title
                        class="ma-0 mt-10 mb-5 pa-0"
                        align="center"
                        style="min-height:50px;line-height:22px;font-size:xx-large;color:#00A99C"
                    >
                        Sign Up
                        <p
                            class="ma-0 my-3 pa-0 text-center"
                            style="font-size:small;color:#aaa;white-space:normal;width:300px"
                        >
                            Open an account is not required to play, but to save and track your bets and reports.
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
                                color="#00A99C"
                                background-color="rgba(15,155,190,0.35)"
                                id="name"
                                name="name"
                                label="Name"
                                type="text"
                                v-model="name"
                                :rules="[rules.required, rules.email]"
                                style="height:40px"
                            ></v-text-field>
                            <v-text-field
                                class="ma-0 mb-5 pa-0"
                                solo
                                flat
                                color="#00A99C"
                                background-color="rgba(15,155,190,0.35)"
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                type="text"
                                v-model="lastName"
                                :rules="[rules.required, rules.email]"
                                style="height:40px"
                            ></v-text-field>
                            <v-text-field
                                class="ma-0 mb-5 pa-0"
                                solo
                                flat
                                color="#00A99C"
                                background-color="rgba(15,155,190,0.35)"
                                id="email"
                                name="email"
                                label="Email"
                                type="text"
                                v-model="email"
                                :rules="[rules.required, rules.email]"
                                style="height:40px"
                            ></v-text-field>
                            <v-text-field
                                class="ma-0 mb-5 pa-0"
                                solo
                                flat
                                color="#00A99C"
                                background-color="rgba(15,155,190,0.35)"
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                label="Password"
                                hint="At least 8 characters"
                                @click:append="show1 = !show1"
                                style="height:40px"
                            ></v-text-field>
                            <v-text-field
                                solo
                                flat
                                color="#00A99C"
                                background-color="rgba(15,155,190,0.35)"
                                v-model="confirmedPassword"
                                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show2 ? 'text' : 'password'"
                                name="input-10-1"
                                label="Confirm password"
                                hint="At least 8 characters"
                                @click:append="show2 = !show2"
                                style="height:40px"
                            ></v-text-field>
                        </v-form>
                    </v-row>
                    <v-row
                        class="ma-0 mt-5 mb-7 pa-0"
                        justify="center"
                    >
                        <v-row
                            class="ma-0 pa-0"
                            style="max-width:50%"
                            justify="center"
                        >
                            <v-checkbox
                                :ripple=false
                                v-model="checkbox"
                                class="ma-0 pa-0"
                                color="#00A99C"
                            ></v-checkbox>
                            <p
                                class="ma-0 pa-0"
                                justify="center"
                            >
                                I agree to the 
                                <span 
                                    class="terms-link forgot"
                                    style="font-weight:bold"
                                >Terms of Service</span>.
                            </p>
                        </v-row>
                    </v-row>
                    <v-card-actions
                        class="ma-0 pa-0 justify-center"
                        style="width:100%"
                    >
                        <v-btn 
                            class="ma-0 pa-0 mb-10"
                            height="40px"
                            variant="tonal"
                            color="#00A99C"
                            style="width:50%"
                            :disabled="!valid || !checkbox"
                        >
                            Sign Up
                        </v-btn>
                    </v-card-actions>
                </v-card-text>
            </v-card>
        </v-col>
</template>

<script>
    export default {
        data () {
            return {
                show1: false,
                show2: false,
                password: '',
                confirmedPassword: '',
                email: '',
                name: '',
                lastName: '',
                checkbox: false,
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
    .signup .v-text-field__details
        position: absolute !important
        display: block !important
        margin-top: 36px !important
        margin-left: -8px !important

    .signup .forgot:hover
        color: #00A99C !important
        cursor: pointer !important

    .signup .v-text-field input
        color: #00A99C !important
    
    .signup .v-messages__message
        color: rgba(15,155,190,0.35) !important

    .signup .v-text-field .v-icon::before
        color: #212121 !important

    .signup input::placeholder
        color: #00A99C !important

    .signup .v-label
        color: #212121 !important
        font-weight: bold !important

    .signup .v-btn--disabled
        background-color: #DDE5ED !important
        color: black !important

    .signup .v-btn__content
        color: #212121 !important
        font-weight: bold !important

    .signup-link:hover
        color: #00A99C !important
        cursor: pointer !important

    .signup .close-signup:hover
        cursor: pointer !important
        opacity: 1 !important
</style>