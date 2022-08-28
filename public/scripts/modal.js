export default function Modal() {
  function open() {
    document.querySelector(".modal-wrapper h2").innerHTML = "Marcar como lida";

    document.querySelector(".modal-wrapper p").innerHTML =
      "Tem certeza que você deseja marcar esta pergunta como lida?";
    document.querySelector(".modal-wrapper button").innerHTML =
      "Sim, marcar como lida";

    document.querySelector(".modal-wrapper").classList.add("active");
  }
  function close() {
    document.querySelector(".modal-wrapper").classList.remove("active");
  }

  function deleteOption() {}

  function checkOption() {}

  return {
    open,
    close,
    deleteOption,
    checkOption,
  };
}
