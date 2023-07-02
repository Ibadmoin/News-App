// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyCt16s58rH2Ch675XJeOhnxmJ9emMY6n90",
//   authDomain: "hi-news-7813e.firebaseapp.com",
//   projectId: "hi-news-7813e",
//   storageBucket: "hi-news-7813e.appspot.com",
//   messagingSenderId: "498648294507",
//   appId: "1:498648294507:web:c0387fa33e9aaea1b7fd2e"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore();
// const storage = getStorage();

// let registerUser = document.getElementById("signUp");
// registerUser.addEventListener("click", function () {
//   let email = document.getElementById("email");
//   let password = document.getElementById("password");
//   let userName = document.getElementById("userName");
//   let profileImage = document.getElementById("profileImage");

//   createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       const name = userName.value;
//       const image = profileImage.files[0];

//       return Promise.all([
//         updateProfile(user, {
//           displayName: name
//         }),
//         uploadImage(user.uid, image)
//       ]);
//     })
//     .then(([_, imageUrl]) => {
//       const user = auth.currentUser;
//       const name = userName.value;
//       const image = imageUrl;

//       return setDoc(doc(db, "users", user.uid), {
//         displayName: name,
//         profileImage: image
//       });
//     })
//     .then(() => {
//       const user = auth.currentUser;
//       console.log("user:", user);
//       console.log("Registration successful");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("Error:", errorMessage);
//     });
// });

// function uploadImage(userId, image) {
//   return new Promise((resolve, reject) => {
//     const storageRef = storage.ref();
//     const imageRef = storageRef.child(`profileImages/${userId}/${image.name}`);
//     const uploadTask = imageRef.put(image);

//     uploadTask.on(
//       "state_changed",
//       null,
//       (error) => reject(error),
//       () => {
//         uploadTask.snapshot.ref
//           .getDownloadURL()
//           .then((downloadURL) => resolve(downloadURL))
//           .catch((error) => reject(error));
//       }
//     );
//   });
// }


// //   login page


// let login = document.getElementById("login");
// login.addEventListener("click", function () {
//   let loginEmail = document.getElementById("loginEmail");
//   let loginPassword = document.getElementById("loginPassword");
//   signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       console.log("user=>", user);
//       // console.log("login successful");
//       window.location.href = "./home.html"


//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("error=>", errorMessage);
//     });
// })












// login page


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

function signUp(){
    window.location.href='./signup.html'
}