// Fungsi untuk mengubah warna latar belakang
function changeBackgroundColor() {
  const colors = ["#000000", "#4B0082", "#DA70D6", "#8A2BE2", "#9370DB"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Event listener untuk tombol perubahan warna
document
  .getElementById("changeColorButton")
  .addEventListener("click", changeBackgroundColor);

// Efek hover pada gambar atau kotak
const hoverElements = document.querySelectorAll(".hover-effect");
hoverElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style.transform = "scale(1.1)"; // Membesar
    element.style.transition = "transform 0.3s ease"; // Animasi halus
  });
  element.addEventListener("mouseleave", () => {
    element.style.transform = "scale(1)"; // Kembali ke ukuran semula
  });
});

// Modal pop-up
const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementsByClassName("close")[0];

openModalButton.addEventListener("click", () => {
  modal.style.display = "block"; // Tampilkan modal
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none"; // Sembunyikan modal
});

// Validasi form
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  const emailInput = document.getElementById("email");
  if (!emailInput.value.includes("@")) {
    alert("Email tidak valid! Pastikan email mengandung simbol @.");
    event.preventDefault(); // Mencegah pengiriman form
  }
});

// Efek parallax
window.addEventListener("scroll", () => {
  const parallaxElements = document.querySelectorAll(".parallax");
  parallaxElements.forEach((element) => {
    const speed = element.getAttribute("data-speed");
    const yOffset = window.pageYOffset * speed;
    element.style.transform = `translateY(${yOffset}px)`;
  });
});

// Sticky navbar
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// Efek klik pada elemen
const clickableElements = document.querySelectorAll(".clickable");
clickableElements.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.backgroundColor = "#DA70D6"; // Ubah warna saat diklik
    element.style.transition = "background-color 0.3s ease"; // Animasi halus
  });
});
