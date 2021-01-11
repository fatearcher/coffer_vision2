/* slider
------------------------------------*/
$(".slider-img").slick({
  fade: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: "0px",
  variableWidth: false,
  draggable: false,
  accessibility: false,
  pauseOnHover: false,
  swipe: false,
  swipeToSlide: false,
  touchMove: false,
  pauseOnFocus: false,
});
$(".slider-wide").slick({
  fade: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: "0px",
  variableWidth: false,
  draggable: false,
  accessibility: false,
  pauseOnHover: false,
  swipe: false,
  swipeToSlide: false,
  touchMove: false,
  pauseOnFocus: false,
});
$(".slider-about").slick({
  fade: true,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  arrows: false,
  dots: false,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: "0px",
  variableWidth: false,
  draggable: false,
  accessibility: false,
  pauseOnHover: false,
  swipe: false,
  swipeToSlide: false,
  touchMove: false,
  pauseOnFocus: false,
});

/* ready
---------------------------------------------------------------------------*/
if ($("body#top").length) {
  let top_scroll_sw = 0;
  let top_close_sw = 0;
  scrollTop = $(window).scrollTop();
  $("body").addClass("noscroll").css("top", 0);

  if ($("body.pc").length) {
    $("#top-mask .logo").velocity(
      { opacity: 1 },
      { duration: 600, delay: 400, easing: "linear" }
    );
    $("#visual .mask").velocity(
      { width: 0 },
      {
        display: "none",
        duration: 750,
        delay: 1200,
        easing: "easeInOutQuart",
        complete: function () {
          $("#top-mask").velocity(
            { width: 0 },
            {
              display: "none",
              duration: 750,
              delay: 200,
              easing: "easeInOutQuart",
              complete: function () {
                let top_height = $(window).height() - 130;
                $(".top-main").velocity(
                  { height: top_height },
                  {
                    duration: 640,
                    delay: 0,
                    easing: "easeInOutQuart",
                    complete: function () {
                      $("body").removeClass("noscroll");
                      $(window).scrollTop(0);
                    },
                  }
                );
                $("header, header .btn-nav").addClass("active");
                $.Velocity.hook($("header .inner"), "opacity", 0);
                $("header").velocity(
                  { left: 0 },
                  {
                    duration: 640,
                    delay: 0,
                    easing: "easeInOutQuart",
                    complete: function () {
                      setTimeout(function () {
                        if (top_scroll_sw == 0) {
                          top_close_sw = 1;
                          headerClose();
                        }
                      }, 200);
                    },
                  }
                );
                $("header .inner").velocity(
                  { left: 40, opacity: 1 },
                  {
                    duration: 640,
                    delay: 200,
                    easing: "easeInOutQuart",
                    complete: function () {
                      if ($(".special-day").length) {
                        $(".special-day").css("width", day_width);
                        $(".special-day em, .special-day strong").css(
                          "width",
                          "0"
                        );
                        $(".special-day").css("opacity", "1");
                        storage.setItem("active", "off");
                        $(".special-day").removeClass("active");
                        $(".special-day em").velocity(
                          { width: day_width },
                          { duration: 400, delay: 400, easing: "easeOutQuart" }
                        );
                        $(".special-day strong").velocity(
                          { width: day_width2 },
                          { duration: 400, delay: 500, easing: "easeOutQuart" }
                        );
                        $(".special-day em i").velocity(
                          { width: 0 },
                          {
                            duration: 700,
                            delay: 700,
                            easing: "easeInOutQuint",
                          }
                        );
                        $(".special-day strong i").velocity(
                          { width: 0 },
                          {
                            duration: 700,
                            delay: 800,
                            easing: "easeInOutQuint",
                            complete: function () {
                              storage.setItem("active", "on");
                            },
                          }
                        );
                        $.Velocity.hook($(".special-day-close"), "scaleX", 0.1);
                        $.Velocity.hook($(".special-day-close"), "scaleY", 0.1);
                        $(".special-day-close").velocity(
                          { opacity: 1, scaleX: 1.3, scaleY: 1.3 },
                          { duration: 150, delay: 1200, easing: "linear" }
                        );
                        $(".special-day-close").velocity(
                          { scaleX: 1, scaleY: 1 },
                          { duration: 600, easing: "spring" }
                        );
                      }
                    },
                  }
                );
                $(".sec-copy h2").velocity(
                  { opacity: 1 },
                  { duration: 600, delay: 300, easing: "linear" }
                );
              },
            }
          );
        },
      }
    );
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (top_scroll_sw == 0 && top_close_sw == 0 && scroll > 0) {
        top_scroll_sw = 1;
        headerClose();
      }
    });
  } else {
    // SP
    windowHeight = $(window).height();
    $(
      "#visual, #visual .bg, #visual .slider-img, #visual .slider-img .slick-list, #visual .slider-img .inner, .top-main"
    ).css("height", windowHeight);
    $("#top-mask .logo").velocity(
      { opacity: 1 },
      { duration: 400, delay: 600, easing: "linear" }
    );
    $("#top-mask").velocity(
      { width: 0 },
      {
        display: "none",
        duration: 1000,
        delay: 1400,
        easing: "easeInOutQuint",
        complete: function () {
          let top_height = $(window).height() - 100;
          $(".top-main").velocity(
            { width: "100%" },
            {
              duration: 800,
              delay: 200,
              easing: "easeInOutQuart",
              complete: function () {
                $("#visual").velocity(
                  { opacity: 0 },
                  { display: "none", duration: 10 }
                );
                $(".sec-copy h2").velocity(
                  { opacity: 1 },
                  { duration: 600, delay: 200, easing: "linear" }
                );
                $(".top-main").velocity(
                  { height: top_height },
                  {
                    duration: 600,
                    delay: 0,
                    easing: "easeInOutQuart",
                    complete: function () {
                      $(".top-logo-white").css("position", "absolute");
                      $("body").removeClass("noscroll");
                      $(window).scrollTop(0);
                    },
                  }
                );
                if ($(".special-day").length) {
                  $(".special-day").css("width", day_width);
                  $(".special-day em, .special-day strong").css("width", "0");
                  $(".special-day").css("opacity", "1");
                  storage.setItem("active", "off");
                  $(".special-day").removeClass("active");
                  $(".top-logo-white").velocity(
                    { opacity: 0 },
                    {
                      display: "none",
                      duration: 200,
                      delay: 0,
                      easing: "linear",
                    }
                  );
                  $(".special-day em").velocity(
                    { width: day_width },
                    { duration: 400, delay: 200, easing: "easeOutQuart" }
                  );
                  $(".special-day strong").velocity(
                    { width: day_width2 },
                    { duration: 400, delay: 300, easing: "easeOutQuart" }
                  );
                  $(".special-day em i").velocity(
                    { width: 0 },
                    { duration: 700, delay: 500, easing: "easeInOutQuint" }
                  );
                  $(".special-day strong i").velocity(
                    { width: 0 },
                    {
                      duration: 700,
                      delay: 600,
                      easing: "easeInOutQuint",
                      complete: function () {
                        storage.setItem("active", "on");
                      },
                    }
                  );
                  $.Velocity.hook($(".special-day-close"), "scaleX", 0.1);
                  $.Velocity.hook($(".special-day-close"), "scaleY", 0.1);
                  $(".special-day-close").velocity(
                    { opacity: 1, scaleX: 1.3, scaleY: 1.3 },
                    { duration: 150, delay: 1000, easing: "linear" }
                  );
                  $(".special-day-close").velocity(
                    { scaleX: 1, scaleY: 1 },
                    { duration: 600, easing: "spring" }
                  );
                }
              },
            }
          );
        },
      }
    );
  }
} else if ($(".slider-img").length) {
  $(".slider-img .inner")
    .eq(0)
    .imagesLoaded({ background: true }, function () {
      $.Velocity.hook($("#main-inner"), "translateY", 10);
      $(".slider-img").velocity(
        { opacity: 1 },
        { duration: 800, delay: 0, easing: "linear" }
      );

      if ($("#visual .fix-nav-wrap").length) {
        $.Velocity.hook($("#visual .fix-nav-wrap"), "translateY", 20);
        $("#visual .fix-nav-wrap").velocity(
          { opacity: 1, translateY: 0 },
          { duration: 1200, delay: 600, easing: "easeInOutQuart" }
        );
      }

      if ($(".slider-img .slick-dots").length) {
        $.Velocity.hook($(".slider-img .slick-dots"), "marginLeft", 0);
        $(".slider-img .slick-dots").velocity(
          { opacity: 1 },
          { duration: 200, delay: 800, easing: "easeOutCubic" }
        );
      }
      $("#main-inner").velocity(
        { opacity: 1, translateY: 0 },
        {
          duration: 800,
          delay: 0,
          easing: "easeOutCubic",
          complete: function () {
            $(this).css("transform", "none");
          },
        }
      );

      if ($(".btn-chart-fix .btn-chart").length) {
        if ($("body.pc").length) {
          $.Velocity.hook($(".btn-chart-fix .btn-chart"), "translateY", 40);
          $(".btn-chart-fix .btn-chart").velocity(
            { opacity: 1, translateY: 0 },
            { duration: 600, delay: 300, easing: "easeInOutQuart" }
          );
        } else {
          $.Velocity.hook($(".btn-chart-fix"), "translateY", 10);
          $(".btn-chart-fix").velocity(
            { opacity: 1, translateY: 0 },
            { duration: 800, delay: 0, easing: "easeOutCubic" }
          );
        }
      }

      if ($(".special-day").length) {
        if ($(".special-day").hasClass("active")) {
          $(".special-day").velocity(
            { opacity: 1 },
            { duration: 400, delay: 0, easing: "easeOutCubic" }
          );
        } else {
          $(".special-day em").velocity(
            { width: day_width },
            { duration: 400, delay: 600, easing: "easeOutQuart" }
          );
          $(".special-day strong").velocity(
            { width: day_width2 },
            { duration: 400, delay: 700, easing: "easeOutQuart" }
          );
          $(".special-day em i").velocity(
            { width: 0 },
            { duration: 700, delay: 900, easing: "easeInOutQuint" }
          );
          $(".special-day strong i").velocity(
            { width: 0 },
            {
              duration: 700,
              delay: 1000,
              easing: "easeInOutQuint",
              complete: function () {
                storage.setItem("active", "on");
              },
            }
          );
          $.Velocity.hook($(".special-day-close"), "scaleX", 0.1);
          $.Velocity.hook($(".special-day-close"), "scaleY", 0.1);
          $(".special-day-close").velocity(
            { opacity: 1, scaleX: 1.3, scaleY: 1.3 },
            { duration: 150, delay: 1400, easing: "linear" }
          );
          $(".special-day-close").velocity(
            { scaleX: 1, scaleY: 1 },
            { duration: 600, easing: "spring" }
          );
        }
      }
    });
} else {
  $("#main-inner").velocity(
    { opacity: 1, translateY: 0 },
    { duration: 800, delay: 400, easing: "easeOutCubic" }
  );
}

