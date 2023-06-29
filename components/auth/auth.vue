<template>
    <v-row
        class="ma-0 pa-0"
        style="background-color:rgba(0,0,0,.9);backdrop-filter:blur(5px)"
        justify="center"
        align="center"
    >
        <v-slide-x-reverse-transition>
            <AuthLogin
                v-if="signin === true"
                @close-signin="$emit('close-signin')"
                @signup-now="$emit('signup-now')"
                eager
            ></AuthLogin>
            <AuthSignup
                v-else-if="signup === true"
                @close-signup="$emit('close-signup')"
                @signin-now="$emit('signin-now')"
            ></AuthSignup>
        </v-slide-x-reverse-transition>
    </v-row>
</template>

<script>
    export default {
        props: {
            signin: {
                type: Boolean,
                default: () => ({}),
            },
            signup: {
                type: Boolean,
                default: () => ({}),
            }
        },
        beforeDestroy () {
            this.signin = false;
            this.signup = false;
            console.log('destroyed');
        }
    }
</script>

<style lang="sass">
</style>