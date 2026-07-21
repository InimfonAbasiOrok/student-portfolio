const navbar = document.querySelector(".navbar");
document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const words = [
  "Cybersecurity Student",
  "Creative Developer",
  "Digital Artist",
  "Animator",
];

const typingText = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function loop() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    // TYPE
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(loop, 500); // Pause at full word
      return;
    }

    setTimeout(loop, 100);
  } else {
    // DELETE
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Next Word
      setTimeout(loop, 400);
      return;
    }

    setTimeout(loop, 50);
  }
}

if (typingText) {
  loop();
}

const factCards = document.querySelectorAll(".fact-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 },
);

factCards.forEach((card) => observer.observe(card));
