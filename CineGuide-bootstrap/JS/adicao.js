document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formFilme");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const filme = {
      nome: form.nome.value.trim(),
      diretor: form.diretor.value.trim(),
      roteirista: form.roteirista.value.trim(),
      atores: form.atores.value ? form.atores.value.split(",").map(a => a.trim()) : [],
      genero: form.genero.value.trim(),
      classificacao: form.classificacao.value.trim(),
      nota: Number(form.nota.value),
      sinopse: form.sinopse.value.trim(),
      opinioes: form.opinioes.value
        .split(".")
        .map(o => o.trim())
        .filter(Boolean),
      imagem: form.imagem.value.trim()
    };

    if (!filme.nome || !filme.diretor || !filme.genero || isNaN(filme.nota)) {
      alert("Preencha todos os campos obrigatórios e uma nota válida.");
      return;
    }

    if (filme.nota < 0 || filme.nota > 10) {
      alert("A nota deve estar entre 0 e 10.");
      return;
    }

    let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    filmes.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmes));

    alert("🎬 Filme salvo com sucesso!");
    form.reset();
  });

  window.toggleAside = function () {
    document.getElementById("aside").classList.toggle("active");
  };

  window.fecharAside = function () {
    document.getElementById("aside").classList.remove("active");
  };
});

