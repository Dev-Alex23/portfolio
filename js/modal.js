const button = document.getElementById("modal-button");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

button.addEventListener("click", function () {
  modal.style.display = "block";
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});
