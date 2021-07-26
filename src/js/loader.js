import { gsap, Power4 } from "gsap";

export function loader() {
    const body = document.querySelector(".js-body"),
        loader = document.querySelector(".js-loader"),
        loaderImg = document.querySelector(".js-loader-logo"),
        loaderProgress = document.querySelector(".js-loader-progress"),
        loaderTl = gsap.timeline({ paused: true, onComplete: rmLoader }),
        stopScrollingClass = "stop-scrolling";

    //loader timeline
    loaderTl
        .to(loaderProgress, 2.8, { xPercent: 100, ease: Power4.easeInOut })
        .to(loaderImg, 0.4, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1.8")
        .to(loaderImg, 0.4, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.2")
        .to(loader, 0.6, { xPercent: 100, ease: Power4.easeInOut }, "+=0.2");

    window.addEventListener("load", (event) => {
        //start timeline
        loaderTl.restart();
    });

    function rmLoader() {
        //remove stop scrolling from body
        body.classList.remove(stopScrollingClass);
        gsap.to(loader, 0.3, { autoAlpha: 0 });
    }
}
