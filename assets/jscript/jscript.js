let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const typed = new Typed(".multiple-text", {
  strings: [
    "Front-End Developer",
    "Web Design",
    "Content Creation",
    "Educational Content",
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});

const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});
