gsap.to(".my-name1", {
  scrollTrigger: {
    trigger: ".my-name1",
    scrub: 2,
    pin: true,
    start: "-300px",
    end: "+=500%",
    pinSpacing: false,
  },
  color: "white",
  immediateRender: false,
  x: 50,
});
gsap.to(".my-name2", {
  scrollTrigger: {
    trigger: ".my-name2",
    scrub: 1,
    pin: true,
    start: "-300px",
    end: "+=500%",
    pinSpacing: false,
  },
  color: "white",
  immediateRender: false,
  x: -50,
});

gsap.to(".my-name3", {
  scrollTrigger: {
    trigger: ".my-name3-con",
    scrub: 1,
    pin: true,
    start: "-300px",
    end: "+=500%",
    pinSpacing: false,
  },
  y: 300,
  color: "white",
  immediateRender: false,
});
