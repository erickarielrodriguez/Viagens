var header = document.getElementById("header");
var pe = document.getElementById("peru");
var bo = document.getElementById("bolivia");
var ch = document.getElementById("chile");
var eq = document.getElementById("equador");
var titulo = document.getElementById("titulo");
var conteudo = document.getElementById("conteudo");

pe.onclick = function(){
    header.style.backgroundImage = "url(Imagens/MACHU-PICCHU-PERU.jpg)";
    titulo.innerHTML = "MACHU PICCHU, PERU"
    conteudo.innerHTML ="Também conhecida como a cidade perdida dos Incas, as construções pré-colombianas foram descoberta apenas no começo do século 20 e hoje são um dos símbolos do Peru."
}
bo.onclick = function(){
    header.style.backgroundImage = "url(Imagens/SALAR-DE-UYUNI-BOLÍVIA.jpg)";
    titulo.innerHTML = "SALAR DE UYUNI, BOLÍVIA"
    conteudo.innerHTML ="Maior planície de sal do mundo, está localizada a mais de 3.600m de altitude, perto da borda da Cordilheira dos Andes."
}
ch.onclick = function(){
    header.style.backgroundImage = "url(Imagens/DESERTO-DO-ATACAMA-CHILE.jpg)";
    titulo.innerHTML = "DESERTO DO ATACAMA, CHILE"
    conteudo.innerHTML = "Localizado ao norte do Chile, o Deserto do Atacama é o mais alto e mais árido do mundo. A principal cidade da região é San Pedro de Atacama, onde visitantes montam base para conhecer o Atacama."
}
eq.onclick = function(){
    header.style.backgroundImage = "url(Imagens/VULCAO-QUILOTOA-EQUADOR.jpg)";
    titulo.innerHTML = "VULCÃO QUILOTOA, EQUADOR"
    conteudo.innerHTML = "Nesse vulcão equatoriano, a cratera localizada a mais de 3.800m de altitude trocou a lava por águas azuis."
}
