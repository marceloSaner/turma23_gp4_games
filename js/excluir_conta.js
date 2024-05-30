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

// -------- VALIDAÇÃO DO EMAIL --------
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

mostrarPopup(emailInput, emailLabel);

// Validar valor do input do campo email

emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (!checkEmail(emailInput.value)) {
    emailHelper.innerText = "Insira um email válido!";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false;
  } else {
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true;
  }
});

// ------- EVITAR ENVIO DO FORMUÁRIO ----------- //

let btnSubmit = document.querySelector('button[type="submit"]');
let inputsCorretos = {
  email: false,
};

function excluir() {
  if (inputsCorretos.email == false) {
    //e.preventDefault();
    alert("O campo email tem que ser preenchido com um email válido!");
  } else {
    location.href = "../index.html";
  }
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
