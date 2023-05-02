const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".navigation");
const layout = document.querySelector(".layout");

const toggleNav = () => {
  layout.classList.toggle("show-menu");
  nav.classList.toggle("show-menu");
};
