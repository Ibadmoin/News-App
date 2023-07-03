// js for news page





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


;

var page=1;


let getnews = (type) =>{

  const apiKey = ['a19d5c0d64a94130aa919c8ddc0e936a','e775c7e6af4849069ea823d580bcd017','a19d5c0d64a94130aa919c8ddc0e936a','21e945dae29f4cbfb546270d2cc52d9f'];
  const randomApiKey = apiKey[Math.floor(Math.random()*apiKey.length)]
  fetch(`https://newsapi.org/v2/everything?q=pakistan&pageSize=12&page=${page?page:1}&apiKey=${randomApiKey}`)
  .then(res=>res.json())
  .then(res=>{
    
    
      let newsCard = document.getElementById("news");
    let articles = res.articles;
    for(var i =0; i < articles.length;i++){
      console.log(articles[i]);

      const {title, url, urlToImage,author, publishedAt, description,source: { name }} = articles[i];
     newsCard.innerHTML += `      <a class="newscard-anchor" href="${url}" target="_blank" >  <div class="news-card" >
     <div class="img-wrapper"><img src="${urlToImage?urlToImage:'./images/news.jpg'}" alt=""></div>
     <div class="title-wrapper">
         <p class="type" id="newsType">${title.slice(0,50)}...</p>
         <p class="title" id="newsTitle">${description.slice(0,80)}...</p>
     </div>
     <div class="author-wrapper">
         <div class="news-details">
             <div class="author-img"><img src="../images/profiles/user.jpg" alt=""></div>
             <div class="author-name"><p id="authorName">${name?name:'/anonymous'}</p></div>
             <div class="publish-time"><p id="publishTime">${moment(publishedAt).fromNow()}</p></div>
         </div>
         <div class="news-share">
             <img src="../images/icons/save-instagram.png" alt="">
             <img src="../images/icons/share.png" alt="">
         </div>
     </div>
 </div></a>`
    ;

    }
  })
  .catch(err=>console.log(err));
}

getnews();


function load(){
  console.log('loaded');
  page++;
getnews();
}
