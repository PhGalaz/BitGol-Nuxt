export default ($axios) => {
    return {
        login: async (data) => {
            const login = await $axios.$post('users/login', data);
            console.log(login);
            return login;
        },
        currentUser: async () => {
            const current = await $axios.get('users/current-user');
            console.log(current);
            return current;
        }
    }
}
