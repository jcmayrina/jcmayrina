gsap.to(".my-name1", {
  scrollTrigger: {
    trigger: ".my-name1",
    scrub: 2,
    pin: true,
    start: "-370vh",
    end: "+=200%",
    pinSpacing: false,
    snap: 1,
    markers: true,
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
    start: "-370vh",
    end: "+=200%",
    pinSpacing: false,
    snap: 1,
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
    start: "-370vh",
    end: "+=200%",
    pinSpacing: false,
  },
  y: 300,
  color: "white",
  immediateRender: false,
});

gsap.to(".my-proj", {
  scrollTrigger: {
    trigger: ".my-img-end",
    scrub: 0.1,
    snap: 1,
    start: "top",
    end: "+=107%",
    markers: true,
  },
});
