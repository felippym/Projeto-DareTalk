import Modal from "./modal.js";

const modal = Modal();

const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    modal.open();
  });
});

// botao de cancelar

const cancelmodal = document.querySelectorAll(".modal .button");

cancelmodal.forEach((button) => {
  button.addEventListener("click", (evento) => {
    modal.close();
  });
});

const deleteButtons = document.querySelectorAll(".action a.delete");
