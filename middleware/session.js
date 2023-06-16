// middleware/session.js
export default function ({ app, redirect }) {
  console.log(app.$cookies);
    // if (!app.$cookies.get('connect.sid')) {
    //   // Redirect to a login page or handle unauthorized access
    // //   return redirect('/login');
    // }
}