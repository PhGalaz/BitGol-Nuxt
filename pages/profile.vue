<template>
  <div>
    <button v-if="!hasSession" @click="signIn">Sign In</button>
    <button v-else @click="logout">Logout</button>
    <br>
    <button @click="currentUser">Current User</button>
  </div>
</template>

<script>
  export default {
    computed: {
      hasSession() {
        // Add your session check logic here
        return this.$cookies !== undefined;
      }
    },
    methods: {
      async signIn() {
        const data = {
          email: "felipe@galaz.de",
          password: "123.Abc!"
        };
        const headers = await this.$login(data);
      },
      async currentUser() {
        const user = await this.$currentUser();
      },
      logout() {
        // Logout logic
      }
    }
  }
</script>
