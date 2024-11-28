
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




fetch("/coletaSensor/KpiEtilenoMax", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
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
    }
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
    }
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
    }
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
    }
}).then(function (resposta) {
    console.log("Peguei os dados do sensor")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            for (i = 0; i < json.length; i++) {
                ValorLuminosidade.push(json[i].Luminosidade)
                DataColeta.push(json[i].DataColeta)
                ValorEtileno.push(json[i].Etileno)
            }

            const linhaLuminosidade = document.getElementById('luminosidadeLinha');
            const linhaetileno = document.getElementById('etilenoLinha');
       
            

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
                options:{
                    responsive: true, 
                    scales: {
                        y: {
                            beginAtZero: true 
                        }
                    }
                }
            }
           
         
            

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
                options:{
                    responsive: true, 
                    scales: {
                        y: {
                            beginAtZero: true 
                        }
                    }
                }
            }
           
            new Chart(linhaetileno, configEtileno);
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

