//css
import "./sass/style.scss";

//js
import { debounce } from "./js/utilities/debounce";
import { animateOnScroll } from "./js/utilities/aos";
import { carousel } from "./js/utilities/carousel";
import { menu } from "./js/menu";
import { header } from "./js/header";

function init() {
    menu();
    window.addEventListener("scroll", debounce(header), false);
    animateOnScroll();
    carousel();
}

window.addEventListener("load", function () {
    init();
});
