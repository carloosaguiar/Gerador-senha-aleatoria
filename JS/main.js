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

    gerarSenha(num_caractere){
        let senha = '';

        for(let i = 0; i <= num_caractere; i++){
            const funcoes = [this.maiuscula(),this.minuscula(),this.numero(),this.especial()];

            senha += funcoes[this.random(4)];

        }

        return senha;

    }

}

const ps = new geradorAleatorio();

