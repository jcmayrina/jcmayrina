var w = window.innerWidth;
if (w <= 650) {
  gsap.to(".my-name1", {
    scrollTrigger: {
      trigger: ".my-name1",
      scrub: 3,
      pin: true,
      start: "top top",
      end: "+=120%",
      pinSpacing: false,
    },
    color: "white",
    immediateRender: false,
    x: 10,
    y: 420,
  });
  gsap.to(".my-name2", {
    scrollTrigger: {
      trigger: ".my-name2",
      scrub: 3,
      pin: true,
      start: "top top",
      end: "+=120%",
      pinSpacing: false,
    },
    color: "white",
    immediateRender: false,
    x: -10,
    y: 420,
  });

  gsap.to(".my-name3", {
    scrollTrigger: {
      trigger: ".my-name3-con",
      scrub: 7,
      pin: true,
      start: "-250px",
      end: "bottom",
      pinSpacing: false,
    },
    x: 0,
    y: 800,
    color: "white",
    immediateRender: false,
  });

  gsap.to(".my-proj", {
    scrollTrigger: {
      trigger: ".my-img-end",
      scrub: 0.1,
      start: "top top",
      bottom: "bottom 50%",
    },
  });
} else {
  gsap.to(".my-name1", {
    scrollTrigger: {
      trigger: ".my-name1",
      start: "-150",
      end: "bottom",
      scrub: 3,
    },
    opacity: 0,
  });
  gsap.to(".my-name2", {
    scrollTrigger: {
      trigger: ".my-name1",
      start: "-150",
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
      start: "-550",
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
      start: "-550",
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
}
