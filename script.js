function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();    
    } else {
        alert('Elemento nulo ou seletor invalidado!');
    }
}

const listaDePatos = document.querySelectorAll('.pato')

for (let i = 0; i < listaDePatos.length; i++){
    const pato = listaDePatos[i];
    const quack = pato.classList[1];
    const idAudio = `#som_${quack}`;

    pato.onclick = function(){
        tocaSom(idAudio);
    }

    pato.onkeydown = function(evento){
        if (evento.code == 'Enter' || evento.code == 'Space'){
            pato.classList.add('ativa');
        } 
    }

    pato.onkeyup = function(){
        pato.classList.remove('ativa');
    }
}
