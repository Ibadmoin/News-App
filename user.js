

const loginbtn = document.getElementById("loginBtn");
loginbtn.addEventListener("click",()=>{
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
   if(loginEmail.value && loginPassword.value){
// login firebase here inside =>

// firebase work for login ends
   }
    else{
    const error= document.getElementById("error")
    error.innerHTML = "fields can't be empty!"
    error.classList.add('show')

    loginEmail.classList.add('err-border')
    loginPassword.classList.add('err-border')

    setTimeout(()=>{
        
        error.classList.remove('show');
    },5000);

   }
})



// signup page





// firebase login


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {  getDatabase, ref, set, onValue  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";



const firebaseConfig = {
  apiKey: "AIzaSyBYrQHZ-p5RSuUdrLJXdTBhE67DpK_9V_4",
  authDomain: "hisance-hasnain.firebaseapp.com",
  projectId: "hisance-hasnain",
  storageBucket: "hisance-hasnain.appspot.com",
  messagingSenderId: "769415045627",
  appId: "1:769415045627:web:22d7a6321383f47cf0eb5e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();



const auth = getAuth();

  let loginBtn = document.querySelector('#loginBtn')
  loginBtn.addEventListener('click', ()=>{

    event.preventDefault();
    let email = document.querySelector('#loginEmail').value;
    let pass = document.querySelector('#loginPassword').value

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log('user signin==>', user)
          onValue(ref(db, `users/${user.uid}`), (userinfo) => {
            const data = userinfo.val();
            if(data){
              window.location.href='./home.html'
              // => data idder chiye profile ka take page load hote hi hum progile wagera edited wali dhika de
              // -------------------------------------
            

                }
              
          });
       
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error==>", errorMessage)
     
        let email_input = document.getElementById('loginEmail');
        let pass_input = document.getElementById("loginPassword");

        loginEmail.classList.add('err-border')
        loginPassword.classList.add('err-border');
         error= document.getElementById("error")
        error.innerHTML = "Invalid Email or Password!"
        error.classList.add('show')
        console.log(email_input, pass_input);
      });

  })













// firebase  login