import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD132dM_3yyiUm8Ihz9NYh_2KOE1uT92js",
  authDomain: "portable-health-monitoring-kit.firebaseapp.com",
  databaseURL: "https://portable-health-monitoring-kit-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portable-health-monitoring-kit",
  storageBucket: "portable-health-monitoring-kit.appspot.com",
  messagingSenderId: "423556184685",
  appId: "1:423556184685:web:15d865156b49a4cae75d64",
  measurementId: "G-TNG2MWTGYY"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function updateData() {
  const pulse = Math.floor(Math.random() * (110 - 60 + 1)) + 60;  // 60–110 bpm
  const spo2  = Math.floor(Math.random() * (100 - 92 + 1)) + 92; // 92–100 %

  set(ref(db, "health"), {
    pulse: pulse,
    spo2: spo2
  })
  .then(() => {
    console.log(`✅ Updated → Pulse: ${pulse}, SpO₂: ${spo2}`);
  })
  .catch((err) => console.error("❌ Error:", err));
}

setInterval(updateData, 2000);
