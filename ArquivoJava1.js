function recomecar(){
    figura.src = "Seprepare.jpg";
    contagem.innerHTML = `A sequência de numeros é `
    document.body.style.background = '#C80036';
    numeroInicial.value = '' ;
    numeroFinal.value = '';
    numeroIntervalo.value = '';
}

function contar(){

let contagem = document.getElementById('contagem');
let numeroInicial = document.getElementById('numeroInicial');
let numeroFinal = document.getElementById('numeroFinal');
let numeroIntervalo = document.getElementById('numeroIntervalo');
let nI = parseInt(numeroInicial.value);
let nF = parseInt(numeroFinal.value);
let nIn = parseInt(numeroIntervalo.value);


if(nF == 0 || nIn == 0){ 
    window.alert('Não é possivel contar');
    } 

    if(nI < nF){ // contagem progressiva 
            for (let i = nI; i <= nF; i += nIn) {
            contagem.innerHTML += `${i} \u{1F61C}`}; }
    
    else {  // contagem regressiva
            for (let i = nI; i >= nF; i -= nIn) {
            contagem.innerHTML += `${i} \u{1F61C}`} 
                  
        
            figura.src = "wow.jpg" ;
            document.body.style.background = '#FF6969'}
            
            } 