/* window load
---------------------------------------------------------------------------*/
function pageLoad() {
  $(".slider-img").slick("slickPlay");

  /* .question
	------------------------------------*/
  if ($("body#question").length) {
    let $dir = location.href.split("/");
    let $pageID = $dir[3];
    if (true === $pageID.includes("#")) {
      let val_after = $pageID.slice($pageID.indexOf("#") + 0);
      $(val_after).find("dt").addClass("active");
      $(val_after).find("dd").velocity("slideDown", {
        duration: 500,
        delay: 500,
        easing: "easeInOutQuart",
      });
    }
  }
}

/* nav 导航条
---------------------------------------------------------------------------*/
let header_width;

function headerClose() {
  header_width = $("header").width() - 70;
  $("header, .btn-nav").removeClass("active");
  $("header").velocity(
    { left: -header_width },
    {
      duration: 600,
      delay: 0,
      easing: "easeInOutQuint",
      complete: function () {
        $("header").removeClass("zindex");
        if ($(".slider-img .slick-dots").length) {
          $.Velocity.hook($(".slider-img .slick-dots"), "marginLeft", 0);
          $(".slider-img .slick-dots").velocity(
            { opacity: 1 },
            {
              display: "block",
              duration: 200,
              delay: 0,
              easing: "easeOutCubic",
            }
          );
        }
      },
    }
  );
}

