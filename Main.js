
function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
//laço de repetição para percorrer todos atributos da classe "tecla"
while (contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];

    const instrumento = listaDeTeclas[contador].classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    contador =  contador + 1;
    console.log(contador);
}