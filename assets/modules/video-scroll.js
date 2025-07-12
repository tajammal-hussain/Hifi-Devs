import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
let animationCtx;

export default createTimeline = () => {
    if (!document.querySelector('body').classList.contains('home')) {
      return;
    }
    const heroTitle = document.querySelector('.hero-title');
    const heroVideoContainer = document.querySelector('.hero-video-container');
    const heroVideoSecond = document.querySelector('.hero-video-second');
    const heroVideo = document.querySelector('.hero-video');

  animationCtx && animationCtx.revert();

  animationCtx = gsap.context(() => {
    const heroTitleLeft = heroTitle.getBoundingClientRect().left;
    const heroVideoContainerLeft = heroVideoContainer.getBoundingClientRect().left;
    const heroVideoContainerTop = heroVideoContainer.getBoundingClientRect().top;
    const heroVideoSecondTop = heroVideoSecond.getBoundingClientRect().top;

    gsap.set(heroVideoContainer, {
      left: -heroVideoContainerLeft + heroTitleLeft,
    })

    const originalLeft = heroVideoContainer.getBoundingClientRect().left;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroVideoSecond,
        start: "top 100%",
        end: "top 20%",
        scrub: 0.5,
      }
    });

    tl.to(heroVideoContainer, {
      width: "100vw",
      height: "41.67vw",
      x: -originalLeft,
      y: heroVideoSecondTop - heroVideoContainerTop,
      borderRadius: 0,
      duration: 1
    }).to(heroVideo, {
      left: 0,
      top: 0,
      ease: "none",
      duration: 1
    }, "<");

  });
};


