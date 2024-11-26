
var ValorLuminosidade = []
var ValorEtileno = []
var DataColeta = []






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

