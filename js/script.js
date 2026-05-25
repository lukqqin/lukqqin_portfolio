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

let current = 1;

function updateCarousel() {

  items.forEach(item => {

    item.classList.remove(
      "active",
      "prev",
      "next"
    );

  });

  items[current].classList.add("active");

  const prevIndex =
    (current - 1 + items.length)
    % items.length;

  const nextIndex =
    (current + 1)
    % items.length;

  items[prevIndex].classList.add("prev");
  items[nextIndex].classList.add("next");

}

nextBtn.addEventListener("click", () => {

  current =
  (current + 1)
  % items.length;

  updateCarousel();

});

prevBtn.addEventListener("click", () => {

  current =
  (current - 1 + items.length)
  % items.length;

  updateCarousel();

});

updateCarousel();