// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyD4AlPiUDAf64v1qpS1gPB8gRuvUQwyt0g",
 authDomain: "image-server-node-multi-user.firebaseapp.com",
 projectId: "image-server-node-multi-user",
 storageBucket: "image-server-node-multi-user.appspot.com",
 messagingSenderId: "884609992039",
 appId: "1:884609992039:web:718c9031b5d0ce78c3dbc2",
};

// Initialize Firebase
exports.firebase = initializeApp(firebaseConfig);
