let listaDeNumerosSorteados = [];
let tentativas = 1;
let chute;

const verificarChute = () => {
    chute = parseInt(document.querySelector('input').value);

    if (chute === numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagensTentativas = `Você descobriu o número secreto com: ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', `${mensagensTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'Número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

const reiniciar = () => {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};

const mensagemInicial = () => {
    exibirTexto('h1','Jogo do núemero secreto');
    exibirTexto('p','Escolha um número entre 1 e 10');
};

const limparCampo = () => {
    chute = document.querySelector('input');
    chute.value = '';
};

const exibirTexto = (tag, texto) => {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female'),{rate:1.2}
}

exibirTexto('h1','Jogo do núemero secreto');
exibirTexto('p','Escolha um número entre 1 e 10');

const numeroAleatorio = () => {
    const numero =  parseInt(Math.random() * 10 + 1);
    
    if (listaDeNumerosSorteados.includes(numero)) {
        return numeroAleatorio();
    }

    listaDeNumerosSorteados.push(numero);
    return numero;
};

let numeroSecreto = numeroAleatorio();
