gsap.from("#header .heading", {
  x: -100,
  opacity: 0,
  duration: 0.6,
  delay: 1,
});

var typed = new Typed("#header div .logo-desc", {
  strings: ["National Geographic, 7 May 2018"],
  typeSpeed: 20,
  showCursor: false,
  startDelay: 1000,
});

let mainImg = document.querySelector("#main .mainImg");

ScrollReveal().reveal(mainImg, {
  distance: "16%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
  delay: 2000,
});

let elm1 = document.querySelector("#main .sct-one");

ScrollReveal().reveal(elm1, {
  distance: "20%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
});

let elm2 = document.querySelector("#main .sct-two");

ScrollReveal().reveal(elm2, {
  distance: "20%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
});

let imgGal1 = document.querySelector("#main .img-gallery .img-1");
let imgGal2 = document.querySelector("#main .img-gallery .img-2");

ScrollReveal().reveal(imgGal1, {
  distance: "20%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
});

ScrollReveal().reveal(imgGal2, {
  distance: "20%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
  delay: 600,
});

let sct3_head = document.querySelector(".sct-three .sct-head");

ScrollReveal().reveal(sct3_head, {
  distance: "20%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
});

let sct3_cards = document.querySelectorAll(".sct-three .gallery .gall-cards");

ScrollReveal().reveal(sct3_cards[0], {
  distance: "20%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
});

ScrollReveal().reveal(sct3_cards[1], {
  distance: "20%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
  delay: 600,
});

ScrollReveal().reveal(sct3_cards[2], {
  distance: "20%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
  delay: 1200,
});
