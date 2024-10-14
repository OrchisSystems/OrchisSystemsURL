const container = document.querySelector('.container');
const botaoregistro = document.querySelector('.cadastro-login header');
const botaologin = document.querySelector('.secao-login header');

botaologin.addEventListener('click', () =>{
    container.classList.add('active');
});

botaoregistro.addEventListener('click', () =>{
    container.classList.remove('active');
});

const gerarSenha = document.getElementById('#senha');
const senhaGerada= document.getElementById('#senhaGerada');

var qtdSenha = 10
var senha = ``

const caracterRandom= 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklçzxcvnbm1234567890<>!@#$%&*()[]{}'

function gerarSenhaa(){
    for(cR = 1; cR <= qtdSenh; cr++ ){
        var numerosAleatorios= Math.Floor(Math.random()* caracterRandom.length)

        senha+=caracterRandom.substring(numerosAleatorios, numerosAleatorios + 1)

    }
    document.getElementById('#senha').value = senha
}





