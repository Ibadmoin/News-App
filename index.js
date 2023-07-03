
function specificNews(type) {

  window.location.href = "./news.html?type=" + type;
  
}

let newsType; 
//=> gives news type depending on URL type.

function otherfun() {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');
  newsType = type;
  console.log("type =>", type);
}



otherfun()
console.log(newsType);


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
    console.log(res);
    const articles = res.articles;
    for(var i = 0; i < 5;i++){
      console.log(articles[i]);
      const {title, url, urlToImage, author} = articles[i];
      trendingBox.innerHTML +=`   <a class="trendingbox-anchor" href="${url}" target="_blank"> <div class="trend-news-box" >
      <div class="news-img-wrapper"><img src="${urlToImage?urlToImage:'./images/news.jpg'}" alt=""></div>
      <div class="news-title-wrapper">
          <p class="news-Type" id="treningNewsType">${author?author:'anonymous'}</p>
          <p class="news-Title" id="treningNewsTitle">${title.slice(0,20)}...</p>
      </div>
  </div></a>`
    }

  })
  .catch(err=>console.log(err))

}


// trending();
//  ==> news function to activate





