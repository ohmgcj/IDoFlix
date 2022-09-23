var count = 0

function listarFilmes(foto, nome, num) {
  var list = document.getElementById("listaFilmes");
  var pushFilmTag = `<img src= ${foto}>`;
  var pushFilmName = `<div class="tituloFilme">${nome}</div>`;
  var pushFilmBtn = `<button class="btnExcluir" onclick="removerFilme(${num})">Excluir</button>`
  list.innerHTML += `<div id="${num}">${pushFilmTag} ${pushFilmName} ${pushFilmBtn}</div>`;
}

function validaExtensao(imagem, nome) {
  if (imagem.endsWith(".jpg") || imagem.endsWith(".jpeg")) {
    listarFilmes(imagem, nome, count);
    count++;
  } else {
    alert("erro");
  }
}

function refId(id) {
  return document.getElementById(id)
}

function limpaCampos(id) {
  return refId(id).value = ""
}

function adicionarFilme() {
  var campoFilm = refId("filmeImg").value
  var campoName = refId("filmeNome").value

  validaExtensao(campoFilm, campoName)
  limpaCampos("filmeImg")
  limpaCampos("filmeNome")
}

function removerFilme(id) {
  const filme = refId(id)
  return filme.remove()
}