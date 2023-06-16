export default ($axios) => {
    return {
        login: async (data) => {
            const login = await $axios.$post('users/login', data);
            console.log(login);
            return login;
        },
        currentUser: async () => {
            return await $axios.$get('users/current')
        }
    }
}
