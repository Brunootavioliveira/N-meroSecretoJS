alert('Boas vindas ao jogo do número secreto');
let num = 100;
let numeroSecreto = parseInt(Math.random() * num + 1);
console.log(numeroSecreto);
let numeroDigitado;
let tent = 1;



while (numeroSecreto != numeroDigitado) {
    numeroDigitado = prompt(`Escolha um número entre 1 e ${num}`);
    if (numeroSecreto == numeroDigitado) {
        break; 
    } else {
        if (numeroSecreto > numeroDigitado) {
            alert(`O número secreto é maior que ${numeroDigitado}`);
        } else  {
            alert(`O número secreto é menor que ${numeroDigitado}`);
        }
        tent++;
    }
}

let palavraTent = tent > 1 ? 'tentativas' : 'tentativa';
    alert(`Parabéns, você acertou o número secreto! O número era ${numeroSecreto}, acertou com ${tent} ${palavraTent}`);

