const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));

/* ---------------------------------------------
     mobile-menu
--------------------------------------------- */
const navSlide = () => {
  const burger = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".main-nav-js");
  const navLinks = document.querySelectorAll(".main-nav-js .menu-list .menu-item");

  const menuClose = document.querySelector(".menu-close-btn");

  burger.addEventListener("click", () => {
    nav.classList.add("show-menu");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards ${index / 10 + 0.5}s `;
      }
    });
    // burger.classList.toggle("toggle");
  });

  menuClose.addEventListener("click", () => {
    nav.classList.remove("show-menu");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards ${index / 10 + 0.5}s `;
      }
    });

    // burger.classList.toggle("toggle");
  });
};

navSlide();

/* ---------------------------------------------
   mobile-drop-down
--------------------------------------------- */

$(".main-nav-js .bi").on("click", function (event) {
  var $fl = $(this);
  $(this).parent().siblings().find(".sub-menu").slideUp();

  $(this).parent().siblings().find(".bi").addClass("bi-plus");
  if ($fl.hasClass("bi-plus")) {
    $fl.removeClass("bi-plus").addClass("bi-dash");
  } else {
    $fl.removeClass("bi-dash").addClass("bi-plus");
  }

  $fl.next(".sub-menu").slideToggle();
});

// FIXED SIDEBAR

// $(".fixed-sidebar .bi").on('click', function (event) {
//   var $fl = $(this);
//   $(this).parent().siblings().find('.sub-menu').slideUp();

//   $(this).parent().siblings().find('.bi').addClass('bi-plus');

//   if ($fl.hasClass('bi-plus')) {
//       $fl.removeClass('bi-plus').addClass('bi-dash');
//   } else {
//       $fl.removeClass('bi-dash').addClass('bi-plus');
//   }
//   var siblings = $(this).parent().siblings().find('.bi');
//   if( siblings.hasClass('bi-dash') ) {
//     siblings.removeClass('bi-dash');
//   }

//   $fl.next(".sub-menu").slideToggle();
// });
