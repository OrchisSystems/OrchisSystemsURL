/*Evento de arrastar o Login para cima*/

const container = document.querySelector('.container');
const botaoregistro = document.querySelector('.cadastro-login header');
const botaologin = document.querySelector('.secao-login header');

botaologin.addEventListener('click', () =>{
    container.classList.add('active');
});

botaoregistro.addEventListener('click', () =>{
    container.classList.remove('active');
});


/*Geração de Senha Aleatória*/
const gerarSenha = document.getElementById('senha')
const senhaGerada = document.getElementById('senhaGerada').value
const senhaGerada2 = document.getElementById('senhaGerada2').value


const caracterRandom= 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklçzxcvnbm1234567890<>!@#$%&*()[]{}';

    var qtdSenha = 8;
    gerarSenha.addEventListener('click',
    function gerarSenhaa(){
    for(cR = 1; cR <= qtdSenha; cR++ ){
        var senha = ``;
        for(randomChar = 1; randomChar <= qtdSenha; randomChar++){ 
        var numerosAleatorios= Math.floor(Math.random()* caracterRandom.length)

        console.log(`${numerosAleatorios}`)
        senha+=caracterRandom.substring(numerosAleatorios, numerosAleatorios + 1)
        }
    }
    document.getElementById('senhaGerada').value = senha
    document.getElementById('senhaGerada2').value = senha
   
});

/* Mostrar senha*/
var a = 0; // Inicializa a variável 'a'

        function pass() {
            if (a == 1) {
                document.getElementById('senhaGerada').type = 'password';
                document.getElementById('senhaGerada2').type = 'password';
                document.getElementById('pass-icon1').src = '../login/icon/eye.1024x769.png';
                document.getElementById('pass-icon2').src = '../login/icon/eye.1024x769.png';
                a = 0;
            } else {
                document.getElementById('senhaGerada').type = 'text';
                document.getElementById('senhaGerada2').type = 'text';
                document.getElementById('pass-icon1').src = '../login/icon/eye-password-hide-icon-1024x1024-d7ey18s8.png';
                document.getElementById('pass-icon2').src = '../login/icon/eye-password-hide-icon-1024x1024-d7ey18s8.png';
                a = 1;
            }
        }
/* Link tela dash*/
        function cadastro(event) {
            event.preventDefault(); // Previne o comportamento padrão de recarregar a página
            window.location.href = '../dashboard/dashboard.html'; // Redireciona para a página do dashboard
        }



        function mascaraCNPJ(cnpj) {
            let valor = cnpj.value.replace(/\D/g, '');  // Remove tudo que não for dígito
        
            // Formata o CNPJ conforme o número de dígitos
            if (valor.length <= 14) {
                valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
                valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
                valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
                valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
            }
        
            cnpj.value = valor;  // Atualiza o valor no input com o formato
        }



