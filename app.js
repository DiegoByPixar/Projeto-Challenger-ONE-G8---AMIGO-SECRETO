//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Array para armazenar os amigos

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();
    
    // Verifica se o nome é válido e não é duplicado
    if (nomeAmigo && !amigos.includes(nomeAmigo)) {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        inputAmigo.value = ''; // Limpar o campo de entrada
    } else if (!nomeAmigo) {
        alert("Por favor, insira um nome válido.");
    } else {
        alert("Este nome já foi adicionado.");
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ''; // Limpa a lista antes de adicionar os itens

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para o sorteio.");
        return;
    }

    // Embaralha a lista de amigos
    const amigosSorteados = [...amigos];
    shuffle(amigosSorteados);

    // Sortear apenas 1 amigo
    const amigoSorteado = amigosSorteados[0];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;

    // Remover o sorteado da lista para que ele não seja sorteado novamente
    amigos = amigos.filter(amigo => amigo !== amigoSorteado);
    atualizarListaAmigos();
}

// Função para embaralhar o array (Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
}
