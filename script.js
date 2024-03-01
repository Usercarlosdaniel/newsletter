const btnSubmit = document.getElementById("btn-submit");
const btnDismiss = document.getElementById("btn-dismiss");
const ContainerEl = document.querySelector(".container");
const Sucess = document.querySelector(".container-sucess");
const inputEl = document.getElementById("email");
const userEmailSpan = document.querySelector(".user-email");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btnSubmit.addEventListener("click", () => {
  const emailValue = inputEl.value.trim();

  if (inputEl.value !== "" && emailRegex.test(emailValue)) {
    ContainerEl.classList.add("hide");
    Sucess.classList.remove("hide");

    userEmailSpan.textContent = emailValue;
  } else {
    document.querySelector(".invalid-email").style.display = "block";
    inputEl.classList.add("active");
  }
});

btnDismiss.addEventListener("click", () => {
  ContainerEl.classList.remove("hide");
  Sucess.classList.add("hide");
  inputEl.value = "";
  inputEl.classList.remove("active");
  document.querySelector(".invalid-email").style.display = "none";
});
