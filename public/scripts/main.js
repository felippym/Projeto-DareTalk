import Modal from "./modal.js";

const modal = Modal();

const modalTitle = document.querySelector(".modal-wrapper h2");
const modalp = document.querySelector(".modal-wrapper p");
const modalButtontext = document.querySelector(".modal-wrapper button");

// trabalhando o form

const roomId = document.querySelector("#room-id").dataset.id;

const form = document.querySelector(".modal form");

//botoes marcar como lido

const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    modalTitle.innerHTML = "Marcar como lida";
    modalp.innerHTML = "Tem certeza que deseja marcar como lida?";
    modalButtontext.innerHTML = "Marcar como lida";
    let questionID = event.target.dataset.id; //AAAAAAAAAAAAAAAAAA
    form.setAttribute("action", `/question/${roomId}/${questionID}/check`);
    modal.open();
  });
});

// Excluir abrir modal

const deleteButtons = document.querySelectorAll(".actions a.delete");

deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    modalTitle.innerHTML = "Excluir pergunta";
    modalp.innerHTML = "Tem certeza que você deseja excluir esta pergunta?";
    modalButtontext.innerHTML = "Sim, excluir";
    let questionID = event.target.dataset.id;
    form.setAttribute("action", `/question/${roomId}/${questionID}/delete`);
    modal.open();
  });
});

// botao de cancelar

const cancelmodal = document.querySelector(".modal .button");

cancelmodal.addEventListener("click", (evento) => {
  modal.close();
});
