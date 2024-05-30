// ------ FUNÇÕES GERAIS --------- //
function mostrarPopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let nomeUsuarioInput = document.getElementById("nome_usuario");
let nomeUsuarioLabel = document.querySelector('label[for="nome_usuario"]');
let nomeUsuarioHelper = document.getElementById("nome_usuario-helper");

mostrarPopup(nomeUsuarioInput, nomeUsuarioLabel);

// Validar valor do input do campo nome de usuario
nomeUsuarioInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length < 5) {
    nomeUsuarioHelper.innerText = "Digite um nome com 5 ou mais caracteres";
    estilizarInputIncorreto(nomeUsuarioInput, nomeUsuarioHelper);
    inputsCorretos.nomeUsuario = false;
  } else if (valor != "msaner") {
    nomeUsuarioHelper.innerText = "Nome de uusário inválido";
    estilizarInputCorreto(nomeUsuarioInput, nomeUsuarioHelper);
    inputsCorretos.nomeUsuario = false;
  } else {
    estilizarInputCorreto(nomeUsuarioInput, nomeUsuarioHelper);
    inputsCorretos.nomeUsuario = true;
  }
});

// -------- VALIDAÇÃO DE SENHA --------
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

mostrarPopup(senhaInput, senhaLabel);

senhaInput.addEventListener("blur", (e) => {
  const valor = e.target.value;
  if (valor == "") {
    senhaHelper.innerText = "O campo senha não pode estar vazio";
    estilizarInputIncorreto(senhaInput, senhaHelper);
    inputsCorretos.senha = false;
    //} else if (senhaInput.value != "12345") {
    //  senhaHelper.innerText = "Senha incorreta";
    //  estilizarInputCorreto(senhaInput, senhaHelper);
    //   inputsCorretos.senha = false;
  } else {
    estilizarInputCorreto(senhaInput, senhaHelper);
    inputsCorretos.senha = true;
  }
});

// ------- EVITAR ENVIO DO FORMUÁRIO ----------- //

let btnSubmit = document.querySelector('button[type="submit"]');
let inputsCorretos = {
  nomeUsuario: false,
  senha: false,
};

btnSubmit.addEventListener("click", (e) => {
  if (inputsCorretos.nomeUsuario == false || inputsCorretos.senha == false) {
    //  e.preventDefault();
    //    alert("Os campos obrigatórios tem que ser preenchidos corretamente");
  } else {
    //    alert("Formulário enviado com sucesso");
  }
});

function logar() {
  var nome_usuario = document.getElementById("nome_usuario").value;
  var senha = document.getElementById("senha").value;

  if (nome_usuario == "msaner" && senha == "12345") {
    //    alert("Sucesso");
    location.href = "../html/perfil_usuario.html";
  } else {
    alert("Usuário ou senha incorretos");
  }
}
