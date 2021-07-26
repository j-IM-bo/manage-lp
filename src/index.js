//css
import "./sass/style.scss";

//js
import { debounce } from "./js/utilities/debounce";
import { animateOnScroll } from "./js/utilities/aos";
import { carousel } from "./js/carousel";
import { menu } from "./js/menu";
import { header } from "./js/header";
import { validateEmail } from "./js/validateEmail";

validateEmail();

function init() {
    menu();
    window.addEventListener("scroll", debounce(header), false);
    animateOnScroll();
    carousel();
    validateEmail();
}

window.addEventListener("load", function () {
    init();
});
