document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formFilme");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const filme = {
      nome: form.nome.value,
      diretor: form.diretor.value,
      roteirista: form.roteirista.value,
      atores: form.atores.value.split(",").map(a => a.trim()),
      genero: form.genero.value,
      classificacao: form.classificacao.value,
      nota: form.nota.value,
      sinopse: form.sinopse.value,
      opinioes: form.opinioes.value.split(".").map(o => o.trim()).filter(Boolean),
      imagem: form.imagem.value
    };

    let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    filmes.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmes));

    alert("🎬 Filme salvo com sucesso!");
    form.reset();
  });
});
