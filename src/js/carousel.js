import Flickity from "flickity";

export function carousel() {
    const carousel = document.querySelector(".js-carousel");

    const flkty = new Flickity(carousel, {
        // cellAlign: "",
        prevNextButtons: false,
        pageDots: true,
        draggable: true,
        // imagesLoaded: true,
        // setGallerySize: true,
        wrapAround: true,
        resize: true,
        autoPlay: true,
        freeScroll: true
    });

    flkty.resize();

    //prevent click from propagating on drag flickity f
    flkty.on("dragStart", () =>
        flkty.slider.childNodes.forEach(
            (slide) => (slide.style.pointerEvents = "none")
        )
    );

    flkty.on("dragEnd", () =>
        flkty.slider.childNodes.forEach(
            (slide) => (slide.style.pointerEvents = "all")
        )
    );
}
