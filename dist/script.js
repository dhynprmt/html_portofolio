// =========================
// HAMBURGER MENU
// =========================

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });
}


// =========================
// DARK MODE
// =========================

const darkToggle = document.querySelector("#dark-toggle");

if (darkToggle) {

  // Check saved theme
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
    darkToggle.checked = true;
  }

  darkToggle.addEventListener("click", function () {

    if (darkToggle.checked) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }

  });
}


// =========================
// CLOSE MOBILE MENU
// =========================

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    if (hamburger && navMenu) {
      hamburger.classList.remove("hamburger-active");

      if (window.innerWidth < 1024) {
        navMenu.classList.add("hidden");
      }
    }

  });

});


// =========================
// PORTFOLIO SLIDER
// =========================

const portfolioSlider = document.querySelector("#portfolio-slider");
const portfolioPrev = document.querySelector("#portfolio-prev");
const portfolioNext = document.querySelector("#portfolio-next");

if (portfolioSlider && portfolioPrev && portfolioNext) {

  function getSlideWidth() {
    const firstSlide = portfolioSlider.children[0];

    if (!firstSlide) {
      return 0;
    }

    return firstSlide.offsetWidth;
  }


  // Next button
  portfolioNext.addEventListener("click", function () {

    const slideWidth = getSlideWidth();

    portfolioSlider.scrollBy({
      left: slideWidth,
      behavior: "smooth"
    });

  });


  // Previous button
  portfolioPrev.addEventListener("click", function () {

    const slideWidth = getSlideWidth();

    portfolioSlider.scrollBy({
      left: -slideWidth,
      behavior: "smooth"
    });

  });

}

const heroDescription = document.querySelector("#hero-description");

if (heroDescription) {
  const text =
    "Welcome to my little corner of the internet! Come along as I explore my projects, discover new interests, and turn my curiosity into adventures in technology.";

  let index = 0;

  const cursor = document.createElement("span");
  cursor.className = "typing-cursor";
  cursor.textContent = "|";

  heroDescription.appendChild(cursor);

  function typeText() {
    if (index < text.length) {
      cursor.before(text.charAt(index));
      index++;

      setTimeout(typeText, 15);
    } else {
      // Setelah selesai mengetik, mulai blinking
      cursor.classList.add("blink");
    }
  }

  typeText();
}