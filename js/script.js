const galleryImages = document.querySelectorAll(".gallery-grid img");

const fullscreen = document.querySelector(".fullscreen");

const fullscreenImage = document.querySelector(".fullscreen img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        fullscreen.classList.add("active");

        fullscreenImage.src = image.src;

    });

});

if(fullscreen){

    fullscreen.addEventListener("click", () => {

        fullscreen.classList.remove("active");

    });

}

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => observer.observe(el));