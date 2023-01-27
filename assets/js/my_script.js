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

// $(".main-nav-js .bi").on("click", function (event) {
//   var $fl = $(this);
//   $(this).parent().siblings().find(".sub-menu").slideUp();

//   $(this).parent().siblings().find(".bi").addClass("bi-plus");
//   if ($fl.hasClass("bi-plus")) {
//     $fl.removeClass("bi-plus").addClass("bi-dash");
//   } else {
//     $fl.removeClass("bi-dash").addClass("bi-plus");
//   }

//   $fl.next(".sub-menu").slideToggle();
// });

/* ---------------------------------------------
     circletype
--------------------------------------------- */
let CircleTypeText1 = document.getElementById("CircleTypeText1");
if (CircleTypeText1 != null) {
  new CircleType(CircleTypeText1);
}

/* ---------------------------------------------
     portfolio filter
--------------------------------------------- */

// Array of "#portfolioCategories .filter" elements
const portfolioCategoriesEl = gsap.utils.toArray("#portfolioCategories .filter");
// Array of .portfolio-item elements
const portfolioItemsEl = gsap.utils.toArray(".portfolio-item");

function updateFilters(e) {
  // capture the current state of portfolioItemsEl
  const state = Flip.getState(portfolioItemsEl);

  //
  let selectedCategoryEl = e.target;

  // check if e.target is span element
  if (selectedCategoryEl.tagName == "SPAN") {
    // set selectedCategoryEl to the parent element which is a li.filter element
    selectedCategoryEl = selectedCategoryEl.parentElement;
  }

  // remove the .active class from all .filter elements
  portfolioCategoriesEl.forEach((cat) => cat.classList.remove("active"));

  // add the .active class for the element that was clicked
  selectedCategoryEl.classList.add("active");

  // get the category that was clicked e.g. rails or javascript
  const selectedCategory = selectedCategoryEl.dataset.filter;

  if (selectedCategory == "*") {
    // display all items
    portfolioItemsEl.forEach((i) => (i.style.display = "block"));
  } else {
    // display only items that match
    portfolioItemsEl.forEach((i) => (i.style.display = i.dataset.category == selectedCategory ? "block" : "none"));
  }

  // Animate from the previous state
  Flip.from(state, {
    duration: 1,
    scale: true,
    ease: "power1.inOut",
    onEnter: (elements) => gsap.fromTo(elements, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 }),
    onLeave: (elements) => gsap.to(elements, { opacity: 0, scale: 0, duration: 1 }),
  });
}

// gsap.from(".portfolio-item", {
//   duration: 2,
//   scale: 0.8,
//   opacity: 0,
//   delay: 0.5,
//   stagger: 0.2,
//   ease: "elastic",
//   force3D: true,
// });

// When a portfolio category is clicked call the updateFilters function
portfolioCategoriesEl.forEach((cat) => cat.addEventListener("click", updateFilters));
