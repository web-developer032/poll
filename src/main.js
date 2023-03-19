import App from "./App.svelte";
// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBggtZrxt-c4xIId2NY_1OVAbbQulJJxPs",
//     authDomain: "ninja-poll-aa2a5.firebaseapp.com",
//     projectId: "ninja-poll-aa2a5",
//     storageBucket: "ninja-poll-aa2a5.appspot.com",
//     messagingSenderId: "964014898131",
//     appId: "1:964014898131:web:f434c2e8745c81dbe98d26",
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

const app = new App({
    target: document.body,
    props: {
        name: "world",
    },
});

export default app;
