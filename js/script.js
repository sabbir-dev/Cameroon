$(function(){
     //-----sticky navbar start-----
     $(window).scroll(function(){
        var top=$(this).scrollTop()
        if(top>250){
          $(".navbar").addClass("sticky-menu")
        }
        else{
          $(".navbar").removeClass("sticky-menu")
        }
        if(top>300){
          $(".back-to-top").fadeIn("300")
        }
        else{
          $(".back-to-top").fadeOut("300")
        }
      })
      $(".back-to-top").click(function(){
        $("html,body").animate({scrollTop:0},500)
      })
    
    //-----sticky navbar End-----
     //------Search bar part start------
  $('.nav-search').on('click', function () {
    $('.search-bar').addClass('search-bar-show');
  });
  $('.search-cross').on('click', function () {
    $('.search-bar').removeClass('search-bar-show');
  });
    //--------Search bar part end------

    //--------testimonial slider part end------
    $('.testimonial-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      infinite: true,
      arrows:true,
      prevArrow: ".t-left",
      nextArrow: ".t-right",
      centerMode: true,
      centerPadding: '0px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            centerMode: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
            centerPadding: '50px',
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
            centerPadding: '50px',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: '50px',
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
      
    });

    //--------testimonial slider part end------

    //--------News slider part start------
    $('.news-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      infinite: true,
      arrows:true,
      prevArrow: ".news-left",
      nextArrow: ".news-right",
      centerMode: true,
      centerPadding: '0px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
            centerPadding: '50px',
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
            centerPadding: '50px',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: '50px',
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
      
    });
    //--------News slider part end------

    //--------scroll spy part start------
    var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 100
  }, 1000);
});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionhead = $(this.hash).offset().top - 400;
    if (scrollTop >= sectionhead) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});

    //-------scroll spy  part end------
})
