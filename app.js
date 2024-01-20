const titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

const verificarChute = () => {
    console.log('O botão foi clicado');
    alert('Eu amo JS');
}

const verificarPrompt = () => {
    console.log('O botão foi clicado');
    const cidade = prompt('Diga o nome de uma cidade que você já esteve');
    alert(`Estive em ${cidade} e lembrei de você`);
};

const soma = () => {
    const numero1 =  prompt('Digite um número: ');
    const numero2 =  prompt('Digite um número: ');
    const soma = parseInt(numero1) + parseInt(numero2);

    alert(`Resultado: ${soma}`);
};

