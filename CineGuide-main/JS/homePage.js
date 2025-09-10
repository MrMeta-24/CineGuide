function toggleAside() {
  const aside = document.getElementById("asside");
  aside.classList.toggle("open");
}

function fecharAside() {
  const aside = document.getElementById("asside");
  aside.classList.remove("open");
}
const sampleMovies = {
  highlights: [
    { title: "Duna: Parte 2", img: "https://via.placeholder.com/150x210", info: "PG‑13 • Sci‑Fi" },
    { title: "Oppenheimer", img: "https://via.placeholder.com/150x210", info: "R • Drama" },
  ],
  mostWatched: [
    { title: "A Saga Crepúsculo", img: "https://via.placeholder.com/150x210", info: "PG‑13 • Fantasia" },
    { title: "Vingadores: Ultimato", img: "https://via.placeholder.com/150x210", info: "PG‑13 • Super‑herói" },
  ],
  topRated: [
    { title: "O Poderoso Chefão", img: "https://via.placeholder.com/150x210", info: "R • Crime" },
    { title: "Um Sonho de Liberdade", img: "https://via.placeholder.com/150x210", info: "R • Drama" },
  ],
};

function renderGrid(id, items) {
  const container = document.getElementById(id);
  items.forEach(film => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${film.img}" alt="${film.title}">
      <div class="card-info">
        <h3>${film.title}</h3>
        <p>${film.info}</p>
      </div>`;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrid("highlights", sampleMovies.highlights);
  renderGrid("mostWatched", sampleMovies.mostWatched);
  renderGrid("topRated", sampleMovies.topRated);

  const form = document.querySelector(".search-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const query = document.getElementById("searchInput").value.trim();
    if (query) alert(`Buscar: ${query}`);
  });
});
