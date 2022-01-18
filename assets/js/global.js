"use strict";

/*
 *  global.js is setting up common rule.
 */
document.addEventListener('DOMContentLoaded', function () {
  /* objectfit IE  */
  objectFitImages();
  /* picture */

  document.createElement("picture");
  clickScroll();
  spmenu();
  foot_toggle();
  isInView();
  headchang();
  headcurrent();
});
/*===============================================================
共通タブ切り替え
parent => 切り替えスイッチとコンテンツの親
ankerlink => タブ切り替え後にスクロールアニメーションする場所
===============================================================*/

function cmntabInit(parent, ankerlink) {
  var cmntab_parent = parent;
  var cmntab_switch = cmntab_parent + " > .cmntab_switch";
  var cmntab_switch_item = cmntab_parent + " > .cmntab_switch .cmntab_switch_item";
  var cmntab_main = cmntab_parent + " > .cmntab_main";
  var cmntab_main_item = cmntab_parent + " > .cmntab_main .cmntab_main_item";
  $(cmntab_switch_item).on("click", function () {
    var cmntabIndex = $(this).data("tabindex");
    $(cmntab_switch_item).removeClass("is-active");
    $(this).addClass("is-active");
    $(this).parents(cmntab_switch).next(cmntab_main).children(cmntab_main_item).removeClass("is-active");
    $(this).parents(cmntab_switch).next(cmntab_main).children(cmntab_main_item).eq(cmntabIndex).addClass("is-active");

    if (ankerlink) {
      if ($(this).hasClass("disable-anker")) {
        return false;
      }

      var speed = 500;
      var position = $(ankerlink).offset().top;
      var headerHeight = 0;

      if (window.matchMedia("(max-width: 768px)").matches) {
        headerHeight = $("#header").height();
      }

      $("html, body").animate({
        scrollTop: position - headerHeight
      }, speed, "swing");
      return false;
    }
  });
}
/*===============================================================
タブ切り替え
スイッチ上下連動
下のスイッチにクラス「dir-prev」を設定する
.cmntab_switch_item.dir-prev
parent => 切り替えスイッチとコンテンツの親
ankerlink => タブ切り替え後にスクロールアニメーションする場所
===============================================================*/


function cmntabLinkageInit(parent, ankerlink) {
  var cmntab_parent = parent;
  var cmntab_switch = cmntab_parent + " > .cmntab_switch";
  var cmntab_switch_item = cmntab_parent + " > .cmntab_switch .cmntab_switch_item";
  var cmntab_main = cmntab_parent + " > .cmntab_main";
  var cmntab_main_item = cmntab_parent + " > .cmntab_main .cmntab_main_item";
  $(cmntab_switch_item).on("click", function () {
    var cmntabIndex = $(this).data("tabindex"); // console.log(cmntabIndex);

    $(cmntab_switch).each(function (index, elm) {
      $(elm).find(".cmntab_switch_item").removeClass("is-active");
      $(elm).find(".cmntab_switch_item").eq(cmntabIndex).addClass("is-active");
    });

    if ($(this).hasClass("dir-prev")) {
      $(this).parents(cmntab_switch).prev(cmntab_main).children(cmntab_main_item).removeClass("is-active");
      $(this).parents(cmntab_switch).prev(cmntab_main).children(cmntab_main_item).eq(cmntabIndex).addClass("is-active");
    }

    $(this).parents(cmntab_switch).next(cmntab_main).children(cmntab_main_item).removeClass("is-active");
    $(this).parents(cmntab_switch).next(cmntab_main).children(cmntab_main_item).eq(cmntabIndex).addClass("is-active");

    if (ankerlink) {
      if ($(this).hasClass("disable-anker")) {
        return false;
      }

      var speed = 500;
      var position = $(ankerlink).offset().top;
      var headerHeight = 0;

      if (window.matchMedia("(max-width: 768px)").matches) {
        headerHeight = $("#header").height();
      }

      $("html, body").animate({
        scrollTop: position - headerHeight
      }, speed, "swing");
      return false;
    }
  });
}
/*===============================================================
タブの中のタブ切り替え
parent => 切り替えスイッチとコンテンツの親
ankerlink => タブ切り替え後にスクロールアニメーションする場所
===============================================================*/


