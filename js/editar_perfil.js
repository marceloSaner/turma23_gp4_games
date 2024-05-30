let nomeCompleto = document.getElementsByName("nome_completo_origem");
document.getElementById("nome_completo").innerHTML =
  nomeCompleto[0].defaultValue;

let nomeUsuario = document.getElementsByName("nome_usuario_origem");
document.getElementById("nome_usuario").innerHTML = nomeUsuario[0].defaultValue;
