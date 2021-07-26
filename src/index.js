//css
import "./sass/style.scss";

//js
import { debounce } from "./js/utilities/debounce";
import { animateOnScroll } from "./js/utilities/aos";
import { loader } from "./js/loader";
import { menu } from "./js/menu";
import { header } from "./js/header";
import { carousel } from "./js/carousel";
import { validateEmail } from "./js/validateEmail";

loader();

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