function cmntab_inr_Init(parent, ankerlink) {
  var cmntab_parent = parent;
  var cmntab_switch = cmntab_parent + " > .cmntab_inr_switch";
  var cmntab_switch_item = cmntab_parent + " > .cmntab_inr_switch .cmntab_inr_switch_item";
  var cmntab_main = cmntab_parent + " > .cmntab_inr_main";
  var cmntab_main_item = cmntab_parent + " > .cmntab_inr_main .cmntab_inr_main_item";
  $(cmntab_switch_item).on("click", function () {
    var cmntabIndex = $(this).data("tabindex");
    $(cmntab_switch_item).removeClass("is-active");
    $(this).addClass("is-active");
    $(this).parents(cmntab_switch).next(cmntab_main).children(cmntab_main_item).removeClass("is-active");
    $(this).parents(cmntab_switch).next(cmntab_main).children(cmntab_main_item).eq(cmntabIndex).addClass("is-active");

    if (ankerlink) {
      if ($(this).hasClass("disable-anker")) {
        return false;
      }

      var speed = 500;
      var position = $(ankerlink).offset().top;
      var headerHeight = 0;

      if (window.matchMedia("(max-width: 768px)").matches) {
        headerHeight = $("#header").height();
      }

      $("html, body").animate({
        scrollTop: position - headerHeight
      }, speed, "swing");
      return false;
    }
  });
}
/*===================================================
パラメータで判断してタブ切り替え
tabswitch => タブのスイッチ
tabmain => タブの本体
※tabswitch,tabmainは配列で指定する
tabWrap => スクロールアニメーションのするブロック名
========================================================*/


function tabUrlSearch(tabswitch, tabmain, tabWrap) {
  var urlSearch = location.search;
  var tabindex = urlSearch.split("itemnum_").pop() - 1;

  if (urlSearch) {
    tabswitch.forEach(function (elm) {
      $(elm).removeClass("is-active");
      $(elm).eq(tabindex).addClass("is-active");
    });
    tabmain.forEach(function (elm) {
      $(elm).removeClass("is-active");
      console.log($(elm).eq(tabindex));
      $(elm).eq(tabindex).addClass("is-active");
    });
    var speed = 500;
    var position = $(tabWrap).offset().top;
    var headerHeight = 0;
    var cmnfixnaviHeight = 0;

    if (window.matchMedia("(max-width: 768px)").matches) {
      headerHeight = $("#header").height();
    }

    $("html, body").animate({
      scrollTop: position - (headerHeight + cmnfixnaviHeight)
    }, speed, "swing");
  }

  return false;
}
/*===================================================
簡易版matchHeight セレクターは詳細に書く
例 ： matchHeight("#consultation .sec2_tab_list > li");
========================================================*/


function matchHeight(target) {
  var hList = [];
  $(target).each(function (index, elm) {
    var h = $(elm).outerHeight();
    hList[index] = h;
  });
  var hListMax = Math.max.apply(null, hList);
  $(target).each(function (index, elm) {
    $(elm).css("height", hListMax + "px");
  });
}
/*━━━━━━━━━━━━━━━━━━━━━━━━━
ページ内スクロール
━━━━━━━━━━━━━━━━━━━━━━━━━━━*/


function clickScroll() {
  $('a[href^="#"]').on("click", function () {
    var speed = 500;
    var href = $(this).attr("href");

    if ($(this).hasClass("disable-transition")) {
      return;
    }

    if ($(this).attr('[data-lity]')) {
      return;
    }

    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var headerHeight = 0;

    if (window.matchMedia("(max-width: 768px)").matches) {
      headerHeight = $("header").height();
    }

    $("html, body").animate({
      scrollTop: position - headerHeight
    }, speed, "swing");
    return false;
  });
}
/*━━━━━━━━━━━━━━━━━━━━━━━━━
ページトップ ボタン
━━━━━━━━━━━━━━━━━━━━━━━━━━━*/


