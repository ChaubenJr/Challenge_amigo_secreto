let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById("amigo");
  if (nome.value === "") {
    alert("Digite um nome válido");
  } else {
    amigos.push(nome.value);
    nome.value = "";
  }
    exibirAmigos();
}

function exibirAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
    let sorteado = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = amigos[sorteado];
}