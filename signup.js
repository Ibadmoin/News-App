
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getStorage, ref as sref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYrQHZ-p5RSuUdrLJXdTBhE67DpK_9V_4",
  authDomain: "hisance-hasnain.firebaseapp.com",
  projectId: "hisance-hasnain",
  storageBucket: "hisance-hasnain.appspot.com",
  messagingSenderId: "769415045627",
  appId: "1:769415045627:web:22d7a6321383f47cf0eb5e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getDatabase();
const storage = getStorage();
var fileItem;
var fileName;

let imgInput = document.querySelector('#profileImg')
imgInput.addEventListener('change', (event) => {
  fileItem = event.target.files[0]
  fileName = fileItem.name;
});

let signupSubmitBtn = document.querySelector('#signUpBtn');
signupSubmitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let email = document.querySelector('#email');
  let userName = document.querySelector('#userName');
  let pass = document.querySelector('#password');

  createUserWithEmailAndPassword(auth, email.value, pass.value, fileName)
    .then(async (userCredential) => {
      const user = userCredential.user;
      alert("Successful SignUp");
      // console.log('user==>', user);

      await uploadHandleError(fileName, fileItem);

      const downloadURL = await getDownloadURL(sref(storage, 'images/' + fileName));

      set(ref(db, `users/${user.uid}`), {
        email: email.value,
        userName: userName.value,
        pass: pass.value,
        profileURL: downloadURL
      });

      onValue(ref(db, `users/${user.uid}`), (userinfo) => {
        const data = userinfo.val();
        console.log(data);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorCode, errorMessage);
    });
});

function uploadHandleError(fileName, fileItem) {
  const metadata = {
    contentType: 'image/jpeg'
  };

  const storageRef = sref(storage, 'images/' + fileName);
  const uploadTask = uploadBytesResumable(storageRef, fileItem, metadata);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            break;
          case 'storage/canceled':
            break;
          case 'storage/unknown':
            break;
        }
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log('File available at', downloadURL);
            resolve(downloadURL);
          })
          .catch((error) => {
            reject(error);
          });
      }
    );
  });
}
