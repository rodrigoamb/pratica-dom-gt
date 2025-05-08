const botao = document.getElementById("btn");
const titulo = document.getElementById("titulo");
const container = document.getElementById("container");
const novoBotao = document.createElement("button");
const aparecerFormulario = document.getElementById("btn-aparece-formulario");
const form = document.getElementById("formulario");

botao.addEventListener("click", () => {
  titulo.className = "estilo-titulo";

  novoBotao.textContent = "Voltar";
  novoBotao.style.display = "inline";

  container.appendChild(novoBotao);
});

novoBotao.addEventListener("click", () => {
  titulo.className = "default";
  novoBotao.style.display = "none";
});

aparecerFormulario.addEventListener("click", () => {
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.width = "40%";
  form.style.gap = "15px";
});

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = inputName.value.trim();
  const email = inputEmail.value.trim();
  const password = inputPassword.value.trim();

  if (name === "" || email === "" || password === "") {
    return;
  }

  const ul = document.getElementById("corpo-lista");

  ul.innerHTML = `
  <li>${name}</li>
  <li>${email}</li>
  <li>${password}</li>
  `;

  form.reset();
});

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
});
