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
  // check saved theme
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
    darkToggle.checked = true;
  } else {
    document.documentElement.classList.remove("dark");
    darkToggle.checked = false;
  }

  darkToggle.addEventListener("click", function () {
    if (darkToggle.checked) {
      // choose Dark Mode
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      // choose Light Mode
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
// TYPING EFFECT
// =========================

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
      cursor.classList.add("blink");
    }
  }

  typeText();
}