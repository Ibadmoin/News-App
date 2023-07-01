
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCt16s58rH2Ch675XJeOhnxmJ9emMY6n90",
    authDomain: "hi-news-7813e.firebaseapp.com",
    projectId: "hi-news-7813e",
    storageBucket: "hi-news-7813e.appspot.com",
    messagingSenderId: "498648294507",
    appId: "1:498648294507:web:c0387fa33e9aaea1b7fd2e"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  let registerUser = document.getElementById("signUp");

  registerUser.addEventListener("click", function() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let userName = document.getElementById("userName");
  
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        const name = userName.value;
      

     return updateProfile(user,{
        displayName: name

     });

      })
      .then(() => {
        const user = auth.currentUser;
        console.log("user:", user);
        console.log("Registration successful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error:", errorMessage);
      });
  });
  


 

//   login page


let login = document.getElementById("login");
login.addEventListener("click",function(){
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user=>", user);
    // console.log("login successful");
    window.location.href="./home.html"

  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error=>", errorMessage);
  });
})




// home page;

  // Add an event listener or a function that triggers when the home page is loaded
