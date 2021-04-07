function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.querySelector('#txtano')
  var res = document.querySelector('#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert(`[ERRO] Verifique os dados e tente novamente `)
  }  else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'imagens')
      if (fsex[0].checked) {
          gênero = 'Homem'
          if (idade >= 0 && idade <= 10) {
            //criança 
            img.setAttribute('src', 'imagens/menino.png') 
          } else if (idade < 21) {
              //Jovem
              img.setAttribute('src', 'imagens/jovem.png')
          } else if (idade < 60) {
              //adulto
              img.setAttribute('src', 'imagens/homem_adulto.png')
          } else {
              //idoso
              img.setAttribute('src', 'imagens/idoso.png')
          }
          

      }  else if (fsex[1].checked) {
           gênero = 'Mulher'
           if (idade >= 0 && idade <= 10) {
            //criança  
            img.setAttribute('src', 'imagens/menina.png')
          } else if (idade < 21) {
              //Jovem
            img.setAttribute('src', 'imagens/mulher_jovem.png')
          } else if (idade < 60) {
              //adulto
            img.setAttribute('src', 'imagens/mulher_adulta.png')
          } else {
              //idoso
            img.setAttribute('src', 'imagens/idosa.png')
          }
  }
  res.style.textAlign = 'center'
  res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
  res.appendChild(img)
}
}