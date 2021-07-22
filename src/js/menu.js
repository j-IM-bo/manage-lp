import { gsap, Power1, Power2, Power3, Power4 } from "gsap";

export function menu() {
    const body = document.querySelector(".js-body"),
        menu = document.querySelector(".js-menu"),
        menuList = document.querySelector(".js-menu-list"),
        menuItems = document.querySelectorAll(".js-menu-item"),
        menuToggle = document.querySelector(".js-menu-btn"),
        stopScrollingClass = "stop-scrolling",
        isActiveClass = "menu-is-active",
        menuOpenTl = gsap.timeline({ paused: true }),
        menuCloseTl = gsap.timeline({ paused: true });

    let isActive = false;

    //open menu timeline
    menuOpenTl
        .to(menu, {
            duration: 0.3,
            autoAlpha: 1,
            ease: Power4.easeInOut
        })
        .to(menuList, {
            duration: 0.6,
            autoAlpha: 1,
            ease: Power4.easeInOut
        })
        .to(
            menuItems,
            {
                duration: 0.4,
                autoAlpha: 1,
                y: 0,
                ease: Power4.easeInOut,
                stagger: 0.04
            },
            "-=0.8"
        );

    menuCloseTl.to(menu, {
        duration: 0.3,
        autoAlpha: 0,
        ease: Power1.easeInOut
    });

    // bind events
    menuToggle.addEventListener("click", (e) => {
        e.preventDefault();

        //switch toggle state
        isActive = !isActive;

        if (isActive) {
            body.classList.add(stopScrollingClass);
            menuToggle.classList.add(isActiveClass);
            openMenuAnimations(menuOpenTl, menuCloseTl);
        } else {
            closeMenuAnimations(menuOpenTl, menuCloseTl);
            menuToggle.classList.remove(isActiveClass);
            body.classList.remove(stopScrollingClass);
        }
    });

    //animation function
    function openMenuAnimations(menuOpenTl, menuCloseTl) {
        menuCloseTl.pause();
        menuOpenTl.restart();
    }

    function closeMenuAnimations(menuOpenTl, menuCloseTl) {
        menuOpenTl.pause();
        menuCloseTl.restart();
    }
}
