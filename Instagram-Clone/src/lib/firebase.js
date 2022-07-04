// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCmyIjPpRRN1WN2MhW1Hm4HM1_jaEnGZRA",
  authDomain: "instagram-attilacz22.firebaseapp.com",
  projectId: "instagram-attilacz22",
  storageBucket: "instagram-attilacz22.appspot.com",
  messagingSenderId: "190288816736",
  appId: "1:190288816736:web:f8c4c74f01d7942ba8b105",
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