function headerOpen() {
  $("header").addClass("active");
  $.Velocity.hook($("header .inner"), "left", "-20px");
  $.Velocity.hook($("header .inner"), "opacity", 0);
  $("header").velocity(
    { left: 0 },
    { duration: 600, delay: 0, easing: "easeInOutQuint" }
  );
  $("header .inner").velocity(
    { left: 40, opacity: 1 },
    { duration: 800, delay: 0, easing: "easeInOutQuint" }
  );
}

if ($("body.pc").length) {
  $("header").click(function (e) {
    if (
      !$(e.target).closest(".sns").length &&
      !$(e.target).closest(".slick-dots").length &&
      !$("header").hasClass("active")
    ) {
      if ($(".slider-img .slick-dots").length) {
        $.Velocity.hook($(".slider-img .slick-dots"), "marginLeft", 0);
        $(".slider-img .slick-dots").velocity(
          { opacity: 0, marginLeft: 110 },
          { display: "none", duration: 300, delay: 0, easing: "easeInCubic" }
        );
      }
      $("header").addClass("zindex");
      $(".btn-nav").toggleClass("active");
      if ($(".btn-nav.active").length) {
        headerOpen();
      } else {
        headerClose();
      }
    } else if ($(e.target).closest(".btn-nav").length) {
      if ($(".slider-img .slick-dots").length) {
        $.Velocity.hook($(".slider-img .slick-dots"), "marginLeft", 0);
        $(".slider-img .slick-dots").velocity(
          { opacity: 0, marginLeft: 110 },
          { display: "none", duration: 300, delay: 0, easing: "easeInCubic" }
        );
      }
      $("header").addClass("zindex");
      $(".btn-nav").toggleClass("active");
      if ($(".btn-nav.active").length) {
        headerOpen();
      } else {
        headerClose();
      }
    }
  });
}

