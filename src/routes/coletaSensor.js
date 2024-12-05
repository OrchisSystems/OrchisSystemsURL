var express = require("express");
var router = express.Router();


var coletaSensorController = require("../controllers/coletaSensoresController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/coletaSensor", function (req, res) {
    coletaSensorController.coletaSensorController(req, res);
})

router.post("/KpiEtilenoMax", function (req, res) {
    coletaSensorController.coletaKpiMaxEtilenoController(req, res);
})

router.post("/KpiEtilenoMin", function (req, res) {
    coletaSensorController.coletaKpiMinEtilenoController(req, res);
})

router.post("/KpiLuminosidadeMax", function (req, res) {
    coletaSensorController.coletaKpiMaxLuminosidadeController(req, res);
})

router.post("/KpiLuminosidadeMin", function (req, res) {
    coletaSensorController.coletaKpiMinLuminosidadeController(req, res);
})

router.post("/inserirNovaEstufa", function(req,res){
    coletaSensorController.inserirNovaEstufaController(req,res)
})


router.post("/atualizarEstufa", function(req,res){
    coletaSensorController.atualizarEstufaController(req,res)
})

router.post("/coletaGraficoEtileno", function(req, res){
    coletaSensorController.coletaGraficoEtileno(req, res)
})

router.post("/coletaGraficoEtileno", function(req, res){
    coletaSensorController.coletaGraficoEtileno(req, res)
})

router.post("/pegarMaximoEtileno", function(req, res){
    coletaSensorController.pegarMaximoEtilenoController(req, res)
})

router.post("/pegarMinimoEtileno", function(req, res){
    coletaSensorController.pegarMinimoEtilenoController(req, res)
})


router.post("/pegarMaximoLuminosidade", function(req, res){
    coletaSensorController.pegarMaximoLuminosidadeController(req, res)
})

router.post("/pegarMinimoLuminosidade", function(req, res){
    coletaSensorController.pegarMinimoLuminosidadeController(req, res)
})

router.post("/pegarIdsEstufas", function(req, res){
    coletaSensorController.pegarIdsEstufasController(req, res)
})

router.post("/pegarMetricasEstufa", function(req, res){
    coletaSensorController.pegarMetricasEstufaController(req, res)
})

router.post("/pegarQuantidadeEstufas", function(req, res){
    coletaSensorController.pegarQuantidadeEstufasController(req, res)
})


module.exports = router;