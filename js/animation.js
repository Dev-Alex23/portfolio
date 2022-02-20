// Show and Hide Normal NavBar onScroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
};

// CLick to Scroll Animation
var scroll = new SmoothScroll('a[href*="#"]');

// Typing animation
let app = document.querySelector(".head-text-main h1");

let typewriter = new Typewriter(app, {
  loop: false,
});

// typewriter.typeString("A Web Developer.").pauseFor(2500).deleteAll().start();
typewriter.typeString("A Web Developer.").pauseFor(2500).start();

// Page Load Animation
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-finish");
});

// Hero Section Animation
// const heroTimeline = gsap.timeline();

// let header = document.querySelector(".header");
// let mobile_nav = document.querySelector("#mobile-nav");
// let heroText = document.querySelector(".hero-text");
// let socialIcons = document.querySelector(".social-icons");
// let heroContainer = document.querySelector(".hero-text-container");
// let heroContainer = document.querySelector(".hero-text-container");
// let heroCTA = document.querySelector("#hero-cta");
// let heroImage = document.querySelector(".gradient-animation");

// heroTimeline.from([header, mobile_nav, heroText], {
//   opacity: 0,
//   delay: 0.5,
//   duration: 1,
//   ease: "power2.inOut",
// });

// About Section Animation
// const aboutTimeline = gsap.timeline();

// let about = document.querySelector(".head-title h1");
// let subTitle = document.querySelector(".sub-title h3");
// let aboutInfo = document.querySelectorAll(".about-info p");
// let cta = document.querySelector(".cta a");
// let img = document.querySelector(".img-container img");

// aboutTimeline.from([about, subTitle, aboutInfo], {
//   opacity: 0,
//   duration: 1,
//   stagger: { amount: 0.4 },
//   y: "-30%",
//   ease: "power2.ease",
// });
// aboutTimeline.from(img, {
//   opacity: 0,
//   duration: 0.6,
//   x: "-100px",
// });

// // ScollMagic
// const controller = new ScrollMagic.Controller();
// const scene = new ScrollMagic.Scene({
//   triggerElement: "#about",
//   triggerHook: 0.5,
//   // reverse: false,
// })
//   .setTween(aboutTimeline)
//   .addTo(controller);
