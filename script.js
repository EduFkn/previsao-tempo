const key="a62cf23d2619b4434c49913015b0c8b3"
function colocarDadosNaTela(dados){
  console.log(dados)
  document.querySelector(".city-name").innerHTML="tempo em " +dados.name
document.querySelector(".temp").innerHTML=Math.floor(dados.main.temp)+"°C"
document.querySelector(".text-previus").innerHTML=dados.weather[0].description
document.querySelector(".umidade").innerHTML=dados.main.humidity+"%"
document.querySelector(".img-previus").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
async function buscarCidade(cidade){
  const dados=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta=>resposta.json())
  
colocarDadosNaTela(dados)
}

function cliqueiNoBotao(){
const cidade=document.querySelector(".input-city").value

buscarCidade(cidade)

}