function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag imagem
  const img = document.querySelector("#profile img ")

  //depois substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver lightmode, adicionar a imagem
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto COM light")
  } else {
    //se tiver sem lightmode, manter a imagem
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto SEM light")
  }

}