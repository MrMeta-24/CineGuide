document.addEventListener("DOMContentLoaded", function () {
  const highlightsContainer = document.getElementById("highlights");
  const mostWatchedContainer = document.getElementById("mostWatched");
  const topRatedContainer = document.getElementById("topRated");

  const filmes = JSON.parse(localStorage.getItem("filmes")) || [];

  if (filmes.length === 0) {
    highlightsContainer.innerHTML = "<p class='text-muted'>Nenhum filme disponível.</p>";
    mostWatchedContainer.innerHTML = "<p class='text-muted'>Nenhum filme disponível.</p>";
    topRatedContainer.innerHTML = "<p class='text-muted'>Nenhum filme disponível.</p>";
    return;
  }

  // Em destaque: 3 primeiros cadastrados
  const destaques = filmes.slice(0, 3);
  renderFilmes(destaques, highlightsContainer);

  // Mais vistos: aleatórios
  const embaralhados = shuffleArray([...filmes]);
  const maisVistos = embaralhados.slice(0, Math.min(3, filmes.length));
  renderFilmes(maisVistos, mostWatchedContainer);

  // Melhores avaliados: top 3 com maior nota
  const melhorAvaliados = [...filmes]
    .filter(f => f.nota)
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);
  renderFilmes(melhorAvaliados, topRatedContainer);

  // Função para exibir os cards
  function renderFilmes(lista, container) {
    container.innerHTML = ""; // Limpa antes
    lista.forEach(filme => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${filme.imagem || "https://via.placeholder.com/400x200?text=Sem+Imagem"}" class="card-img-top" alt="${filme.nome}">
        <div class="card-body">
          <h5 class="card-title">${filme.nome}</h5>
          <p class="card-text"><strong>Diretor:</strong> ${filme.diretor}</p>
          <p class="card-text"><strong>Gênero:</strong> ${filme.genero}</p>
          <p class="card-text"><strong>Nota:</strong> ${filme.nota || "N/A"}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Função auxiliar para embaralhar array (Fisher-Yates)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
});
