$('.mv-slide').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
});
$('.business-block-1').slick({
    arrows: false,
    slidesToShow: 1,
    arrows: true,
    fade: true,
    asNavFor: '.business-block-2',
});
$('.business-block-2').slick({
    arrows: false,
    slidesToShow: 2,
    arrows: false,
    asNavFor: '.business-block-1'
});
$('.people-content').slick({
    arrows: false,
    slidesToShow: 5,
    arrows: false
});
