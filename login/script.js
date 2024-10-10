const container = document.querySelector('.container');
const botaoregistro = document.querySelector('.cadastro-login header');
const botaologin = document.querySelector('.secao-login header');

botaologin.addEventListener('click', () =>{
    container.classList.add('active');
});

botaoregistro.addEventListener('click', () =>{
    container.classList.remove('active');
});

