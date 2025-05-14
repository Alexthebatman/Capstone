const btn = document.getElementById('missions-btn');
btn.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.era-nav').classList.toggle('active');
  btn.classList.toggle('active');
});

document.getElementById('home-button').addEventListener('click', e => {
  e.stopPropagation();          // don’t toggle the era menu
  window.location.href = 'index.html';  // or wherever your splash/home lives
});


$(document).ready(function () {
  $(".cross").hide();
  $(".menu").hide();

  $(".hamburger").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });

  $(".cross").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });

  // Auto-collapse or show hamburger based on screen size
  $(window).resize(function () {
    if ($(window).width() > 800) {
      $(".menu").hide();
      $(".hamburger").hide();
      $(".cross").hide();
    } else {
      $(".menu").hide();
      $(".hamburger").show();
      $(".cross").hide();
    }
  });

  // Do it once on page load
  if ($(window).width() > 800) {
    $(".menu").hide();
    $(".hamburger").hide();
    $(".cross").hide();
  } else {
    $(".menu").hide();
    $(".hamburger").show();
    $(".cross").hide();
  }

  // Fix anchor behavior
  $(".menu a").click(function (e) {
    const href = $(this).attr("href");
    if (href === "#") {
      e.preventDefault(); // stop scrolling
    } else {
      window.location.href = href; // go to page
    }
  });
});
