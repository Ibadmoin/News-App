
function specificNews(type) {

  window.location.href = "./news.html?type=" + type;
  
}











// logout button with clered history//

function logout(){
  window.location.href='./index.html';
  window.history.replaceState({}, document.title, 'index.html')
}





// detching data

// fetch("https://api.newscatcherapi.com/v2/search?q=pakistan&page_size=12",{

// headers: {
//   'x-api-key': 'nk1yv1Cqs_ExZy4SBlgmiS_WmGsHazJVBxV9l9j3tTA'
//   }
// })
// .then(res=> res.json())
// .then(res=>{
//   let news = document.getElementById("news");
//   const articles = res.articles;
// for(var i = 0; i < articles.length; i++){
//   console.log(articles[i]);
//   const {media, title, author} = articles[i];
  
//   news.innerHTML += `
//   <div class="news-card" >
//               <div class="img-wrapper"><img src="${media}" alt=""></div>
//               <div class="title-wrapper">
//                   <p class="type" id="newsType">Sports</p>
//                   <p class="title" id="newsTitle">${title.slice(0,50)}...</p>
//               </div>
//               <div class="author-wrapper">
//                   <div class="news-details">
//                       <div class="author-img"><img src="../images/profiles/user.jpg" alt=""></div>
//                       <div class="author-name"><p id="authorName">muhammad ibad</p></div>
//                       <div class="publish-time"><p id="publishTime">-5 min ago</p></div>
//                   </div>
//                   <div class="news-share">
//                       <img src="../images/icons/save-instagram.png" alt="">
//                       <img src="../images/icons/share.png" alt="">
//                   </div>
//               </div>
//           </div>`
// }

// })
// .catch(err=>console.log(err))



// let getNews = () =>{
//   fetch('https://api.newscatcherapi.com/v2/search?q=Tesla&page_size=12',{
//     headers:{
//       'x-api-key': 'nk1yv1Cqs_ExZy4SBlgmiS_WmGsHazJVBxV9l9j3tTA'
//     }
//   })
//   .then(res=>res.json())
//   .then(res=>console.log(res))
//   .catch(err=>console.log(err))
// }

// getNews()





// test news api 

let trending = () =>{

  let apiKey = ['a19d5c0d64a94130aa919c8ddc0e936a','e775c7e6af4849069ea823d580bcd017','a19d5c0d64a94130aa919c8ddc0e936a','21e945dae29f4cbfb546270d2cc52d9f'];
  let randomApiKey = apiKey[Math.floor(Math.random()*apiKey.length)]
  fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${randomApiKey}`)
  .then(res=>res.json())
  .then(res=>{
    let trendingBox = document.getElementById('trendingNewsBox');
    // console.log(res);
    const articles = res.articles;
    for(var i = 0; i < 5;i++){
      // console.log(articles[i]);
      const {title, url, urlToImage, author} = articles[i];
      trendingBox.innerHTML +=`   <a class="trendingbox-anchor" href="${url}" target="_blank"> <div class="trend-news-box" >
      <div class="news-img-wrapper"><img src="${urlToImage?urlToImage:'./images/news.jpg'}" alt=""></div>
      <div class="news-title-wrapper">
          <p class="news-Type" id="treningNewsType">${author?author:'anonymous'}</p>
          <p class="news-Title" id="treningNewsTitle">${title.slice(0,20)}...</p>
      </div>
  </div></a>`
    }
<<<<<<< HEAD
  }
  
  function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 8);
    }
  }
  

  let btn = document.getElementById('btn');
  btn.addEventListener('click', toggle)
  var menuOpen = false;
  
  function toggle(){
      let menu = document.getElementById('menu');
      menu.classList.toggle("active")
      if (!menuOpen){
          btn.classList.add("open")
          menuOpen = true;
  
      }else{
          btn.classList.remove("open")
          menuOpen = false;
      }
  }
=======

  })
  .catch(err=>console.log(err))

}

// Obtain the user's location coordinates using geolocation




trending();
//  ==> news function to activate



let headline =()=>{
  let apiKey = ['a19d5c0d64a94130aa919c8ddc0e936a','e775c7e6af4849069ea823d580bcd017','a19d5c0d64a94130aa919c8ddc0e936a','21e945dae29f4cbfb546270d2cc52d9f'];
  let randomApiKey = apiKey[Math.floor(Math.random()*apiKey.length)]
  fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=4&apiKey=${randomApiKey}`)
  .then(res=>res.json())
  .then(res=>{
    
   let container = document.getElementById("contentWrapper");
console.log(res);

  let articles = res.articles;
  for(var i =0; i < articles.length;i++){
    console.log(articles[i]);
    const {title, url, urlToImage,author, publishedAt, description,source: { name }} = articles[i];
container.innerHTML += `<a class="newscard-anchor" href='${url}' target='_blank'> <div class="news-card">
<div class="img-wrapper"><img src="${urlToImage}" alt=""></div>
<div class="title-wrapper">
    <p class="type" id="newsType">${title.slice(0,30)}...</p>
    <p class="title" id="newsTitle">${description.slice(0,50)}...</p>
</div>
<div class="author-wrapper">
    <div class="news-details">
        <div class="author-img"><img src="./images/profiles/user.jpg" alt=""></div>
        <div class="author-name">
            <p id="authorName">${name?name:'anonymous'}</p>
        </div>
        <div class="publish-time">
            <p id="publishTime">${moment(publishedAt).fromNow()}</p>
        </div>
    </div>
    <div class="news-share">
        <img src="./images/icons/save-instagram.png" alt="">
        <img src="./images/icons/share.png" alt="">
    </div>
</div>
</div></a>

`
}})
  .catch(err=>console.log(err))



}

headline()




>>>>>>> db3ad6fdd63a03a0ee987ac4b71fa5558d8ff952
