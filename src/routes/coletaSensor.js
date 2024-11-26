var express = require("express");
var router = express.Router();


var coletaSensorController = require("../controllers/coletaSensoresController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/coletaSensor", function (req, res) {
    coletaSensorController.coletaSensorController(req, res);
})

module.exports = router;