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
