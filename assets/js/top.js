/*
 *  top.js is setting up common rule.
 */
document.addEventListener('DOMContentLoaded', function () {

  // //mv　スライダー
  // top_mv_slider();

  //CASE　スライダー
  top_case_slider();

});



// スマートフォンで全画面表示
$(document).ready(function(){



  $('.case-other-slide').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 4,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-cirlce-next"></div>',
    nextArrow: '<div class="slick-cirlce-next"></div>',//矢印部分NextのHTMLを変更
    dots: false,//下部ドットナビゲーションの表示
    responsive: [
      {
      breakpoint: 1300,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 3,//スライドを画面に2枚見せる
        slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
      }
    },
    {
      breakpoint: 800,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow:2,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      }
    },
    {
      breakpoint: 768,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow:1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      }
    }
  ]
  });










  var hSize = $(window).height();
    $('.l-mv').height(hSize); // アドレスバーを除いたサイズを付与
  });
  $(window).resize(function(){ // ページをリサイズした時の処理
  var hSize = $(window).height();
    $('.l-mv').height(hSize); // アドレスバーを除いたサイズを付与
  });
  


/*===========================
slick slider
個別に設定
===========================*/

//MV

function top_mv_slider() {

  var $window = $(window);
  var $body = $('body');
  $('#mv-slider').slick({
    fade: true,
    arrows: false,
    autoplay:true,
    autoplaySpeed: 1700,
    speed :1000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
    var $container = $("#mv-slider");
    var $slider = $("#mv-slider");
    var $slide = $("#mv-slider .slide-bx");
    function Resize(){
    var winW = $window.width();
    var winH = $window.height();
      $container.width(winW);
      $container.height(winH);
      $slide.width(winW);
      $slide.height(winH);
      $slider.width(winW);
      $slider.height(winH);
    }
    $window.on("resize",Resize);
    Resize();

}


//TOP page

function top_case_slider() {

  var setting_pc = {
    autoplay: false,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false
  };
  
  var setting_sp = {
    slidesToShow: 1,
    initialSlide: 0
  };

  if ($(".ispage-top .case_list_wrap").length) {
    // スライダーに必要な最低枚数（3以上ならスライダー）
    let slider_wrap_work_min = 4;
    const slider_wrap_work_max = $(".case_list_wrap .case_list").length;
    // console.log(slider_wrap_work_min);
    // console.log(slider_wrap_work_max);
    if (matchMedia('(max-width: 768px)').matches) {
      // スマホの最低枚数（1以上ならスライダー）
      slider_wrap_work_min = 2;
    }
    if (slider_wrap_work_max > slider_wrap_work_min) {
      $(".case_list_wrap").addClass("has-mincount");
      setTimeout(sliderInit(".case_list_wrap.has-mincount", ".case_slider", setting_pc, true, setting_sp), 100);
    }

  }
}