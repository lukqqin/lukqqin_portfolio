const galleryImages = document.querySelectorAll(".gallery-grid img");

const fullscreen = document.querySelector(".fullscreen");

const fullscreenImage = document.querySelector(".fullscreen img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        fullscreen.classList.add("active");

        fullscreenImage.src = image.src;

    });

});

fullscreen.addEventListener("click", () => {

    fullscreen.classList.remove("active");

});