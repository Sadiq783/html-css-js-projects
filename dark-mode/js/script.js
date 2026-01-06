const container = document.querySelector(".container");
const btnToggle = document.querySelector(".toggle");
const icon = btnToggle.querySelector("i");

btnToggle.addEventListener("click", () => {
  container.classList.toggle("dark")
    ? (icon.className = "far fa-moon")
    : (icon.className = "far fa-sun");
});
