// firebase.js

// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔴 REPLACE with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBec36JV4N1DuN3Bjej7fi8WCmYnLktvi4",
  authDomain: "vincent-portfolio-b57ab.firebaseapp.com",
  projectId: "vincent-portfolio-b57ab",
  storageBucket: "vincent-portfolio-b57ab.firebasestorage.app",
  messagingSenderId: "588525984574",
  appId: "1:588525984574:web:fc79b96982dfe41442ea6f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle Form Submission
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return;
  }

  try {
    await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
      timestamp: serverTimestamp()
    });

    alert("Message sent successfully ✅");
    form.reset();

  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Error sending message ❌");
  }
});
