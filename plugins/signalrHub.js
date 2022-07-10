// import Vue from 'vue'
// import * as signalR from "@microsoft/signalr";

// export default ({ app, store }, inject) => {
//     const hub = new signalR.HubConnectionBuilder()
//         .withUrl("https://b2t-api-cmc-staging-5.flexprotect.org/trading/marketdata/info",{
//             skipNegotiation: true,
//             transport: signalR.HttpTransportType.WebSockets 
//         })
//         .build();

//     hub.start().then(function () {
//         connection.stream(channel, instrument)
//             .subscribe({
//                 next: (item) => {
//                 console.log(JSON.stringify(item));
//                 },
//                 error: (err) => {
//                     console.log(err);
//                 },
//         }); 
//     });

// };




// const { HubConnectionBuilder } = require("@microsoft/signalr"); // Package version must be >= 5.0.0

// const url = "https://host.name/trading/marketdata/info"; // Change [host.name] to your host name
// const instrument = "btc_usd";
// const channel = 'Book';


// let connection = new HubConnectionBuilder()
//     .withUrl(url)
//     .build();



