const btnMobile = document.getElementById("btn-mobile");
const nav = document.querySelector(".header_nav");
const btnClose = document.getElementById("btnClose");
const Modal = document.querySelector(".modal");
const Cards = document.querySelectorAll(".card");

const fnModal = () => {
  if (Modal.classList.contains("active")) {
    Modal.classList.remove("active");
  } else {
    Modal.classList.add("active");
  }
};

btnMobile.addEventListener("click", () => {
  nav.classList.toggle("active");
});

Cards.forEach((card) => {
  card.addEventListener("click", fnModal);
});

btnClose.addEventListener("click", fnModal);
