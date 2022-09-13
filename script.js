var count = 0

function adicionarFilme() {
  var campoFilm = document.getElementById("filmeImg").value;
  var campoName = document.getElementById("filmeNome").value;
  if (campoFilm.endsWith(".jpg") || campoFilm.endsWith(".jpeg")) {
    listarFilmes(campoFilm, campoName, count);
    count++;
  } else {
    alert("erro");
  }

  function listarFilmes(foto, nome, num) {
    var list = document.getElementById("listaFilmes");
    var pushFilmTag = `<img src= ${foto}>`;
    var pushFilmName = `<div class="tituloFilme">${nome}</div>`;
    list.innerHTML += `<div class="tela${num}">${pushFilmTag} ${pushFilmName}</div>`;
  }
}

/*function removerFilme() {
  const card = document.getElementById("")
}*/