
const firebaseConfig = {
    apiKey: "AIzaSyB9Q5zmQJvvsuuUNI8UKSCF5CaPUxFCtSY",
    authDomain: "uploop-de34a.firebaseapp.com",
    projectId: "uploop-de34a",
    storageBucket: "uploop-de34a.appspot.com",
    messagingSenderId: "204359880271",
    appId: "1:204359880271:web:1a0781702052ef4829243a",
    measurementId: "G-3BZQ1ZWPZN"
  };

  firebase.initializeApp(firebaseConfig);

  const upload = document.getElementById('upload')[0];
  

  window.addEventListener("load", function () {
    const fadeInDiv = document.getElementById("fadeInDiv");
    fadeInDiv.classList.remove("grid-item");
    fadeInDiv.classList.add("visible-div");
});
