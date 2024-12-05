var coletaSensorModel = require("../models/coletaSensoresModel")

function coletaSensorController(req,res){
    var idEstufa = req.body.idEstufaClicadaServer
    coletaSensorModel.coletaSensor(idEstufa)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function coletaGraficoEtileno(req,res){
    var idEstufa = req.body.idDaEstufaClicada
    coletaSensorModel.coletaGraficoEtileno(idEstufa)
    .then (
        function (resultado){
            req.json(resultado)
        }
    ).catch (
        function(erro){
            console.log(erro), console.log("Houve um erro na coleta dos dados de Etileno")
            res.status(500).json(erro.sqlMessage)
        }
    )
}

function coletaGraficoLuminosidade(req, res){
    var idEstufa = req.body.idDaEstufaClicada
    coletaSensorModel.coletaGraficoLuminosidade(idEstufa)
    .then (
        function(resultado){
            req.json(resultado)
        }
    ).catch(
        function (erro){
            console.log(erro), console.log("Houve um erro na coleta dos dados de Luminosidade")
            res.status(500).json(erro.sqlMessage)
        }
    )
}

function coletaKpiMaxEtilenoController(req,res){
    var idEstufa = req.body.idEstufaClicadaServer
    coletaSensorModel.coletaKpiMaxEtileno(idEstufa)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function coletaKpiMinEtilenoController(req,res){
    var idEstufa = req.body.idEstufaClicadaServer
    coletaSensorModel.coletaKpiMinEtileno(idEstufa)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function coletaKpiMaxLuminosidadeController(req,res){
    var idEstufa = req.body.idEstufaClicadaServer
    coletaSensorModel.coletaKpiMaxLuminosidade(idEstufa)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function coletaKpiMinLuminosidadeController(req,res){
    var idEstufa = req.body.idEstufaClicadaServer
    coletaSensorModel.coletaKpiMinLuminosidade(idEstufa)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}


function inserirNovaEstufaController(req, res){
    var maxEtileno = req.body.maxEtilenoServer;
    var minEtileno = req.body.minEtilenoServer;
    var maxLuminosidade = req.body.maxLuminosidadeServer;
    var minLuminosidade = req.body.minLuminosidadeServer;
    var fkEmpresa = req.body.fkEmpresaServer;
    var perfilCliente = req.body.perfilClienteServer;

    coletaSensorModel.inserirNovaEstufa(maxEtileno, minEtileno, maxLuminosidade, minLuminosidade, fkEmpresa, perfilCliente)
        .then(function(resultado){
            res.json(resultado)
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    )
}

function atualizarEstufaController(req, res){
    var idEstufa = req.body.idEstufaServer;
    var maxEtileno = req.body.maxEtilenoServer;
    var minEtileno = req.body.minEtilenoServer;
    var maxLuminosidade = req.body.maxLuminosidadeServer;
    var minLuminosidade = req.body.minLuminosidadeServer;

    coletaSensorModel.atualizarEstufa(idEstufa, maxEtileno, minEtileno, maxLuminosidade, minLuminosidade)
        .then(function(resultado){
            res.json(resultado)
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    )
}

function pegarMaximoEtilenoController(req, res){
    var idEstufa = req.body.idEstufaServer;
    coletaSensorModel.valorMaximoEtilenoEstufa(idEstufa)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}


function pegarMinimoEtilenoController(req, res){
    var idEstufa = req.body.idEstufaServer;
    coletaSensorModel.valorMinimoEtilenoEstufa(idEstufa)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function pegarMaximoLuminosidadeController(req, res){
    var idEstufa = req.body.idEstufaServer;
    coletaSensorModel.valorMaximoLuminosidadeEstufa(idEstufa)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function pegarMinimoLuminosidadeController(req, res){
    var idEstufa = req.body.idEstufaServer;
    coletaSensorModel.valorMinimoLuminosidadeEstufa(idEstufa)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function pegarIdsEstufasController(req, res){
    var fkEmpresa = req.body.fkEmpresaServer;
    coletaSensorModel.pegarIdsEstufas(fkEmpresa)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function pegarMetricasEstufaController(req, res){
    var idEstufa = req.body.idEstufaServer;
    coletaSensorModel.pegarMetricasEstufa(idEstufa)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function pegarQuantidadeEstufasController(req, res){
    var fkEmpresa = req.body.fkEmpresaServer;
    coletaSensorModel.pegarQuantidadeEstufas(fkEmpresa)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}


module.exports = {
    atualizarEstufaController,
    coletaGraficoEtileno,
    coletaGraficoLuminosidade,
    inserirNovaEstufaController,
    coletaSensorController,
    coletaKpiMaxEtilenoController,
    coletaKpiMinEtilenoController,
    coletaKpiMaxLuminosidadeController,
    coletaKpiMinLuminosidadeController,
    pegarMaximoEtilenoController,
    pegarMinimoEtilenoController,
    pegarMaximoLuminosidadeController,
    pegarMinimoLuminosidadeController,
    pegarIdsEstufasController,
    pegarMetricasEstufaController,
    pegarQuantidadeEstufasController
};