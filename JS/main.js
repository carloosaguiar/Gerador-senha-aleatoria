class geradorAleatorio {
    constructor(){
        this.maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.minusculas = 'abcdefghijklmnopqrstuvwxyz';
        this.numeros = '0123456789';
        this.especiais = '@#$%&!*';
    }

    random(intervalo){
        return parseInt(Math.random()*intervalo);
    }

    maiuscula(){
        return this.maiusculas[this.random(26)];
    }

    minuscula(){
        return this.minusculas[this.random(26)];
    }

    numero(){
        return this.numeros[this.random(10)];
    }

    especial(){
        return this.especiais[this.random(7)];
    }

}

const GP = new geradorAleatorio();
const RANGE = document.getElementsByTagName('input')[0];
const INPUT_SENHA = document.getElementById('senha_input');
const LABEL = document.getElementsByTagName('label')[0];

//Butões
const COPIAR = document.getElementsByClassName('mx-2')[0];
const ATUALIZAR = document.getElementsByClassName('mx-2')[1];

// Checkbox
const CHECKBOX = document.getElementsByClassName('form-check-input');

for(let j = 0; j <= 3; j++){
    CHECKBOX[j].onclick = () =>{
        gerarSenha(RANGE.value);
    }
}

function exibirQntCara(){
    LABEL.innerHTML = `Quantidade de caracteres: ${RANGE.value}`;
}

function gerarSenha(num_caractere){
    let senha = '';

    if(CHECKBOX[0].checked || CHECKBOX[1].checked || CHECKBOX[2].checked || CHECKBOX[3].checked){

        for(let i = 0; i < num_caractere;){
            let num_random = GP.random(4);

            let funcoes = [GP.maiuscula(),GP.minuscula(),GP.numero(),GP.especial()];

            if(CHECKBOX[num_random].checked){
                senha += funcoes[num_random];
                i++
            }
    
        }

        INPUT_SENHA.value = senha;

    } else{
        alert('Por favor escolha um ou mais campos para gerar a senha!');
    }

}

exibirQntCara();
gerarSenha(RANGE.value);

RANGE.oninput = () => {
    exibirQntCara();
    gerarSenha(RANGE.value);
}

ATUALIZAR.onclick = () =>{
    gerarSenha(RANGE.value);
}

COPIAR.onclick = () =>{
    INPUT_SENHA.select();
    document.execCommand('copy');
}
