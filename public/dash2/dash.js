
var fkEmpresa = sessionStorage.ID_USUARIO
var valorMaxEtileno = 0
var valorMaxLuminosidade = 0
var valorMinEtileno = 0
var valorMinLuminosidade = 0
var listaIds = []
var metricaMaxEtileno = 0
var metricaMaxLuminosidade = 0
var metricaMinEtileno = 0
var metricaMinLuminosidade = 0
var qtdEstufas = 0
var statusEstufa = ""
var idDaEstufaClicada = ""
var perfilCliente = ""



document.addEventListener('DOMContentLoaded', function () {
    adicionarEstufa()
});


async function adicionarEstufa() {
    await pegarIdsEstufas(fkEmpresa);
    // await pegarQuantidadeEstufas(fkEmpresa);
    estufas.innerHTML = ``
    var contadorEstufa = 0



    for (index = 0; index < listaIds.length; index++) {
        await pegarMaximoEtileno(listaIds[index]);
        await pegarMinimoEtileno(listaIds[index]);
        await pegarMinimoLuminosidade(listaIds[index]);
        await pegarMaximoLuminosidade(listaIds[index]);
        await pegarMetricasEstufa(listaIds[index]);

        var multiplicadorDePerfil = 0

        if (perfildoCliente == "Conservador") {
            multiplicadorDePerfil = 20
        }
        else if (perfildoCliente == "Moderado") {
            multiplicadorDePerfil = 12
        }
        else if (perfildoCliente == "Agressivo") {
            multiplicadorDePerfil = 5
        }

        var avisoRuimMaxEtileno = metricaMaxEtileno - ((metricaMaxEtileno * multiplicadorDePerfil) / 100)
        var avisoRuimMinEtileno = metricaMinEtileno + ((metricaMinEtileno * multiplicadorDePerfil) / 100)

        var avisoRuimMaxLuminosidade = metricaMaxLuminosidade - ((metricaMaxLuminosidade * multiplicadorDePerfil) / 100)
        var avisoRuimMinLuminosidade = metricaMinLuminosidade + ((metricaMinLuminosidade * multiplicadorDePerfil) / 100)

        if ((valorMaxEtileno > metricaMaxEtileno) ||
            (valorMaxLuminosidade > metricaMaxLuminosidade) || 
            (valorMinEtileno < metricaMinEtileno) ||
            (valorMinLuminosidade < metricaMinLuminosidade)) {
            statusEstufa = "Muito Ruim"
        }
        else if ((valorMaxEtileno > avisoRuimMaxEtileno) ||
            (valorMaxLuminosidade > avisoRuimMaxLuminosidade) ||
            (valorMinEtileno < avisoRuimMinEtileno) ||
            (valorMinLuminosidade < avisoRuimMinLuminosidade)) {
            statusEstufa = "Ruim"
        }
        else {
            statusEstufa = "Muito Bom"
        }

        if (contadorEstufa % 3 == 0 ) {
            estufas.innerHTML += `<div style="width: 100%;"></div>`;
        }
        
        estufas.innerHTML += `
            <a onclick="redirecionarEstufa(${listaIds[index]})">
                <div id="${listaIds[index]}" class="cadaEstufa">
                    <h2>Estufa ${contadorEstufa + 1}</h2>
                    <div class="conteudoEstufa">
                        Status: ${statusEstufa} <br>
                        <img src="./imagens/estufa${statusEstufa}.png">
                    </div>
                </div>
            </a>`;
        
        contadorEstufa++;
    }
}

function abrirMenu() {
    menuLateral.style.width = '250px'
}
function fecharMenu() {
    menuLateral.style.width = '0px'
}

async function pegarMaximoEtileno(idEstufa) {
    await fetch("/coletaSensor/pegarMaximoEtileno", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idEstufaServer: idEstufa
        })
    }).then(function (resposta) {
        console.log("Peguei o maior valor de etileno")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);

                valorMaxEtileno = json[0].Etileno


            });

        } else {

            console.log("Houve um erro ao pegar o maximo do etileno!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}

async function pegarMinimoEtileno(idEstufa) {
    await fetch("/coletaSensor/pegarMinimoEtileno", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idEstufaServer: idEstufa
        })
    }).then(function (resposta) {
        console.log("Peguei o menor valor de etileno")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);

                valorMinEtileno = json[0].Etileno


            });

        } else {

            console.log("Houve um erro ao pegar o maximo do etileno!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}

async function pegarMaximoLuminosidade(idEstufa) {
    await fetch("/coletaSensor/pegarMaximoLuminosidade", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idEstufaServer: idEstufa
        })
    }).then(function (resposta) {
        console.log("Peguei o dado maximo de luminosidade")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);

                valorMaxLuminosidade = json[0].Luminosidade


            });

        } else {

            console.log("Houve um erro ao pegar o maximo da luminosidade");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}

