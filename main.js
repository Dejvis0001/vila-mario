//Moving Animation
const elements = document.querySelectorAll(".fadeinleft");
const elements1 = document.querySelectorAll(".fade-in");
const elements2 = document.querySelectorAll(".fadeinright");
const elements3 = document.querySelectorAll(".fadeindown");
const elements4 = document.querySelectorAll(".fadeinup");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};
const callbacks = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-left");
    }
  });
};
const callbacks1 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};
const callbacks2 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-right");
    }
  });
};
const callbacks3 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-down");
    }
  });
};
const callbacks4 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-up");
    }
  });
};
let observer = new IntersectionObserver(callbacks, options);
let observer1 = new IntersectionObserver(callbacks1, options);
let observer2 = new IntersectionObserver(callbacks2, options);
let observer3 = new IntersectionObserver(callbacks3, options);
let observer4 = new IntersectionObserver(callbacks4, options);
elements.forEach((elements) => {
  observer.observe(elements);
});
elements1.forEach((elements1) => {
  observer1.observe(elements1);
});
elements2.forEach((elements2) => {
  observer2.observe(elements2);
});
elements3.forEach((elements3) => {
  observer3.observe(elements3);
});
elements4.forEach((elements4) => {
  observer4.observe(elements4);
});
//Index-Home
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 6000, // Set autoplay delay to 6 seconds
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // Get the next and prev buttons
  var nextButton = document.querySelector(".swiper-button-next");
  var prevButton = document.querySelector(".swiper-button-prev");
  // Attach click event handlers
  nextButton.addEventListener("click", function () {
    swiper.slideNext();
  });
  prevButton.addEventListener("click", function () {
    swiper.slidePrev();
  });
});
//Index-Rooms
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Owl Carousel for room and gallery carousels
  initializeCarousel(".room-carousel");
  // Function to initialize Owl Carousel
  function initializeCarousel(selector) {
    var owl = $(selector);
    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
    // Get the next and prev buttons
    var nextButton = owl.parent().find(".owl-next");
    var prevButton = owl.parent().find(".owl-prev");
    // Attach click event handlers
    nextButton.on("click", function () {
      owl.trigger("next.owl.carousel");
    });
    prevButton.on("click", function () {
      owl.trigger("prev.owl.carousel");
    });
    // Handle carousel loop
    owl.on("translated.owl.carousel", function (event) {
      var items = event.item.count; // Total number of items in the carousel
      var currentItem = event.item.index; // Index of the current item
      if (currentItem === items - 1) {
        // If the last item is reached, go back to the first item
        setTimeout(function () {
          owl.trigger("to.owl.carousel", [0, 500]);
        }, 6000); // Delay to match autoplayTimeout
      }
    });
  }
});
//Index-Gallery
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Owl Carousel for gallery carousel
  var owl = $(".gallery-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    nav: false, // Remove nav option
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // Manually handle next and previous buttons
  $(".gallery-next-button").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".gallery-prev-button").click(function () {
    owl.trigger("prev.owl.carousel");
  });
  // Handle carousel reset when reaching the last item
  owl.on("changed.owl.carousel", function (event) {
    var currentIndex = event.item.index;
    var itemsCount = event.item.count;
    if (currentIndex === itemsCount - 1) {
      // Reset the carousel to the first item
      owl.trigger("to.owl.carousel", [0, 500]);
    }
  });
});
//Index-Testimonials
document.addEventListener("DOMContentLoaded", function () {
  initializeCarousel(".testimonial-carousel");
  // Function to initialize Owl Carousel
  function initializeCarousel(selector) {
    var owl = $(selector);
    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      items: 1, // Set to show only 1 item at a time
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    // Get the next and prev buttons
    var nextButton = owl.parent().find(".owl-next");
    var prevButton = owl.parent().find(".owl-prev");
    // Attach click event handlers
    nextButton.on("click", function () {
      owl.trigger("next.owl.carousel");
    });
    prevButton.on("click", function () {
      owl.trigger("prev.owl.carousel");
    });
    // Handle carousel loop
    owl.on("translated.owl.carousel", function (event) {
      var items = event.item.count; // Total number of items in the carousel
      var currentItem = event.item.index; // Index of the current item
      if (currentItem === items - 1) {
        // If the last item is reached, go back to the first item
        setTimeout(function () {
          owl.trigger("to.owl.carousel", [0, 500]);
        }, 6000); // Delay to match autoplayTimeout
      }
    });
  }
});
//Back To Top Button
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};