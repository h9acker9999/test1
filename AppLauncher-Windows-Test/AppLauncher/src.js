import "./style.css";

const button = document.querySelector("#launch");
const status = document.querySelector("#status");

button.addEventListener("click", () => {
  status.textContent = "Workspace launched successfully.";
  button.textContent = "Launched";
});
