

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
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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