
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

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


// js for news page
function specificNews(type){
    window.location.href="./news.html";
    console.log("hello" + type);
    // type can be use to show specific serach result on single page of html
}


window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");
  
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  }
  
  function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 8);
    }
  }

//   

function getNews(){
  var news = document.getElementById("news");
for (let i = 0; i < 12; i++) {
  news.innerHTML += `
  <div class="news-card" >
              <div class="img-wrapper"><img src="../images/cars.webp" alt=""></div>
              <div class="title-wrapper">
                  <p class="type" id="newsType">Sports</p>
                  <p class="title" id="newsTitle">News cars which will blow your mind 2024</p>
              </div>
              <div class="author-wrapper">
                  <div class="news-details">
                      <div class="author-img"><img src="../images/profiles/user.jpg" alt=""></div>
                      <div class="author-name"><p id="authorName">muhammad ibad</p></div>
                      <div class="publish-time"><p id="publishTime">-5 min ago</p></div>
                  </div>
                  <div class="news-share">
                      <img src="../images/icons/save-instagram.png" alt="">
                      <img src="../images/icons/share.png" alt="">
                  </div>
              </div>
          </div>`
  
}
}

getNews();



function load(){
  console.log('loaded');
  getNews();
}



