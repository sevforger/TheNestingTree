// slide foto 
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 4000); // 4 detik

// ambil form
const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault(); // cegah submit reload
  alert("We are not accepting messages via email for now. Contact us via WhatsApp by clicking the Schedule a Tour or Enroll Now button");
});

document.querySelectorAll("button, a").forEach(el => {
    if (el.textContent.trim() === "Learn More") {
      el.addEventListener("click", function (e) {
        e.preventDefault(); 
        document.getElementById("popup-whatsapp").classList.remove("hidden");
      });
    }
  });

  // Buka popup
document.querySelectorAll(".learn-more-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("popup-whatsapp").classList.remove("hidden");
    });
  });

  // Tutup popup
  document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup-whatsapp").classList.add("hidden");
  });