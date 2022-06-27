$(function () {
  "use strict";

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
      $(".navbar .navbar-brand img").attr("src", "assets/img/logo-blank.svg");
    } else {
      $(".navbar-area").addClass("sticky");
      $(".navbar .navbar-brand img").attr("src", "assets/img/logo.svg");
    }
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".counter").counterUp({
    delay: 10,
    time: 3000,
  });

  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });

  new WOW().init();

  if (document.getElementsByClassName("particles")) {
    $(".particles").each((i, elm) => {
      console.log(elm.dataset);
      particlesJS(elm.id, {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: elm.dataset.particlesColor },
          opacity: {
            value: 0.5,
            random: false,
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: elm.dataset.particlesColor,
            opacity: 0.4,
            width: 1,
          },
        },
        retina_detect: true,
      });
    });
  }
});