var pagetop = $('.btnPageTop');
pagetop.hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 800) {
    //800pxスクロールしたら表示
    pagetop.fadeIn();
  } else {
    pagetop.fadeOut();
  }
});
pagetop.click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500); //0.5秒かけてトップへ移動

  return false;
});
/*━━━━━━━━━━━━━━━━━━━━━━━━━
スクロールアニメ
━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

function isInView() {
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
}
/*━━━━━━━━━━━━━━━━━━━━━━━━━
スクロールでヘッダー固定・変化
━━━━━━━━━━━━━━━━━━━━━━━━━━━*/


$(function () {
  var $win = $(window);
  var $main = $('main');
  var $nav = $('.header_wrap'); // var navHeight = $nav.outerHeight();

  var navPos = $nav.offset().top;
  var fixedClass = 'is-fixed';
  $win.on('load scroll', function () {
    var value = $(this).scrollTop();

    if (value > navPos) {
      // header_wrapにstandardがある時だけ固定処理を走らせる
      if ($nav.hasClass("standard")) {
        $nav.addClass(fixedClass);
        $main.css('margin-top', 0);
      }
    } else {
      // header_wrapにstandardがある時だけ固定処理を走らせる
      if ($nav.hasClass("standard")) {
        $nav.removeClass(fixedClass);
        $main.css('margin-top', '0');
      }
    }
  });
});
/*━━━━━━━━━━━━━━━━━━━━━━━━━
ヘッダー固定を幅が足りない時に横にスクロール
━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

$(window).on("scroll", function () {
  $(".header_wrap").css("left", -$(window).scrollLeft());
});
/*━━━━━━━━━━━━━━━━━━━━━━━━━
PCグロナビ hoverで表示変更
━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

function headchang() {
  $('.megattl').mouseover(function (e) {
    $('.header_wrap').addClass("is-change");
  });
  $('.megattl').mouseout(function (e) {
    $('.header_wrap').removeClass("is-change");
  });
}

;
/*━━━━━━━━━━━━━━━━━━━━━━━━━
PCグロナビ 下層ページcurrent
━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

function headcurrent() {
  if (location.pathname != "/") {
    $('.global-nav_pc > li > a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('current');
  } // else $('.global-nav_pc > li > a:eq(0)').addClass('active');

}

;
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SP menu
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

function spmenu() {
  var header = $('#header');
  $('.nav-close').on("click", function () {
    header.toggleClass('open');

    if ($(header).hasClass("open")) {
      bodyFixedOn();
    } else {
      bodyFixedOff();
    }
  });
  $(".global-nav_sp_main_line.has-submenu").on("click", function () {
    $(this).toggleClass('is-open');
    $(this).next(".global-nav_sp_main_submenu").slideToggle(300);
  });
}

function foot_toggle() {
  $('.toggle_title').click(function () {
    $(this).toggleClass('selected');
    $(this).next().slideToggle();
  });
} // slickスライダーの元

/*==========================
slick slider
Class like
==========================*/


function sliderInit(blockName, sliderName, settingPC) {
  var responsive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var settingSP = arguments.length > 4 ? arguments[4] : undefined;
  var slider = blockName + " " + sliderName; //var dots = blockName + " .cmn-slider_modul_dots";

  var prev = blockName + " .cmn-slider_modul_arw.is-prev";
  var next = blockName + " .cmn-slider_modul_arw.is-next";
  var breakpoint_sp = 767; //settingPC.appendDots = $(dots);
  // console.log($(dots));

  $(slider).not('.slick-initialized').slick(settingPC);
  $(prev).on('click', function () {
    $(slider).slick('slickPrev');
  });
  $(next).on('click', function () {
    $(slider).slick('slickNext');
  });

  if (responsive == true) {
    // console.log("OK");
    $(slider).slick('slickSetOption', 'responsive', [{
      breakpoint: breakpoint_sp,
      settings: settingSP
    }], true);
    $(window).on("resize", function () {
      $(slider).slick('slickSetOption', 'responsive', [{
        breakpoint: breakpoint_sp,
        settings: settingSP
      }], true);
    });
  }
}