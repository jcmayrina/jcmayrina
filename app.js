var w = window.innerWidth;
if (w <= 650) {
} else {
}

gsap.to(".my-name1", {
  scrollTrigger: {
    trigger: ".my-name1",
    start: "top",
    end: "bottom",
    scrub: 3,
  },
  opacity: 0,
});
gsap.to(".my-name2", {
  scrollTrigger: {
    trigger: ".my-name1",
    start: "top",
    end: "bottom",
    scrub: 3,
  },
  opacity: 0,
});

gsap.to(".my-name3", {
  scrollTrigger: {
    trigger: ".my-name3-con",
    start: "-100",
    end: "bottom",
    scrub: 3,
    pin: true,
  },
  opacity: 0,
});

gsap.to(".scroll-down", {
  scrollTrigger: {
    trigger: ".my-name3",
    start: "400",
    end: "650",
    scrub: 3,
  },
  opacity: 0,
});

gsap.to(".scroll-text", {
  scrollTrigger: {
    trigger: ".my-name3",
    start: "300",
    end: "600",
    scrub: 3,
  },
  opacity: 0,
});

gsap.to(".my-job-name", {
  scrollTrigger: {
    trigger: ".my-name3",
    start: "top top",
    end: "bottom",
    scrub: 3,
  },
  opacity: 0,
});

gsap.to(".my-name1b", {
  scrollTrigger: {
    trigger: ".my-name1b",
    start: "-600",
    end: "-450",
    scrub: 6,
    toggleActions: "play none none reverse",
  },
  x: 200,
  opacity: 1,
});
gsap.to(".my-name2b", {
  scrollTrigger: {
    trigger: ".my-name1b",
    start: "-600",
    end: "-450",
    scrub: 6,
    toggleActions: "play none none reverse",
  },
  x: -200,
  opacity: 1,
});

gsap.to(".my-name3b", {
  scrollTrigger: {
    trigger: ".my-name3b-con",
    start: "-400",
    end: "-450",
    scrub: 4,
  },
  y: -50,
});
const cards = gsap.utils.toArray(".image-card");
cards.forEach((card) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      toggleActions: "play none none reset",
    },
    duration: 1.2,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "expo.inOut",
  });
});
