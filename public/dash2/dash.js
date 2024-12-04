
var fkEmpresa = sessionStorage.ID_USUARIO
var valorMaxEtileno = 0
var valorMaxLuminosidade = 0
var listaIds = []
var metricaEtileno = 0
var metricaLuminosidade = 0
var qtdEstufas = 0
var statusEstufa = ""
var idDaEstufaClicada = ""



document.addEventListener('DOMContentLoaded', function() {
        adicionarEstufa()
});





async function adicionarEstufa() {
    await pegarIdsEstufas(fkEmpresa);
    // await pegarQuantidadeEstufas(fkEmpresa);
    estufas.innerHTML = ``
    var contadorEstufa = 1



    for (index = 0; index < listaIds.length; index++) {
        await pegarMaximoEtileno(listaIds[index]);
        await pegarMaximoLuminosidade(listaIds[index]);
        await pegarMetricasEstufa(listaIds[index]);

        var avisoRuimEtileno = metricaEtileno - ((metricaEtileno * 20) / 100)
        var avisoRuimLuminosidade = metricaLuminosidade - ((metricaLuminosidade * 20) / 100)

        if ((valorMaxEtileno > metricaEtileno) ||
        (valorMaxLuminosidade > metricaLuminosidade)) {
            statusEstufa = "Muito Ruim"
        }
        else if ((valorMaxEtileno > avisoRuimEtileno) ||
        (valorMaxLuminosidade > avisoRuimLuminosidade)) {
        statusEstufa = "Ruim"
        }
        else{
            statusEstufa = "Muito Bom"
        }


        estufas.innerHTML += `<a onclick="redirecionarEstufa(${listaIds[index]})">
                <div id="${listaIds[index]}" class="cadaEstufa">
                    <h2>Estufa ${contadorEstufa}</h2>
                    <div class="conteudoEstufa">
                        Status: ${statusEstufa} <br>
                        <img src="./imagens/estufa${statusEstufa}.png">
                    </div>
                </div>
            </a>`
        contadorEstufa++
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
            metricaEtileno = json[0].Etileno;
            metricaLuminosidade = json[0].Luminosidade;

            // Resolve a Promise com as métricas (caso tudo corra bem)
            resolve({ metricaEtileno, metricaLuminosidade });
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

 async function redirecionarEstufa(id){
    var idEstufaClicada = id
    console.log(idEstufaClicada)
    await fetch("/coletaSensor/coletaSensor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idEstufaClicadaServer: idEstufaClicada
        })
    }).then(function (resposta) {
        console.log("Redirecionei a estufa")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                window.location = "../dashboard/dashboard.html"

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