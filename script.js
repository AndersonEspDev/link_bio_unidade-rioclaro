function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img

  const img = document.querySelector('#profile img')

  // se tiver light mode, adicionar a imagem avatar 2

  if (html.classList.contains('light')) {
    img.setAttribute('src', './avatar-light.png')
    //se tiver sem light mode, manter a imagem normal
  } else {
    img.setAttribute('src', './Avatar.png')
  }
}

//  if (html.classList.contains('light')) {
//    html.classList.remove('light')
// } else {
//   html.classList.add('light')
//  }

//subistituir a imagem
