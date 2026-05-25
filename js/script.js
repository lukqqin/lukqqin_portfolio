const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});

/* MODAL */

const modal =
document.getElementById("modal");

const openModal =
document.getElementById("openModal");

const closeModal =
document.getElementById("closeModal");

openModal.addEventListener("click", () => {

  modal.classList.add("active");

});

closeModal.addEventListener("click", () => {

  modal.classList.remove("active");

});

modal.addEventListener("click", (e) => {

  if (e.target === modal) {

    modal.classList.remove("active");

  }
});

  /* CAROUSEL */

const items =
document.querySelectorAll(".carousel-item");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

let current = 0;

function updateCarousel() {

  items.forEach((item, index) => {

    item.classList.remove("active");

    if (index === current) {

      item.classList.add("active");

    }

  });

}

nextBtn.addEventListener("click", () => {

  current++;

  if (current >= items.length) {

    current = 0;

  }

  updateCarousel();

});

prevBtn.addEventListener("click", () => {

  current--;

  if (current < 0) {

    current = items.length - 1;

  }

  updateCarousel();

});

updateCarousel();