async function pegarMinimoLuminosidade(idEstufa) {
    await fetch("/coletaSensor/pegarMinimoLuminosidade", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idEstufaServer: idEstufa
        })
    }).then(function (resposta) {
        console.log("Peguei o dado minimo de luminosidade")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);

                valorMinLuminosidade = json[0].Luminosidade


            });

        } else {

            console.log("Houve um erro ao pegar o maximo da luminosidade");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}


async function pegarIdsEstufas(fkEmpresa) {
    return new Promise((resolve, reject) => {
        fetch("/coletaSensor/pegarIdsEstufas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fkEmpresaServer: fkEmpresa
            })
        }).then(function (resposta) {
            console.log("Peguei os dados dos Ids das estufas!");

            if (resposta.ok) {
                console.log(resposta);

                // Processando a resposta JSON
                resposta.json().then(json => {
                    console.log(json);

                    // Armazenando os dados
                    for (let i = 0; i < json.length; i++) {
                        listaIds.push([json[i].idEstufa]);
                    }

                    // Resolva a Promise com a lista de IDs
                    resolve(listaIds); // Resolver a Promise com os dados
                }).catch(err => {
                    console.error("Erro ao parsear JSON:", err);
                    reject(err); // Rejeita a Promise se houver erro no parsing
                });

            } else {
                console.log("Houve um erro ao pegar os Ids das estufas!");

                resposta.text().then(texto => {
                    console.error(texto);
                    reject(new Error(texto)); // Rejeitar com a mensagem de erro
                }).catch(err => {
                    reject(err); // Rejeitar caso erro no texto
                });
            }

        }).catch(function (erro) {
            console.error("Erro na requisição:", erro);
            reject(erro); // Rejeitar caso haja erro na requisição
        });
    });
}


function pegarMetricasEstufa(idEstufa) {
    return new Promise((resolve, reject) => {
        fetch("/coletaSensor/pegarMetricasEstufa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ idEstufaServer: idEstufa })
        })
            .then(resposta => {
                console.log("Peguei as métricas da estufa");

                if (resposta.ok) {
                    return resposta.json(); // Retorna o JSON para ser processado
                } else {
                    return resposta.text().then(texto => {
                        reject(new Error(`Erro ao pegar métricas: ${texto}`)); // Rejeita a Promise com o erro
                    });
                }
            })
            .then(json => {
                console.log(json);
                // Preenche as métricas
                metricaMaxEtileno = json[0].maxEtileno;
                metricaMaxLuminosidade = json[0].maxLuminosidade;
                metricaMinEtileno = json[0].minEtileno;
                metricaMinLuminosidade = json[0].minLuminosidade;
                perfildoCliente = json[0].perfilCliente;
                sessionStorage.MAX_ETILENO = metricaMaxEtileno
                sessionStorage.MAX_LUMINOSIDADE = metricaMaxLuminosidade
                sessionStorage.MIN_ETILENO = metricaMinEtileno
                sessionStorage.MIN_LUMINOSIDADE = metricaMinLuminosidade

                // Resolve a Promise com as métricas (caso tudo corra bem)
                resolve({ metricaMaxEtileno, metricaMaxLuminosidade, });
            })
            .catch(erro => {
                // Se algo der errado (ex: falha na requisição), rejeita a Promise com o erro
                console.error("Erro na requisição:", erro);
                reject(erro);
            });
    });
}


async function pegarQuantidadeEstufas(fkEmpresa) {
    await fetch("/coletaSensor/pegarQuantidadeEstufas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkEmpresaServer: fkEmpresa
        })
    }).then(function (resposta) {
        console.log("Peguei as métricas da estufa")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                qtdEstufas = json[0].quantidade

            });

        } else {

            console.log("Houve um erro ao pegar as métricas");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}

function redirecionarEstufa(id) {
    window.location = '../dashboard/dashboard.html'
    sessionStorage.FK_ESTUFA = id
}

function sairSessao() {
    sessionStorage.clear();
}