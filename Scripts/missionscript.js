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

  $(window).resize(function () {
    const width = $(window).width();
  
    if (width > 900) {
      $(".menu").hide();
      $(".cross").hide();
      $(".hamburger").hide(); // hide hamburger at desktop
    } else {
      $(".menu").hide(); // Start with menu hidden on mobil resize
      $(".cross").hide();
      $(".hamburger").show(); // Show hamburger again when resizing back down
    }
  });
  

  $("#missions-btn").click(function () {
    window.location.href = "../../../../MainMissions/1960/1960.html";
  });
});

document.addEventListener("DomContentLoaded", function () {
  const links = document.querySelectorAll(".blockLink");
  const currentPage = window.location.pathname.split ("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetUrl = this.href;
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1000);
    });
  });
});