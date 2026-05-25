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