/* nav-sp
---------------------------------------------------------------------------*/
function headerCloseSp() {
  $("header, .btn-nav").removeClass("active");
  $("header").velocity(
    { left: "-75vw" },
    { duration: 600, delay: 0, easing: "easeInOutQuint" }
  );
  $(".header-bg").velocity(
    { opacity: 0 },
    { display: "none", duration: 300, delay: 200, easing: "linear" }
  );
  $("body").removeClass("noscroll");
  $(window).scrollTop(scrollTop);
}

if ($("body.sp").length) {
  $(".btn-nav").velocity(
    { right: 0 },
    { duration: 600, delay: 0, easing: "easeInOutQuart" }
  );
  $(".btn-nav").click(function () {
    $(".btn-nav").toggleClass("active");
    if ($(".btn-nav.active").length) {
      $("header").addClass("active");
      $.Velocity.hook($("header .inner"), "translateX", -40);
      $.Velocity.hook($("header .inner"), "opacity", 0);
      $(".header-bg").velocity(
        { opacity: 1 },
        { display: "block", duration: 200, delay: 0, easing: "linear" }
      );
      $("header").velocity(
        { left: 0 },
        { duration: 600, delay: 0, easing: "easeInOutQuint" }
      );
      $("header .inner").velocity(
        { translateX: 0, opacity: 1 },
        { duration: 800, delay: 0, easing: "easeInOutQuint" }
      );
      scrollTop = $(window).scrollTop();
      $("body")
        .addClass("noscroll")
        .css("top", -scrollTop + "px");
    } else {
      headerCloseSp();
    }
  });
  $(document).on("click touchstart", ".header-bg", function (e) {
    headerCloseSp();
  });
}

