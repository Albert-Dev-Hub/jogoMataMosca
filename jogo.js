let altura = 0
let largura = 0
let vidas = 1
let tempo = 10

let criaMoscaTempo = 1500
//Seleciona o nível do jogo
let nivel = window.location.search
  nivel = nivel.replace("?", '')
  

if(nivel === "normal"){
  criaMoscaTempo = 1500
}else if(nivel === "dificil") {
  criaMoscaTempo = 1000
}else{
  criaMoscaTempo = 750
}

// Limita  a altura e a largura de acordo com o tamanho da pagida do navegador
function ajustarTamanhoPalcoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth
}
ajustarTamanhoPalcoJogo()

//Cria o cronometro
let cronometro = setInterval(function(){

  tempo -=1
//Logica é aplicada parA verificar a vitoria do jogar
  if(tempo < 0){
  clearInterval(cronometro)//Encerra o cronometro
  clearInterval(criaMosca)//Encerra a criação de moscas
  window.location.href = 'vitoria.html' //Redireciona para a página vitoria caso o tempo tenha se esgotado e as vidas ñ tenha acabado

}else{
  document.getElementById('cronometro').innerHTML = tempo
}  
}, 1000)


// Produz valores  aleatorios baseado no limite dado pela fução ajustarTamanhoPalcoJogo()
function posicaoRandomica() {
 
 //remove o mosquito anterior (caso exista)
 if(document.getElementById('mosca')){ 
    document.getElementById('mosca').remove() 
   
  //Catabiliza a quantidade de vidas logica aplicada para verificar a derrota do jogador  
    if(vidas > 3){ 
     window.location.href = 'fim_jogo.html'
   }else{
      document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
      vidas++
  }
  }
 
  //Gera posição aleatoria onde o mosquito vai aparecer ela é limitada em -90 do tamanho limite da tela  
  let posicaoX = Math.floor(Math.random() * largura) - 90
  let posicaoY = Math.floor(Math.random() * altura) - 90

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  
  //Criar o elemento Html e atribui a ele os valores randomicos da posição X e Y
  let mosca = document.createElement('img')
  mosca.src = 'imagens/mosca.png'
  mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //Atribui a classe do CSS os tamanhos e lado da imagem mosca 
  mosca.style.left = posicaoX + 'px'
  mosca.style.top = posicaoY + 'px'
  mosca.style.position = 'absolute'
  mosca.id = 'mosca'
  mosca.onclick = function(){
    this.remove()
  }

  document.body.appendChild(mosca)
  tamanhoAleatorio()
  
}

//Altera de forma aleatoria dos tamanhos da imagem mosca 
function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 3)
  
  switch (classe) {
    case 0:
      return 'mosca1'

    case 1:
      return 'mosca2'

    case 2:
      return 'mosca3'
  }
}

//Altera de forma aleatoria os lados da imagem mosca
function ladoAleatorio() {
  let classe = Math.floor(Math.random() * 2)
  
  switch (classe) {
    case 0:
      return 'ladoA'

    case 1:
      return 'ladoB'

  }
}
