$(".mv-slide").slick({
  arrows: false,
  //   autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
});
$(".business-block-1").slick({
  slidesToShow: 1,
  arrows: true,
  fade: true,
  asNavFor: ".content-block-2-main",
});
$(".content-block-2-main").slick({
  arrows: false,
  slidesToShow: 2,
  asNavFor: ".business-block-1",
});
$(".people-content").slick({
  arrows: true,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
let arrowRight = document.querySelector(
  ".business .business-content .business-block-1 .slick-next"
);
let arrowLeft = document.querySelector(
  ".business .business-content .business-block-1 .slick-prev"
);
let header = document.querySelector("header");
arrowRight.innerHTML =
  '<div class="arrowRight"><span class="right"></span></div>';
arrowLeft.innerHTML = '<div class="arrowLeft"><span class="left"></span></div>';
let menuBurger = document.querySelector(".menu-burger .menu");
let drawer = document.querySelector(".drawer");
menuBurger.onclick = function () {
  menuBurger.classList.toggle("active");
  if (menuBurger.classList.contains("active")) {
    drawer.classList.add("expand");
  } else {
    drawer.classList.remove("expand");
  }
};
let peopleArrowLeft = document.querySelector(".people-content .slick-prev");
peopleArrowLeft.innerHTML = '<span class="people-arrow-left"></span>';
let peopleArrowRight = document.querySelector(".people-content .slick-next");
peopleArrowRight.innerHTML = '<span class="people-arrow-right"></span>';
window.onscroll = function () {
  let height = window.pageYOffset;
  if (height > 200) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  if (window.pageYOffset > window.innerHeight / 2) {
    document.querySelector("#backTop").style.opacity = 0.8;
    document.querySelector("#backTop").style.visibility = "visible";
  } else {
    document.querySelector("#backTop").style.opacity = 0;
    document.querySelector("#backTop").style.visibility = "hidden";
  }
};
$("#backTop").click(function (event) {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    1000,
    "swing"
  );
  return false;
});


