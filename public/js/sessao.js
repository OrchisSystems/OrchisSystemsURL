// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var usuario = document.getElementById("usuario");

    if (email != null && nome != null) {
        usuario.innerHTML = nome;
        if(email == 'orchissystem@gmail.com'){
            window.location = "../bobIA/index.html"
        }
    } else {
        window.location = "../login/index.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login/index.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "block";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

