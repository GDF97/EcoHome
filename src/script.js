const btnMobile = document.getElementById("btn-mobile");
const nav = document.querySelector(".header_nav");

btnMobile.addEventListener("click", () => {
  nav.classList.toggle("active");
});
