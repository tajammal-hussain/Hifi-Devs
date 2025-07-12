import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default menu = ()=>{
    const header = document.querySelector("#header");
const menuButton = document.querySelectorAll(".menu-button");
const menuButtonText = document.querySelectorAll(".menu-button p");
let itemsWithSubmenu = document.querySelectorAll(".menu-item.has-sub-menu");
menuButton.forEach(btn => {
    btn.addEventListener("click", () => {
    header.classList.toggle("nav-open");
    if (header.classList.contains("nav-open")) {
        menuTl.play();
    } else {
        itemsWithSubmenu.forEach(item => {
            let submenu = item.querySelector(".sub-menu");
            gsap.to(submenu, {
                maxHeight: 0
            })
            submenu.classList.remove("is-open");
        });
        menuTl.reverse();
        header.style.pointerEvents = "none";
    }
});
});


//! menu

const menuItems = document.querySelectorAll(".menu-item a");
const menuItemsSpans = document.querySelectorAll(".menu-item span");
const menuLeft = document.querySelector(".nav-menu .left");
const menuRight = document.querySelector(".nav-menu .right");
const menuRightImg = document.querySelector(".nav-menu .right img");
const menu = document.querySelector(".nav-menu");

gsap.set(menuItemsSpans, {
    y: 100
});

setTimeout(() => {
    gsap.set(menu, {
        display: "none",
        opacity: 1
    });
}, 0);

const menuTl = gsap.timeline({
    paused: true,
    onReverseComplete: () => {
        gsap.set(menu, {
            display: "none"
        });
        header.style.pointerEvents = "all";
    }
});

menuTl
    .add(
        gsap.to(menuButtonText, {
            opacity: 0,
            ease: "power4.in"
        })
    )
    .add(
        gsap.to(menuButtonText, {
            display: "none",
        }), "<"
    )
    .add(
        gsap.to(menu, {
            display: "grid",
            immediateRender: false
        }), "<"
    )
    .add(
        gsap.from(menu, {
            y: "-100%",
            duration: 0.75,
            ease: "power2.out"
        })
    )
    .add(
        gsap.from(menuRightImg, {
            y: 500,
            opacity: 0,
            duration: 0.75,
            ease: "power2.out",
            delay: 0.25
        }), "<"
    )
    .add(
        gsap.to(header, {
            mixBlendMode: "unset"
        }), "<"
    )
    .add(
        gsap.to(menuItemsSpans, {
            y: 0,
            stagger: 0.05,
            delay: .25
        }), "<"
    )

menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        const newSrc = item.dataset.hoverImg;

        if (menuRightImg.src.replace(window.location.origin, '') !== newSrc) {
            const tempImg = new Image();
            tempImg.src = newSrc;

            tempImg.onload = () => {
                menuRightImg.src = newSrc;
                gsap.fromTo(menuRightImg, {
                    scale: 1,
                }, {
                    scale: 1.05
                });
            };
        }
    });
});

menuLeft.addEventListener("mouseleave", () => {
    const itemsArray = Array.from(menuItems);
    const activeItem = itemsArray.find(item => item.classList.contains("active"));
    const newSrc = activeItem ? activeItem.dataset.hoverImg : undefined;

    if (menuRightImg.src.replace(window.location.origin, '') !== newSrc) {
        const tempImg = new Image();
        tempImg.src = newSrc;

        tempImg.onload = () => {
            menuRightImg.src = newSrc;
            gsap.fromTo(menuRightImg, {
                scale: 1,
            }, {
                scale: 1.05
            });
        };
    }
});


itemsWithSubmenu.forEach(item => {
    let submenu = item.querySelector(".sub-menu");
    let originalHeight = submenu.scrollHeight + "px";
    submenu.style.maxHeight = "0px";

    item.addEventListener("click", (e) => {
        submenu.classList.toggle("is-open");
        if (!e.target.classList.contains("sub-menu-item")) {
            console.log(e.target.classList);
            if (submenu.classList.contains("is-open")) {
                submenu.style.maxHeight = originalHeight;
            } else {
                submenu.style.maxHeight = "0px";
            }
        }
    })
})

}