$("html").bind("touchend", function () {
  setTimeout(function () {
    let zoom = document.body.clientWidth / window.innerWidth;
    if (1 < zoom) {
      $(".btn-nav").css("display", "none");
    } else {
      $(".btn-nav").css("display", "block");
    }
  }, 100);
});
window.onpageshow = function (event) {
  if (event.persisted) {
    window.location.reload();
  }
};

/* .btn-ac地图
---------------------------------------------------------------------------*/
$(".btn-ac").on("click", function () {
  if ($(this).next().css("display") == "none") {
    $(this)
      .next()
      .velocity("slideDown", { duration: 300, easing: "easeInOutCubic" });
    $(this).addClass("active");
  } else {
    $(this)
      .next()
      .velocity("slideUp", { duration: 300, easing: "easeInOutCubic" });
    $(this).removeClass("active");
  }
});

$(".btn-ac-nav").on("click", function () {
  if ($(this).next().css("display") == "none") {
    $(this)
      .next()
      .velocity("slideDown", { duration: 300, easing: "easeInOutCubic" });
    $(this).addClass("active");
    $(this).next().addClass("active");
    storage.setItem("gnav_active", "on");
  } else {
    $(this)
      .next()
      .velocity("slideUp", { duration: 300, easing: "easeInOutCubic" });
    $(this).removeClass("active");
    // 		$(this).next().removeClass('active');
    storage.setItem("gnav_active", "off");
  }
});

/* .modal-common地图
---------------------------------------------------------------------------*/
let modal_common_sw = 0;
let modal_common_close = 0;

function modalCommonClose() {
  $(".modal-common-close").velocity(
    { opacity: 0 },
    { display: "none", duration: 300, delay: 0, easing: "linear" }
  );
  $(".modal-common-inner").velocity(
    { opacity: 0, marginTop: 20 },
    { display: "none", duration: 300, delay: 0, easing: "easeInCubic" }
  );
  $(".modal-common").velocity(
    { opacity: 0 },
    {
      display: "none",
      duration: 500,
      delay: 200,
      easing: "easeOutCubic",
      complete: function () {
        modal_common_sw = 0;
      },
    }
  );
  if ($("body.sp").length) {
    $("body").removeClass("noscroll");
    $(window).scrollTop(scrollTop);
  }
}

function modalCommonOpen() {
  modal_common_sw = 1;
  $.Velocity.hook($(".modal-common-inner"), "margin-top", "20px");
  $(".modal-common").velocity(
    { opacity: 1 },
    { display: "block", duration: 200, delay: 0, easing: "easeOutCubic" }
  );
  $(".modal-common-close").velocity(
    { opacity: 1 },
    { display: "block", duration: 400, delay: 0, easing: "linear" }
  );
  $(".modal-common-inner").velocity(
    { opacity: 1, marginTop: 0 },
    {
      display: "block",
      duration: 500,
      delay: 0,
      easing: "easeOutCubic",
      complete: function () {
        modal_common_sw = 2;
      },
    }
  );
  if ($("body.sp").length) {
    scrollTop = $(window).scrollTop();
    $("body")
      .addClass("noscroll")
      .css("top", -scrollTop + "px");
  }
}

$(".btn-modal-common").click(function () {
  if (modal_common_sw === 0) {
    modalCommonOpen();
  }
  if (modal_common_sw === 2) {
    modalCommonClose();
    modal_common_close = 1;
  }
});

$(".modal-access").click(function (e) {
  if (!$(e.target).closest(".modal-common-inner").length) {
    modalCommonClose();
    modal_common_close = 1;
  }
});
