
var ValorLuminosidade = [];
var ValorEtileno = [];
var DataColeta = [];
var DataValorMaximoLuminosidade = document.getElementById('DataValorMaximoLuminosidade');
var DataValorMinimoLuminosidade = document.getElementById('DataValorMinimoLuminosidade');
var valorMaximoLuminosidade = document.getElementById('valorMaximoLuminosidade');
var valorMinimoLuminosidade = document.getElementById('valorMinimoLuminosidade');
var avisosLuminosidade = document.getElementById('avisosLuminosidade');
var DataValorMaximoEtileno = document.getElementById('DataValorMaximoEtileno');
var DataValorMinimoEtileno = document.getElementById('DataValorMinimoEtileno');
var valorMaximoEtileno = document.getElementById("valorMaxEtileno");
var valorMinimoEtileno = document.getElementById('valorMinimoEtileno');
var avisosEtileno = document.getElementById('avisosEtileno');

setInterval(function() {
    location.reload(); // Atualiza a página
}, 5000);


fetch("/coletaSensor/KpiEtilenoMax", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idEstufaClicadaServer: sessionStorage.FK_ESTUFA
    }),
}).then(function (resposta) {
    console.log("Peguei os dados do sensor")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            valorMaximoEtileno.innerHTML = json[0].Etileno
            DataValorMaximoEtileno.innerHTML = json[0].DataColeta


        });

    } else {

        console.log("Houve um erro ao armazenar sua pontuação!");

        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})

fetch("/coletaSensor/KpiEtilenoMin", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idEstufaClicadaServer: sessionStorage.FK_ESTUFA
    }),
}).then(function (resposta) {
    console.log("Peguei os dados do sensor")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            valorMinimoEtileno.innerHTML = json[0].Etileno
            DataValorMinimoEtileno.innerHTML = json[0].DataColeta


        });

    } else {

        console.log("Houve um erro ao armazenar sua pontuação!");

        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})

fetch("/coletaSensor/KpiLuminosidadeMax", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idEstufaClicadaServer: sessionStorage.FK_ESTUFA
    }),
}).then(function (resposta) {
    console.log("Peguei os dados do sensor")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            valorMaximoLuminosidade.innerHTML = json[0].Luminosidade
            DataValorMaximoLuminosidade.innerHTML = json[0].DataColeta


        });

    } else {

        console.log("Houve um erro ao armazenar sua pontuação!");

        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})

fetch("/coletaSensor/KpiLuminosidadeMin", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idEstufaClicadaServer: sessionStorage.FK_ESTUFA
    }),
}).then(function (resposta) {
    console.log("Peguei os dados do sensor")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            valorMinimoLuminosidade.innerHTML = json[0].Luminosidade
            DataValorMinimoLuminosidade.innerHTML = json[0].DataColeta


        });

    } else {

        console.log("Houve um erro ao armazenar sua pontuação!");

        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})

fetch("/coletaSensor/coletaSensor", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idEstufaClicadaServer: sessionStorage.FK_ESTUFA
    }),
}).then(function (resposta) {
    console.log("Peguei os dados do sensor")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            for (i = 0; i < json.length; i++) {
                ValorLuminosidade.push(json[i].Luminosidade)
                DataColeta.push(json[i].DataColeta)

            }

            const linhaLuminosidade = document.getElementById('luminosidadeLinha');



            const dataLuminosidade = {
                labels: DataColeta,
                datasets: [{
                    label: 'Luminosidade',
                    backgroundColor: '#B81476',
                    data: ValorLuminosidade,
                    borderRadius: 20
                },
                ]

            }

            

            const configLuminosidade = {
                type: 'line',
                data: dataLuminosidade,
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        annotation: {
                            annotations: {
                                line1: {
                                    type: 'line',
                                    yMin: 35, // Posição da linha no eixo y
                                    yMax: 35, // Posição da linha no eixo y
                                    borderColor: 'red',
                                    borderWidth: 2,
                                    label: {
                                        content: 'Luminosidade',
                                        enabled: true,
                                        position: 'end'
                                    }
                                },
                                line2: {
                                    type: 'line',
                                    yMin: 350, // Posição da linha no eixo y
                                    yMax: 350, // Posição da linha no eixo y
                                    borderColor: 'red',
                                    borderWidth: 2,
                                    label: {
                                        content: 'Luminosidade',
                                        enabled: true,
                                        position: 'end'
                                    }
                                }
                            }
                        }
                    }
                }
            };



            new Chart(linhaLuminosidade, configLuminosidade);


        });



    } else {

        console.log("Houve um erro ao armazenar sua pontuação!");

        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})


fetch("/coletaSensor/coletaSensor", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idEstufaClicadaServer: sessionStorage.FK_ESTUFA
    }),
}).then(function (resposta) {
    console.log("Peguei os dados do sensor")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            for (i = 0; i < json.length; i++) {
                ValorEtileno.push(json[i].Etileno)
            }

            const linhaetileno = document.getElementById('etilenoLinha');




            const dataEtileno = {
                labels: DataColeta,
                datasets: [{
                    label: 'Etileno',
                    backgroundColor: '#B81476',
                    data: ValorEtileno,
                    borderRadius: 20
                },
                ]

            }

            const configEtileno = {
                type: 'line',
                data: dataEtileno,
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        annotation: {
                            annotations: {
                                line3: {
                                    type: 'line',
                                    yMin: 35,
                                    yMax: 35,
                                    borderColor: 'red',
                                    borderWidth: 2,
                                    label: {
                                        content: 'Luminosidade Mínima',
                                        enabled: true,
                                        position: 'end'
                                    }
                                },
                                line4: {
                                    type: 'line',
                                    yMin: 350, // Posição da linha no eixo y
                                    yMax: 350, // Posição da linha no eixo y
                                    borderColor: 'red',
                                    borderWidth: 2,
                                    label: {
                                        content: 'Luminosidade Máxima',
                                        enabled: true,
                                        position: 'end'
                                    }
                                }
                            }
                        }
                    }
                }
            };

            new Chart(linhaetileno, configEtileno);



        });



    } else {

        console.log("Houve um erro ao armazenar sua pontuação!");

        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})
