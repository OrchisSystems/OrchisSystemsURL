var coletaSensorModel = require("../models/coletaSensoresModel")

function coletaSensorController(req,res){

    coletaSensorModel.coletaSensor()
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

function coletaKpiMaxEtilenoController(req,res){

    coletaSensorModel.coletaKpiMaxEtileno()
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

    coletaSensorModel.coletaKpiMinEtileno()
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

    coletaSensorModel.coletaKpiMaxLuminosidade()
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

    coletaSensorModel.coletaKpiMinLuminosidade()
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


function inserirNovaEstufa(req, res){
    coletaSensorModel.inserirNovaEstufa()
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

module.exports = {
    inserirNovaEstufa,
    coletaSensorController,
    coletaKpiMaxEtilenoController,
    coletaKpiMinEtilenoController,
    coletaKpiMaxLuminosidadeController,
    coletaKpiMinLuminosidadeController
};