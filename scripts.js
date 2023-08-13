document.addEventListener("DOMContentLoaded", function() {
  const naoButton = document.getElementById("nao");
  const simButton = document.getElementById("sim");
  const modalNao = document.getElementById("modal-nao");
  const modalSim = document.getElementById("modal-sim");
  const modalImageNao = document.getElementById("modal-image-nao");
  const modalImageSim = document.getElementById("modal-image-sim");

  naoButton.addEventListener("click", function() {
    modalImageNao.style.display = "block";
    modalNao.style.display = "block";
  });

  simButton.addEventListener("click", function() {
    modalImageSim.style.display = "block";
    modalSim.style.display = "block";
  });

  document.getElementById("close-modal-nao").addEventListener("click", function() {
    modalImageNao.style.display = "none";
    modalNao.style.display = "none";
  });

  document.getElementById("close-modal-sim").addEventListener("click", function() {
    modalImageSim.style.display = "none";
    modalSim.style.display = "none";
  });
});
