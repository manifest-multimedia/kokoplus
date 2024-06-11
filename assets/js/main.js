
// back to top 


   // back to top 
   $(" .backt_to_top").click(function(){
  
    $('html,body').animate({
      scrollTop:0,
  
    })
  })
  

$(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 50) {
      $(".header").addClass("nav-bg");
    } else {
      $(".header").removeClass("nav-bg");
    }

    var scrolling = $(this).scrollTop();
    if (scrolling > 20) {
      $(".backt_to_top ").fadeIn(500);
    } else {
      $(".backt_to_top ").fadeOut(500);
    }
  });


// mobile nav
const openBtn = document.querySelector("#nav-opn-btn");
const closeBtn = document.querySelector("#nav-cls-btn");
const offcanvasContainer = document.querySelector("#offcanvas-nav");

function openNav() {
  document.body.style.overflowY = "hidden";
  offcanvasContainer.classList.add("open");
}

function closeNav() {
  document.body.style.overflowY = "";
  offcanvasContainer.classList.remove("open");
}

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);






$(function(){

// video_thumb_slick 
$('.video_thumb_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1, 
    fade:true,  
    autoplay:false,
    autoplaySpeed:1500,
    speed: 1500,
    nextArrow:".arrow_left",
    prevArrow:".arrow_right",

});


// video_thumb_slick 
$('.news_slick').slick({
    slidesToShow: 5,
    slidesToScroll: 1, 
    autoplay:true,
    autoplaySpeed:1500,
    speed: 1500,
    nextArrow:".news_slick_left",
    prevArrow:".news_slick_right",
    responsive: [

      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
    ]

});

});






//  AOS js
$(window).on("scroll", function () {
    AOS.init();
  });