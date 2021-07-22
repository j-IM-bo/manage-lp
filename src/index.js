//css
import "./sass/style.scss";

//js
import { debounce } from "./js/utilities/debounce";
// import { animateOnScroll } from "./js/utilities/aos";
import { menu } from "./js/menu";
import { header } from "./js/header";

function init() {
    menu();
    window.addEventListener("scroll", debounce(header), false);
}

window.addEventListener("load", function () {
    init();
});
