
    var fkEmpresa = sessionStorage.ID_USUARIO
    var valorMaximoEtileno = 0
    var valorMaximoLuminosidade = 0
    var listaIds = []
    var metricaEtileno = 0
    var metricaLuminosidade = 0
    var qtdEstufas = 0


    async function adicionarEstufa() {
        pegarIdsEstufas(fkEmpresa);
        await pegarQuantidadeEstufas(fkEmpresa);
        estufas.innerHTML = ``
        var contadorEstufa = 1

        for (index = 0; index < listaIds.length; index++){
            await pegarMaximoEtileno(listaIds[index]);
            await pegarMaximoLuminosidade(listaIds[index]);
            await pegarMetricasEstufa(listaIds[index]);
            estufas.innerHTML += `<a href="../dashboard/dashboard.html">
                <div id="${listaIds[index]}" class="cadaEstufa">
                    <h2>Estufa ${contadorEstufa}</h2>
                    <div class="conteudoEstufa">
                        Status: Muito bom <br>
                        <img src="./imagens/estufaMuitoBom.png" alt="">
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

    async function pegarMaximoEtileno(idEstufa){
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
                    
                    valorMaximoEtileno = json[0].Etileno
                    

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

    async function pegarMaximoLuminosidade(idEstufa){
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
                    
                    valorMaximoLuminosidade = json[0].Luminosidade
                    

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

        async function pegarIdsEstufas(fkEmpresa){
            await fetch("/coletaSensor/pegarIdsEstufas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fkEmpresaServer: fkEmpresa
            })
            }).then(function (resposta) {
                console.log("Peguei os dados dos Ids das estufas!")

                if (resposta.ok) {
                    console.log(resposta);

                    resposta.json().then(json => {
                        console.log(json);
                        
                        for (i = 0; i < json.length; i++)
                        listaIds.push([json[i].idEstufa])
                        

                    });

                } else {

                    console.log("Houve um erro ao pegas os Ids das estufas!");

                    resposta.text().then(texto => {
                        console.error(texto);
                        finalizarAguardar(texto);
                    });
                }

            }).catch(function (erro) {
                console.log(erro);
            })
        }
        
        async function pegarMetricasEstufa(idEstufa){
            await fetch("/coletaSensor/pegarMetricasEstufa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            idEstufaServer: idEstufa
            })
            }).then(function (resposta) {
                console.log("Peguei as métricas da estufa")

                if (resposta.ok) {
                    console.log(resposta);

                    resposta.json().then(json => {
                        console.log(json);
                        metricaEtileno = json[0].Etileno
                        metricaLuminosidade = json[0].Luminosidade

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
        
        async function pegarQuantidadeEstufas(fkEmpresa){
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
