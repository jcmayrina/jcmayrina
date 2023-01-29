gsap.to(".my-name1", {
  scrollTrigger: {
    trigger: ".my-name1",
    scrub: 3,
    pin: true,
    start: "top top",
    end: "+=120%",
    pinSpacing: false,
  },
  color: "black",
  immediateRender: false,
  x: 50,
  y: 300,
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
  color: "black",
  immediateRender: false,
  x: -50,
  y: 300,
});

gsap.to(".my-name3", {
  scrollTrigger: {
    trigger: ".my-name3-con",
    scrub: 4,
    pin: true,
    start: "top top",
    end: "bottom",
    pinSpacing: false,
  },
  y: 1100,
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
ScrollTrigger.create({
  snap: {
    snapTo: 1 / 2,
    duration: 0.5,
  },
});
