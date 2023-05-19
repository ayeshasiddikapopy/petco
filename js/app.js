//counter plugin slick
$('.counter').counterUp({
    delay: 10,
    time: 10000
  });
  $('.serv_slick').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: 0,
    cellspacing:0,
    prevArrow:".previous",
    nextArrow:".nexts",
    autoplay:true
  });

//venobox plugin faq
  new VenoBox({
    selector: ".my-video-links"
});

// brand slick plugin
$('.brand_item').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: 0,
  centerPadding: '60px',
  prevArrow:".previous",
  nextArrow:".nexts",
  autoplay:true
});
$('.test_slick').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: 0,
  centerPadding: '60px',
  prevArrow:".previous",
  nextArrow:".nexts",
  autoplay:true
});




