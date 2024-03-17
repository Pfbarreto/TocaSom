/* Olá eu do furuto. 
Lembra que os navegadores n deixam tocar um som logo de cara
ai fizemos  uma função "function" para selecionar o som e depois buscamos a função com onclick por meio do botão
function toca_som_pom() {
     document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = toca_som_pom;
*/

function toca_som(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('elemento não encontrado');
    }

    
}


const listadeteclas = document.querySelectorAll('.tecla');





for (let contador = 0;contador < listadeteclas.length; contador++){

    const tecla = listadeteclas[contador];

    const instrumento = tecla.classList[1];
    //classList pega o nome da classe no HTML. tecla.classList[1] está com o marcador 1 pq tem duas classes e ele ve como uma lista

    //console.log(instrumento);


    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        toca_som(idAudio);
    };
    

    //console.log(contador);

    tecla.onkeydown = function (evento){
        console.log(evento.code == 'Space'||evento.code=='Enter')
        if ((evento.code == 'Space' || evento.code == 'Enter')) {
            tecla.classList.add('ativa');
        }
        
    };

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    };

}

