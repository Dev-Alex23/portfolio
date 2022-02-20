// Show & Hide Mobile NavBar

const hamburger = document.querySelector("#hamburger");
const sidebar = document.querySelector("#mobile-nav");

sidebar.style.right = "-100%";

hamburger.addEventListener("click", function () {
  // console.log("I was clicked!");
  hamburger.classList.toggle("is-active");

  if (sidebar.style.right == "-100%") {
    sidebar.style.right = "0px";
  } else {
    sidebar.style.right = "-100%";
  }
});

//Toggle Modal
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal-conatiner");

open.addEventListener("click", () => {
  modal.classList.add("show");
});
close.addEventListener("click", () => {
  modal.classList.remove("show");
});

const openPhoto = document.getElementById("open-photo");
const closePhoto = document.getElementById("close-photo");
const modalPhoto = document.getElementById("modal-conatiner-photo");

openPhoto.addEventListener("click", () => {
  modalPhoto.classList.add("show");
});
closePhoto.addEventListener("click", () => {
  modalPhoto.classList.remove("show");
});
// Scroll Animation

// gsap.from(".header", {
//   opacity: 0,
//   delay: 0.5,
//   duration: 1,
//   ease: "power2.inOut",
// });
// gsap.from("#side-bar", {
//   opacity: 0,
//   duration: 1,
//   stagger: 2,
//   ease: "power2.inOut",
// });

// gsap.from(".hero-text", {
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.8,
//   y: "-100%",
//   ease: "power2.inOut",
// });
// gsap.from(".social-icons", {
//   opacity: 0,
//   duration: 1,
//   delay: 0.3,
//   x: "-100%",
//   ease: "power2.inOut",
// });
// gsap.from(".hero-text-container", {
//   opacity: 0,
//   duration: 1,
//   delay: 0.3,
//   x: "-100%",
//   ease: "power2.inOut",
// });
// gsap.from(".cta", {
//   opacity: 0,
//   duration: 1,
//   delay: 0.3,
//   y: "-100%",
//   ease: "power2.inOut",
// });
// gsap.from(".gradient-animation", {
//   opacity: 0,
//   duration: 1,
//   delay: 0.3,
//   x: "100px",
//   ease: "power2.inOut",
// });

// .to(".loading", {
//   opacity: 0,
//   duration: 1,
//   stagger: 0.3,
//   y: "100%",
//   ease: "power2.inOut",
// })

// About Animation
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

// Projects Animation
// const projectTimeline = gsap.timeline();

// let title = document.querySelector(".title h1");

// let image = document.querySelector(".first .image-conatiner");
// let projectDesc = document.querySelector(".first .project-desc");

// let sndProject = document.querySelector(".project-container-right .image-conatiner");
// let sndProjectDesc = document.querySelector(".project-container-right .project-desc");

// let trdProject = document.querySelector(".trd .image-conatiner");
// let trdProjectDesc = document.querySelector(".trd .project-desc");

// aboutTimeline
//   .from(title, {
//     opacity: 0,
//     duration: 1,
//   })
//   .from([image, trdProject], {
//     opacity: 0,
//     duration: 1,
//   })
//   .from([projectDesc, trdProjectDesc], {
//     opacity: 0,
//     duration: 1,
//     x: "100px",
//   })
//   .from(sndProject, {
//     opacity: 0,
//     duration: 1,
//     x: "100px",
//   })
//   .from(sndProjectDesc, {
//     opacity: 0,
//     duration: 1,
//     x: "-100px",
//   });

// const contactTimeline = gsap.timeline();

// contactTimeline.from(".contact-title", {
//   opacity: 0,
//   duration: 1,
// });
