// =========================
// IMAGE LIGHTBOX
// =========================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

if (lightbox && lightboxImg && closeLightbox) {
  document.querySelectorAll(".art-card img").forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = image.src;
      lightboxImg.alt = image.alt;
    });
  });

  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  });
}
